import React, { useState, useEffect } from 'react';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../firebase-config';
import "../styles/chkStatus.css"; // Import CSS file

const ChkStatus = () => {
  const [regno, setRegno] = useState('');
  const [laundryData, setLaundryData] = useState([]);

  const handleInputChange = (e) => {
    setRegno(e.target.value);
  };


  const fetchLaundryData = async () => {
    console.log("hello")
    console.log(regno);
    const q = query(collection(db, 'LaundryStore'), where('regno', '==', regno));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map(doc => doc.data());
    console.log(items);
    setLaundryData(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLaundryData();
  };

  if (laundryData.length === 0) {
    return (
      <div className="laundry-details">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="regno" className="label">Enter Registration Number:</label>
          <input type="text" id="regno" value={regno} onChange={handleInputChange} className="input" />
          <button type="submit" className="button">Submit</button>
        </form>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const getStatusMessage = (status) => {
    return status ? 'Clothes are still in wash' : 'Wash completed and ready for collection';
  };

  if (laundryData.length > 0) {
    const data = laundryData[0];
    return (
      <div className="laundry-details">
        <div className='status-card'>
            <h2 className="title">Laundry Details for Registration Number: {data.regno}</h2>
            <p className="label">Date: {data.date.toDate().toString()}</p>
            <p className="label">Name: {data.name}</p>
            <p className="label">Phone Number: {data.phoneno}</p>
            <p className="label">Registration Number: {data.regno}</p>
            <p className="label">Room Number: {data.roomno}</p>
            <p className="label">Bedsheet: {data.bedsheet}</p>
            <p className="label">Pants: {data.pants}</p>
            <p className="label">Shirts: {data.shirts}</p>
            <p className="label">Status: {getStatusMessage(data.status)}</p>
        </div>
        
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default ChkStatus;
