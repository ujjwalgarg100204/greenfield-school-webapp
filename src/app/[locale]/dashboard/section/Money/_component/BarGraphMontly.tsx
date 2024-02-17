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

// label_dataset = {
//   '1'
// }
// const inputs = {
//   min: 20,
//   max: 80,
//   count: 8,
//   decimals: 2,
//   continuity: 1,
// };

// const generateLabels = () => {
//   return Utils.months({ count: inputs.count });
// };

// const generateData = () => Utils.numbers(inputs);

// Utils.srand(42);

// const generateData = () => Utils.numbers(inputs);
// Utils.srand(42);

export const data = {
  labels,
  datasets: [
    {
      id: 1,
      label: "",
      data: [5, 6, 7],
    },
    {
      id: 2,
      label: "",
      data: [3, 2, 1],
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
