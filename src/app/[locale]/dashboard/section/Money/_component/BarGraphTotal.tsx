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
        y: {
            title: {
                display: true,
                text: "Amount (₹)", // Y-axis label
            },
        },
    },
};

const labels = [
    "Total Fees",
    "Amount requested (Till Date)",
    "Amount collected",
];

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

const BarGraphTotal = () => {
  return (
    <div>
      <h1 className=" ml-3 text-left font-bold md:ml-10">
        Collection Report (2023-2024)
      </h1>
      <div className="flex justify-center md:max-h-80 md:max-w-full">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarGraphTotal;
