import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import '../styles/Lost.css';

function Lost() {
    const [lostItems, setLostItems] = useState([]);

    useEffect(() => {
        const fetchLostItems = async () => {
            const querySnapshot = await getDocs(collection(db, 'lostItems'));
            const items = querySnapshot.docs.map(doc => doc.data());
            setLostItems(items);
        };
        fetchLostItems();
    }, []);

    return (
        <div>
            <div className="lost-heading">
                <div className='lost-heading-title'>Lost Items</div>
            </div>
            
            <div className="lost-items-container">
                {lostItems.map(item => (
                    <div key={item.id} className="lost-item-tile">
                        <img src={item.imageUrl} alt={item.imageName} />
                        <div className="item-details">
                            <p><strong>Item Name:</strong> {item.imageName}</p>
                            <p><strong>Found Date:</strong> {item.foundDate}</p>
                            <p><strong>Company:</strong> {item.company}</p>
                            <p><strong>User Name:</strong> {item.userName}</p>
                            <p><strong>Phone No:</strong> {item.phoneNo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lost;
