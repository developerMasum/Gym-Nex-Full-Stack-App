"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the chart components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart: React.FC = () => {
  // Example data for days and progress
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const progress = [75, 50, 90, 40, 65, 80, 100]; // Progress data

  // Chart data configuration
  const data = {
    labels: dayNames, // Day names
    datasets: [
      {
        label: "Progress",
        data: progress,
        backgroundColor: "bg-gradient-to-r from-red-500 to-amber-500",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          display: true, // Show x-axis (months) labels
        },
      },
      y: {
        grid: {
          display: false, // Hide horizontal grid lines
        },
        ticks: {
          display: false, // Hide y-axis (payment numbers) labels
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Weekly Progress Chart",
      },
    },
  };

  return (
    <div>
      {/* Render the Bar chart */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressChart;
