import React from 'react';
import '../styles/servicetile.css';
import { Link } from 'react-router-dom';

function Servicetile({ serviceName, serviceDescription, animsrc }) {
  let serviceRoute;
  if (serviceName === 'laundry logistics') {
    serviceRoute = "/laundry";
  } else if (serviceName === 'foodpark ordering system') {
    serviceRoute = "/foodpark";
  }

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
