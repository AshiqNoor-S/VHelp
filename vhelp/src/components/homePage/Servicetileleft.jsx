import React from 'react';
import '../styles/servicetile.css';

function Servicetile() {
  return (
    <div className="container">
      <div className='service-tile'>
        <div className='service-tile__text'>
            <h3>Service Name</h3>
            <p>Service Description</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            </div>
            <div className='service-tile__img'>
                <img src={process.env.PUBLIC_URL + 'img-1.png'} />
            </div>
            
        </div>
    </div>
  );
}

export default Servicetile;
