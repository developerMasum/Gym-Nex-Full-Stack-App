"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Sample data (you can replace it with any dynamic data)
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [20, 50, 45, 60, 30, 50, 80], // Replace with your data
        borderColor: "green",
        backgroundColor: "transparent",
        pointBorderColor: "green",
        pointBackgroundColor: "green",
        tension: 0.4, // To give the curved lines
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const, // Ensure correct type is provided
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div>
      <h2>Basic Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
