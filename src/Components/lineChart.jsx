import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {

            data: [0, 10000, 5000, 15000, 10000, 20000, 15000],
            borderColor: 'rgb(53,162,235)',
            backgroundColor: 'rgba(53,162,235,0.5)',
            tension: 0.3
        }
    ],
};


function LineChart() {
    return <Line options={options} data={data} />;
}
export default LineChart;