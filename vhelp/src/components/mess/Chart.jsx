import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/mess.css';
import MessData from './sampledata.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // This is where you'd fetch your data in a real app
        // For demonstration, we're using static data imported from a file
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

    const chartData = {
        labels: ['Veg', 'Non Veg', 'Special'],
        datasets: [
            {
                label: 'SRRC',
                data: [counts.srrc.veg, counts.srrc.nonveg, counts.srrc.special],
                backgroundColor: 'rgba(0, 0, 255, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Zenith',
                data: [counts.zenith.veg, counts.zenith.nonveg, counts.zenith.special],
                backgroundColor: 'rgba(255, 0, 0, 1)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="mess-chart">
            <div className="row">
                <div className="col plot2">
                    <h2>Current Mess Status</h2>
                    <div style={{ height: '500px', width: '100%' }}>
                        <Bar data={chartData} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;