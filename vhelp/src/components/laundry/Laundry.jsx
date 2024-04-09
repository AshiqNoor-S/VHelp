import React, { useEffect, useState } from 'react';
import '../styles/laundry.css';
import LaundryCard from './LaundryCard';
import serviceStatus from './statusicon.png';
import serviceSchedule from './scheduleIcon.png';
import lost from './lost.png';
import report from './report.png';
import close from './close.png';
import HeroImage from './girlHoldingLaundry.png';
import WashingMachine from './washingmachinejpg.jpg';
import { auth, db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Laundry = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

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
    <div className='laundry'>
      <div className='heroSection'>
        <div className='heroDetails'>
          <div className='heroTitle'>For All Your Hostel Laundry Needs</div>
          <div>
            Tired of the uncertainty of the laundry process? Tired of going to chotta Dhobhi just to realize it is the
            wrong day? Worry no more, we got it covered for you.
          </div>
        </div>
        <div className='heroImage'>
          <img src={HeroImage} style={{ width: '100%' }} alt='Hero' />
        </div>
      </div>
      <div className='services'>
        <LaundryCard serviceUrl={serviceSchedule} serviceName={'Check Schedule'} />
        {!isAdmin && <LaundryCard serviceUrl={serviceStatus} serviceName={'Check Status'} />}
        <LaundryCard serviceUrl={lost} serviceName={'Lost and Found'} />
        {!isAdmin && <LaundryCard serviceUrl={report} serviceName={'Report a Lost item'} />}
        {!isAdmin && <LaundryCard serviceUrl={close} serviceName={'Close filed opening'} />}
        {isAdmin && <LaundryCard serviceUrl={WashingMachine} serviceName={'Laundry Information'} />}
      </div>
    </div>
  );
};

export default Laundry;
