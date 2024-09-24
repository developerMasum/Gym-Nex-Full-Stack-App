"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PaymentBarChart: React.FC = () => {
  // Sample labels and data
  const labels = ["January", "February", "March", "April", "May"];
  const paymentData = [1500, 2000, 1800, 2200, 2400];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Payments",
        data: paymentData,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
        display: false, // Hide the legend (Payments label)
      },
      title: {
        display: true,
        text: "Payment Data Over Time",
      },
    },
  };

  return (
    <main className=" container mx-auto p-4 shadow-2xl px-3 py-2">
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Bar data={data} options={options} />
      </div>
    </main>
  );
};

export default PaymentBarChart;
