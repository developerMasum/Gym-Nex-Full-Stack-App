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
import { useGetMonthWiseUserUpdateQuery } from "@/redux/api/dashboardApi";

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
  const { data: userData, isLoading } = useGetMonthWiseUserUpdateQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Mapping the userData to chart data
  const labels = userData.map((monthData: any) => monthData.name); // Extract month names for labels
  const totals = userData.map((monthData: any) => monthData.total); // Extract totals for data

  const data = {
    labels, // Use the month names as labels
    datasets: [
      {
        label: "Monthly User Updates",
        data: totals, // Use the totals for the data points
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
        max: Math.max(...totals) + 5, // Dynamically adjust the y-axis max value
      },
    },
  };

  return (
    <div>
      <h2>Monthly User Updates</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
