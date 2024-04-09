import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/laundry.css'

function LaundryCard({serviceUrl, serviceName}) {

  let serviceRoute;
  if (serviceName === 'Check Schedule') {
    serviceRoute = "/calendar";
  } else if (serviceName === 'Check Status') {
    serviceRoute = "/foodpark";
  } else if (serviceName === 'Lost and Found'){
    serviceRoute = "/lost";
  } else if (serviceName === 'Report a Lost item'){
    serviceRoute = "/reportlost";
  }

  return (
    <div className='laundry__card'>
      <Link to={serviceRoute}>
        <div className='laundry__card__img'>
          <img src={serviceUrl} style={{"width":"100%"}}/>
        </div>
        <div className='laundry__card__title'>{serviceName}</div>
      </Link>
    </div>
  )
}

export default LaundryCard
