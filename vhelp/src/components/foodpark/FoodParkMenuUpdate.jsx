import React, { useState } from 'react';
import '../styles/foodpark.css';
import DisplayItemTable from './DisplayItemTable';

function FoodParkMenuUpdate() {
  const [selectedMeal, setSelectedMeal] = useState('Breakfast');
  const [inputValue, setInputValue] = useState('');
  const [foodInputValue, setFoodInputValue] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  const foodData = [
    { name: "Biriyani", category: "Non Veg", price: 100 },
    { name: "Naan", category: "Veg", price: 17 },
    { name: "Biriyani Malabari", category: "Veg", price: 17 },
    { name: "Biriyani chettinad", category: "Veg", price: 17 },
    { name: "chicken tikka", category: "Veg", price: 17 },
    { name: "chicken 65", category: "Veg", price: 17 },
    { name: "chicken biriyani fried with apple tart", category: "Veg", price: 17 }
  ];

  const handleMealChange = (e) => {
    setSelectedMeal(e.target.value);
  };

  const handleFoodClick = (food) => {
    setInputValue(food.name);
    setFoodInputValue(food);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    let filtered = [];
    if (value !== "") {
      filtered = foodData.filter(food =>
        food.name.toLowerCase().startsWith(value.toLowerCase())
      );
    }
    setFilteredFoods(filtered);
  };

  const addItemMenu = () => {
    if (foodInputValue !== "") {
      const itemWithMealType = { ...foodInputValue, mealType: selectedMeal };
      setAddedItems([...addedItems, itemWithMealType]);
      setInputValue(''); // Clear input value after adding
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...addedItems];
    updatedItems.splice(index, 1);
    setAddedItems(updatedItems);
  };

  return (
    <div>
      <div className='mealselect'>
        <div> Select Meal type: </div>
        <select value={selectedMeal} onChange={handleMealChange}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Snacks">Snacks</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>

      <div>
        <div>Add Menu Items: </div>
        <div className='additem'>
          <input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type to search foods..."
          />
          <div onClick={addItemMenu}>Add Item</div>
        </div>
        <div>
          {filteredFoods.map((food, index) => (
            <div key={index} onClick={() => handleFoodClick(food)}>
              {food.name}
            </div>
          ))}
        </div>
      </div>
      <div className='addedItems'>
        <div>Added Items:</div>
        {addedItems.length === 0 ? (
          <div>No items are added</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Item No</th>
                <th>Name of Food</th>
                <th>Category</th>
                <th>Price</th>
                <th>Meal Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {addedItems.map((item, index) => (
                <DisplayItemTable key={index} food={item} index={index} removeItem={removeItem} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default FoodParkMenuUpdate;
