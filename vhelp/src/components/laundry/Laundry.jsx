import React from 'react'
import '../styles/laundry.css'
import LaundryCard from './LaundryCard';
import serviceStatus from './statusicon.png'
import serviceSchedule from "./scheduleIcon.png"
import HeroImage from "./girlHoldingLaundry.png"

const Laundry = () => {
  return (
    <div className='laundry'>
      <div className='heroSection'>
        <div className='heroDetails'>
          <div className='heroTitle'>For All Your Hostel Laundry Needs</div>
          <div>Tired of the uncertainity of the laundry process? Tired of going to chotta Dhobhi just to realise it is the wrong day? Worry no more, we got it covered for you.</div>
        </div>
        <div className='heroImage'>
          <img src={HeroImage}style={{"width":"100%"}}/>
        </div>
      </div>
      <div className='services'>
        <LaundryCard serviceUrl={serviceSchedule} serviceName={"Check Schedule"}/>
        <LaundryCard serviceUrl={serviceStatus} serviceName={"Check Status"}/>
        <LaundryCard serviceUrl={serviceStatus} serviceName={"Lost and Found"}/>
        <LaundryCard serviceUrl={serviceSchedule} serviceName={"Report a Lost item"}/>
        <LaundryCard serviceUrl={serviceStatus} serviceName={"Check Status"}/>
        <LaundryCard serviceUrl={serviceSchedule} serviceName={"Check Schedule"}/>
      </div>
    </div>
  )
}

export default Laundry;
