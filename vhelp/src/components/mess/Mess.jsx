import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import '../styles/mess.css';
import { FaRegSadCry } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import MessData from './sampledata.js';
import Chart from "../mess/Chart.jsx";
import NewChart from "../mess/NewChart.jsx";

const Mess = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(MessData);
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
            <div>
                <Chart/>            
            </div>
            <div>
                <NewChart/>
            </div>
            
            
        </div>
    );
};

export default Mess;
