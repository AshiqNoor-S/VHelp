import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import '../styles/mess.css'; 

const MessChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, 'MessCrowd'));
            const newData = snapshot.docs.map(doc => doc.data());
            setData(newData);
        };
        fetchData();
    }, []);

    const counts = {
        srrc: { veg: 0, nonveg: 0, special: 0 },
        zenith: { veg: 0, nonveg: 0, special: 0 }
    };

    data.forEach(entry => {
        if (entry.mess === 'srrc') {
            counts.srrc[entry.messtype]++;
        } else if (entry.mess === 'zenith') {
            counts.zenith[entry.messtype]++;
        }
    });

    return (
        <div className="mess-chart">
            <div className="row">
                <div className="col">
                    <div className="mess-card">
                        <h3>Srrc - Veg</h3>
                        <p>{counts.srrc.veg}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="mess-card">
                        <h3>Srrc - Non Veg</h3>
                        <p>{counts.srrc.nonveg}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="mess-card">
                        <h3>Srrc - Special</h3>
                        <p>{counts.srrc.special}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="mess-card">
                        <h3>Zenith - Veg</h3>
                        <p>{counts.zenith.veg}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="mess-card">
                        <h3>Zenith - Non Veg</h3>
                        <p>{counts.zenith.nonveg}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="mess-card">
                        <h3>Zenith - Special</h3>
                        <p>{counts.zenith.special}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessChart;
