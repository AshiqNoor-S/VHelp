import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
// import '../styles/LaundryList.css';
import '../styles/table.css';

const LaundryData = () => {
    const [laundryData, setLaundryData] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      setLoading(false); // Stop loading
      console.log("Laundry Data top")
      console.log(laundryData);
  }, [laundryData]);
    
    useEffect(() => {
        const fetchLaundryData = async () => {
            setLoading(true); // Begin loading
            try {
                const querySnapshot = await getDocs(collection(db, 'LaundryStore'));
                const items = querySnapshot.docs.map(doc => doc.data());
                setLaundryData(items);
                console.log("Laundry Data bottom")
                console.log(laundryData);
            } catch (error) {
                console.error("Failed to fetch laundry data:", error);
            }
        };
        fetchLaundryData();
    }, []);


    if (loading) return <div>Loading...</div>; // Display loading indicator

    return (
        <div className="container-fluid">
            <div className='heading'>
              <h1>Current Laundry</h1>
            </div>
            <table className="laundry-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Reg No</th>
                        <th>Room No</th>
                        <th>Phone No</th>
                        <th>Bed Sheets</th>
                        <th>Pants</th>
                        <th>Shirts</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                  
                {laundryData.length > 0 && laundryData.map((item, index) => (
                  <tr key={index}>
                      <td>{item.date.seconds ? new Date(item.date.seconds * 1000).toLocaleDateString() : ''}</td>
                      <td>{item.name}</td>
                      <td>{item.regno}</td>
                      <td>{item.roomno}</td>
                      <td>{item.phoneno}</td>
                      <td>{item.bedsheet}</td>
                      <td>{item.pants}</td>
                      <td>{item.shirts}</td>
                      <td>{item.status ? 'Ready for collection' : 'In Wash'}</td>
                  </tr>
              ))}

                </tbody>
            </table>
        </div>
    );
};

export default LaundryData;