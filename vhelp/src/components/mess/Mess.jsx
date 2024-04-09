import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import '../styles/mess.css';
import { FaRegSadCry } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { Bar } from 'react-chartjs-2';

const MessChart = ({ data }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        if (data.length > 0) {
            const counts = {
                srrc: { veg: 0, nonveg: 0, special: 0 },
                zenith: { veg: 0, nonveg: 0, special: 0 }
            };

            data.forEach(entry => {
                const mess = entry.mess;
                const messtype = entry.messtype.toLowerCase().replace(/\s/g, ''); // Remove spaces and convert to lowercase
                counts[mess][messtype]++;
            });

            setChartData({
                labels: ['Srrc - Veg', 'Srrc - Non Veg', 'Srrc - Special', 'Zenith - Veg', 'Zenith - Non Veg', 'Zenith - Special'],
                datasets: [
                    {
                        label: 'Occupancy',
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1,
                        data: [
                            counts.srrc.veg,
                            counts.srrc.nonveg,
                            counts.srrc.special,
                            counts.zenith.veg,
                            counts.zenith.nonveg,
                            counts.zenith.special
                        ],
                    },
                ],
            });
        }
    }, [data]);

    return (
        <div className="mess-chart">
            {chartData && <Bar data={chartData} />}
        </div>
    );
};

const Mess = () => {
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
        const mess = entry.mess;
        const messtype = entry.messtype.toLowerCase().replace(/\s/g, ''); // Remove spaces and convert to lowercase
        counts[mess][messtype]++;
    });
    

    return (
        <div className="mess-chart">
            <div className="row">
                <div className="col">
                    <div className="mess-card">
                        <h3>Srrc - Veg</h3>
                        <p>{counts.srrc.veg}</p>
                        <p>
                            {
                                (counts.srrc.veg > 90) ?
                                <div className='mess-capacity-status'>Capacity have been Reached <FaRegSadCry color='black'/> </div>:
                                <div className='mess-capacity-status' style={{"color":"green"}}>Space Available <IoMdHappy color={"black"}/> </div>
                            }
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="mess-card">
                        <h3>Srrc - Non Veg</h3>
                        <p>{counts.srrc.nonveg}</p>
                        <p>
                            {
                                (counts.srrc.nonveg > 80) ?
                                <div className='mess-capacity-status'>Capacity have been Reached <FaRegSadCry color='black'/> </div>:
                                <div className='mess-capacity-status' style={{"color":"green"}}>Space Available <IoMdHappy color={"black"}/> </div>
                            }
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="mess-card">
                        <h3>Srrc - Special</h3>
                        <p>{counts.srrc.special}</p>
                        <p>
                            {
                                (counts.srrc.special > 80) ?
                                <div className='mess-capacity-status'>Capacity have been Reached <FaRegSadCry color='black'/> </div>:
                                <div className='mess-capacity-status' style={{"color":"green"}}>Space Available <IoMdHappy color={"black"}/> </div>
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="mess-card">
                        <h3>Zenith - Veg</h3>
                        <p>{counts.zenith.veg}</p>
                        <p>
                            {
                                (counts.zenith.veg > 50) ?
                                <div className='mess-capacity-status'>Capacity have been Reached <FaRegSadCry color='black'/> </div>:
                                <div className='mess-capacity-status' style={{"color":"green"}}>Space Available <IoMdHappy color={"black"}/> </div>
                            }
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="mess-card">
                        <h3>Zenith - Non Veg</h3>
                        <p>{counts.zenith.nonveg}</p>
                        <p>
                            {
                                (counts.zenith.nonveg > 60) ?
                                <div className='mess-capacity-status'>Capacity have been Reached <FaRegSadCry color='black'/> </div>:
                                <div className='mess-capacity-status' style={{"color":"green"}}>Space Available <IoMdHappy color={"black"}/> </div>
                            }
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="mess-card">
                        <h3>Zenith - Special</h3>
                        <p>{counts.zenith.special}</p>
                        <p>
                            {
                                (counts.zenith.special > 100) ?
                                <div className='mess-capacity-status'>Capacity have been Reached <FaRegSadCry color='black'/> </div>:
                                <div className='mess-capacity-status' style={{"color":"green"}}>Space Available <IoMdHappy color={"black"}/> </div>
                            }
                        </p>
                    </div>
                </div>
            </div>
            <MessChart data={data} />
        </div>
    );
};

export default Mess;
