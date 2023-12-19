import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            display: true,
        },
        title: {
            display: false
        }
    },
};
export const data = {
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
        {
            innerRadius: 10,
            label: 'Sources',
            data: [55, 30, 15],
            backgroundColor: [
                'rgba(78, 115, 223, 0.8)',
                'rgba(54, 185, 204, 0.8)',
                'rgba(28, 200, 138, 0.8)',
            ],
            borderWidth: 1,
            innerHeight: 5
        },
    ],
};

function DoughnutChart() {
    return <Doughnut options={options} data={data} />;
}
export default DoughnutChart;
