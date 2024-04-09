import React, { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import MessData from './sampledata.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const NewChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(MessData);
    }, []);

    const counts = {
        srrc: { veg: 0, nonveg: 0, special: 0 },
        zenith: { veg: 0, nonveg: 0, special: 0 },
    };

    data.forEach(entry => {
        const mess = entry.mess;
        const messtype = entry.messtype.toLowerCase().replace(/\s/g, '');
        counts[mess][messtype]++;
    });

    const radarDataSrrc = {
        labels: ['Veg', 'Non Veg', 'Special'],
        datasets: [
            {
                label: 'Srrc Mess Preferences',
                data: [counts.srrc.veg, counts.srrc.nonveg, counts.srrc.special],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
        ],
    };

    const radarDataZenith = {
        labels: ['Veg', 'Non Veg', 'Special'],
        datasets: [
            {
                label: 'Zenith Mess Preferences',
                data: [counts.zenith.veg, counts.zenith.nonveg, counts.zenith.special],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: false,
                },
                suggestedMin: 0,
                suggestedMax: 100, // Adjust this based on your actual data range
            },
        },
        elements: {
            line: {
                borderWidth: 3,
            },
        },
    };

    return (
        <div className="mess-chart">
            <div className="row">
                <div className="col plot1">
                    <h2>Srrc Mess Preferences</h2>
                    <Radar data={radarDataSrrc} options={options} />
                </div>
                <div className="col plot1">
                    <h2>Zenith Mess Preferences</h2>
                    <Radar data={radarDataZenith} options={options} />
                </div>
            </div>
        </div>
    );
};

export default NewChart;