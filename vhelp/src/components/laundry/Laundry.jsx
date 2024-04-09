import React, { useEffect, useState } from 'react'
import '../styles/laundry.css'
import LaundryCard from './LaundryCard';
import serviceStatus from './statusicon.png'
import serviceSchedule from "./scheduleIcon.png"
import lost from "./lost.png"
import report from "./report.png"
import close from "./close.png"
import HeroImage from "./girlHoldingLaundry.png"
import WashingMachine from "./washingmachinejpg.jpg"
import { auth, db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Laundry = () => {

  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminOrNot = async () => {
      if (auth.currentUser) {
        const querySnapshot = await getDocs(collection(db, 'admin'));
        const documents = querySnapshot.docs.map(doc => doc.data());
        const adminEmails = documents.map(doc => doc.email);
        if (adminEmails.includes(auth.currentUser.email)) {
          setIsAdmin(true);
        }
      }
      setLoading(false);
    };

    checkAdminOrNot();

    if (auth.currentUser) {
      setCurrentUserEmail(auth.currentUser.email);
    }

    console.log("hello");
    console.log(isAdmin);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className='laundry'>
      <div className='heroSection'>
        <div className='heroDetails'>
          <div className='heroTitle'>For All Your Hostel Laundry Needs</div>
          <div>Tired of the uncertainity of the laundry process? Tired of going to chotta Dhobhi just to realise it is the wrong day? Worry no more, we got it covered for you.</div>
        </div>
        <div className='heroImage'>
          <img src={HeroImage} style={{"width":"100%"}}/>
        </div>
      </div>
      <div className='services'>
        <LaundryCard serviceUrl={serviceSchedule} serviceName={"Check Schedule"}/>
        {!isAdmin && <LaundryCard serviceUrl={serviceStatus} serviceName={"Check Status"}/>}
        <LaundryCard serviceUrl={lost} serviceName={"Lost and Found"}/>
        {!isAdmin && <LaundryCard serviceUrl={report} serviceName={"Report a Lost item"}/>}
        {!isAdmin && <LaundryCard serviceUrl={close} serviceName={"Close filed opening"}/>}
        {isAdmin && <LaundryCard serviceUrl={WashingMachine} serviceName={"Laundry Information"} />}
      </div>
    </div>
  )
}

export default Laundry;
