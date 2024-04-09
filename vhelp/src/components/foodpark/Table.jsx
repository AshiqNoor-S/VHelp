import React, { useState } from 'react';
import '../styles/table.css';

const Table = () => {
  const [statuses, setStatuses] = useState([
    'Cooking', 'Cooking', 'Cooking', 'Cooking'
  ]);

  const handleToggleStatus = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = newStatuses[index] === 'Cooking' ? 'Ready' : 'Cooking';
    setStatuses(newStatuses);
  }

  return (
    <div className="container-fluid" style={{ marginTop: '10px' }}>
        <div className='heading'>
            <h1>Current Orders</h1>
        </div>
      <table>
        <thead>
          <tr>
            <th>Registration No</th>
            <th>Name</th>
            <th>Room No</th>
            <th>Phone No</th>
            <th>Order Id</th>
            <th>Ordered Item</th>
            <th>Time of Order</th>
            <th>Category</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, index) => (
            <tr key={index}>
              <td>21BCE1845</td>
              <td>Ashiq</td>
              <td>115</td>
              <td>038979824</td>
              <td>123S</td>
              <td>Burger</td>
              <td>8:00 pm</td>
              <td>Non-veg</td>
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
    </div>
  );
}

export default Table;
