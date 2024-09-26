import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Sample revenue data for different years
  const data = {
    labels: ["2020", "2021", "2022", "2023"], // Years
    datasets: [
      {
        label: "Yearly Revenue",
        data: [50000, 75000, 100000, 85000], // Revenue data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // Colors for each slice
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="p-8 w-[450px]">
      <h2>Yearly Revenue Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
