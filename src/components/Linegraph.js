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
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);
function LineGraph({ data }) {
  const chartData = {
    labels: data.map((_, index) => index), // Use indices as labels
    datasets: [
      {
        label: "Values",
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        data: data,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
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
