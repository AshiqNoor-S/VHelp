import React, { useState, useEffect } from 'react';
import '../styles/table.css';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

const Table = () => {
  const [statuses, setStatuses] = useState([
    'Cooking', 'Cooking', 'Cooking', 'Cooking'
  ]);

  const handleToggleStatus = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = newStatuses[index] === 'Cooking' ? 'Ready' : 'Cooking';
    setStatuses(newStatuses);
  }

  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(false); // Stop loading
    console.log(menuData);
  }, [menuData]);
    
  useEffect(() => {
    const fetchMenuData = async () => {
      setLoading(true); // Begin loading
      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        const items = querySnapshot.docs.map(doc => doc.data());
        setMenuData(items);
        console.log(menuData);
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      }
    };
    fetchMenuData();
  }, []);

  if (loading) return <div>Loading...</div>; // Display loading indicator

  return (
    <div className="container-fluid" style={{ marginTop: '10px' }}>
      <div className='heading'>
        <h1>Current Orders</h1>
      </div>
      <table>
        <thead>
          <tr>
            {/* <th>Registration No</th>
            <th>Name</th>
            <th>Room No</th>
            <th>Phone No</th> */}
            <th>Order Id</th>
            <th>Ordered Item</th>
            <th>Time of Order</th>
            <th>Category</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {menuData.length > 0 && menuData.map((item, index) => (
            <tr key={index}>
              {/* <td>{item.regno}</td>
              <td>{item.name}</td> */}
              <td>{item.orderId}</td>
              <td>
                <ul className='orderList'>
                  {item.items.map((orderedItem, idx) => (
                    <li key={idx}>{orderedItem.name}</li>
                  ))}
                </ul>
              </td>
              <td>{item.timestamp.toDate().toLocaleString()}</td>
              <td>
                <ul className='orderList'>
                  {item.items.map((orderedItem, idx) => (
                    <li key={idx}>{orderedItem.category}</li>
                  ))}
                </ul>
              </td>
              <td>{statuses[index]}</td>
              <td>
                <button onClick={() => handleToggleStatus(index)}>
                  {statuses[index] === 'Cooking' ? 'Ready' : 'Cooking'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-primary"><Link to="/foodpark-menu-update">Update Menu</Link></button>
      </div>
    </div>
  );
}

export default Table;
