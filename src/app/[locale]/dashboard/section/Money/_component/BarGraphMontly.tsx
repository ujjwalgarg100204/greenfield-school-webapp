import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    responsive: true,

    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: "Month", // X-axis label
            },
            ticks: {
                maxRotation: 0, // Adjust rotation if needed
            },
        },
        y: {
            title: {
                display: true,
                text: "Amount (₹)", // Y-axis label
            },
        },
    },
};

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December",
];

export const data = {
    labels,
    datasets: [
        {
            label: "Paid Fees",
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Unpaid Fees",
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

const BarGraph = () => {
    return (
        <div className="flex justify-center md:max-h-96 md:max-w-full">
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarGraph;
