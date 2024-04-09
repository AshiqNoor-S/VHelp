import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/laundry.css'

function LaundryCard({serviceUrl, serviceName}) {

  const [csswashingmachine, setcsswashingmachine] = useState("");

  useEffect(() => {
    if (serviceName === 'Laundry Information'){
      setcsswashingmachine("washing-machine");
    }
  }, [])

  let serviceRoute;
  if (serviceName === 'Check Schedule') {
    serviceRoute = "/calendar";
  } else if (serviceName === 'Check Status') {
    serviceRoute = "/chkStatus";
  } else if (serviceName === 'Lost and Found'){
    serviceRoute = "/lost";
  } else if (serviceName === 'Report a Lost item'){
    serviceRoute = "/reportlost";
  } else if (serviceName === 'Close filed opening'){
    serviceRoute = "/closelost";
  }
  else if (serviceName === 'Laundry Information'){
    serviceRoute = "/closelost";
  }

  return (
    <div className={`laundry__card`}>
      <Link to={serviceRoute} style={{ textDecoration: 'none' }}>
        <div className={`laundry__card__img ${csswashingmachine}`}>
          <img src={serviceUrl} style={{"width":"100%"}}/>
        </div>
        <div className='laundry__card__title'>{serviceName}</div>
      </Link>
    </div>
  )
}

export default LaundryCard;
