import React from 'react'
import '../styles/laundry.css'

function LaundryCard({serviceUrl, serviceName}) {
  return (
    <div className='laundry__card'>
      <div className='laundry__card__img'>
        <img src={serviceUrl} style={{"width":"100%"}}/>
      </div>
      <div className='laundry__card__title'>{serviceName}</div>
    </div>
  )
}

export default LaundryCard
