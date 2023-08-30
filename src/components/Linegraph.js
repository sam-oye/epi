import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend
);

function LineGraph({ data }) {
  const chartData = {
    labels: data.map((_, index) => `${index + 1}`), // Display labels like "Week 1", "Week 2", ...
    datasets: [
      {
        label: "POPULATION", // Legend label
        fill: false,
        borderColor: "red",
        data: data,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "POPULATION", // Y-axis label
        },
      },
      x: {
        title: {
          display: true,
          text: "WEEKS", // X-axis label
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineGraph;
