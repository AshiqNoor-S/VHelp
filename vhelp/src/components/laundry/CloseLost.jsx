import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, where,query } from 'firebase/firestore'; // Import the 'where' function
import { db, auth } from '../../firebase-config';
import '../styles/closeLost.css';

function CloseLost() {
    const [userLostItems, setUserLostItems] = useState([]);

    useEffect(() => {
        const fetchUserLostItems = async () => {
            const user = auth.currentUser;
            if (!user) return;
    
            console.log(user.uid);
            let userUID = user.uid;

            const querySnapshot = await getDocs(query(collection(db, 'lostItems'), where('userId', '==', user.uid)));// Use 'user.uid' instead of 'user.userId'

            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUserLostItems(items);
        };
    
        fetchUserLostItems();
    }, []); // Dependency array is empty to run only once on component mount
    

    const handleDelete = async (itemId) => {
        try {
            await deleteDoc(doc(db, 'lostItems', itemId));
            setUserLostItems(prevItems => prevItems.filter(item => item.id !== itemId));
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    return (
        <div>
            <div className='close-title'>
                <h2>Your Lost and Found Requests</h2>
            </div>
            
            <div className='lost-tiles'>
                {userLostItems.map(item => (
                    <div className="ind-tiles" key={item.id}>
                        <img src={item.imageUrl} alt={item.imageName} />
                        <p>Item Name: {item.imageName}</p>
                        <p>Found Date: {item.foundDate}</p>
                        <p>Company: {item.company}</p>
                        <p>User Name: {item.userName}</p>
                        <p>Phone No: {item.phoneNo}</p>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CloseLost;