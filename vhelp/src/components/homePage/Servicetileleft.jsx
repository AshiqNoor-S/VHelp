import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Servicetile({ serviceName, serviceDescription, animsrc }) {
  const [serviceRoute, setServiceRoute] = useState("");

  useEffect(() => {
    if (serviceName === "Mess Navigator") {
      setServiceRoute("/mess");
    } else {
      setServiceRoute("/board");
    }
  }, [serviceName]);

  return (
    <div className="container">
      <div className='service-tile'>
        <div className='service-tile__text'>
          <h3>{serviceName}</h3>
          <p>{serviceDescription}</p>
          <Link to={serviceRoute}>
            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </Link>
        </div>
        <div className='service-tile__img'>
          <lottie-player src={animsrc} background="transparent" speed="1" style={{width: 500, height: 500}} loop autoplay direction="1" mode="normal"></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Servicetile;
