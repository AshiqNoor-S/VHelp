import React, { useEffect, useState } from 'react';
import '../styles/servicetile.css';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

function Servicetile({ serviceName, serviceDescription, animsrc }) {

  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const [serviceRoute, setServiceRoute] = useState("");

  useEffect(() => {
    if(!isAdmin){
      if (serviceName === 'Laundry Logistics') {
        setServiceRoute("/laundry");
      } else if (serviceName === 'Foodpark Ordering System') {
        setServiceRoute("/mess-data");
      }
    }
    else{
      if (serviceName === 'Laundry Logistics') {
        setServiceRoute("/laundry");
      }
      else setServiceRoute("/download-app");
    }
  }, [isAdmin])

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
          setCurrentUserEmail(user.email);
          checkAdminOrNot(user.email); // Pass user email to checkAdminOrNot
      } else {
          setCurrentUserEmail('');
          setIsAdmin(false);
          setLoading(false); // Set loading state to false when user is not logged in
      }
      });

      return () => unsubscribe(); // Clean up the listener

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const checkAdminOrNot = async (email) => {
        const querySnapshot = await getDocs(collection(db, 'admin'));
        const documents = querySnapshot.docs.map((doc) => doc.data());
        const adminEmails = documents.map((doc) => doc.email);
        if (adminEmails.includes(email)) {
        setIsAdmin(true);
        }
        setLoading(false); // Set loading state to false after checking admin status
    };

    if (loading) return <div>Loading...</div>; // Show loading indicator

  return (
    <div className="container">
      <div className='service-tile'>
        <div className='service-tile__img'>
        <lottie-player src={animsrc} background="##ffffff" speed="1" style={{width: 500, height: 500}} loop autoplay direction="1" mode="normal"></lottie-player>
        </div>
        <div className='service-tile__text right_text'>
          <h3>{serviceName}</h3>
          <p>{serviceDescription}</p>
          <Link to={serviceRoute}>
            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}



export default Servicetile;
