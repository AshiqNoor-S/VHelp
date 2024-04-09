import React, { useEffect, useState } from 'react';
import '../styles/foodpark.css';
import DisplayItemTable from './DisplayItemTable';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase-config';

function FoodParkMenuUpdate() {
  const [selectedMeal, setSelectedMeal] = useState('Breakfast');
  const [inputValue, setInputValue] = useState('');
  const [foodInputValue, setFoodInputValue] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const food_data = [];
    const collectionRef = collection(db, "FoodParkMessMenu");  
    //const q = query(collectionRef);
    const unsub = onSnapshot(collectionRef, (docs) => {
      docs.forEach(((doc) => {
        food_data.push({...doc.data(), id:doc.id});
        setFoodData(food_data);
      }));
      //setCourseStore(course_Store);
  });

  return () => {
    unsub();
  }
  }, [])

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

  const addItemMenu = async () => {
    if (foodInputValue !== "") {
      const itemWithMealType = { ...foodInputValue, mealType: selectedMeal };
      setAddedItems([...addedItems, itemWithMealType]);
      setInputValue('');

      try {
        const docRef = await addDoc(collection(db, "FoodParkAvailableMenu"), itemWithMealType);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };  

  const removeItem = async (index) => {
    const updatedItems = [...addedItems];
    const idToDelete = updatedItems[index].id; // Get the id stored in the document
    updatedItems.splice(index, 1);
    setAddedItems(updatedItems);
  
    try {
      const q = query(collection(db, "FoodParkAvailableMenu"), where("id", "==", idToDelete));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        console.log("Document successfully deleted!");
      });
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  return (
    <div className='food-park-menu-update'>
      <div className='mealselect'>
        <div className='mealtypetext'> Select Meal type: </div>
        <select value={selectedMeal} onChange={handleMealChange} className='mealtypeinput'>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Snacks">Snacks</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>

      <div className='additemmenu'>
        <div className='additemmenutext'>Add Menu Items: </div>
        <div className='additem'>
          <input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type to search foods..."
            className='additeminput'
          />
          <div onClick={addItemMenu} className='additembutton'>Add Item</div>
        </div>
        {
        (filteredFoods.length > 0 && inputValue.length > 0)
          && 
          <div className='filteredfoods'>
            {filteredFoods.map((food, index) => (
              <div key={index} onClick={() => handleFoodClick(food)} className='filteredfood'>
                {food.name}
              </div>
            ))}
          </div>
        }
      </div>
      <div className='addedItems'>
        <div className='addeditemstext'>Added Items:</div>
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
