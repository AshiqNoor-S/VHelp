import React from 'react';

function DisplayItemTable({ food, index, removeItem }) {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{food.name}</td>
      <td>{food.category}</td>
      <td>{food.price}</td>
      <td>{food.mealType}</td>
      <td><button onClick={() => removeItem(index)}>Remove</button></td>
    </tr>
  );
}

export default DisplayItemTable;
