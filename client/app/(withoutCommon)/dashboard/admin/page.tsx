"use client";
import BoxesReport from "@/components/Dashboard/Admin/AdminMainDashboard/Boxes";
import LatestPaymentList from "@/components/Dashboard/Admin/AdminMainDashboard/LatestPaymentList";
import LineChart from "@/components/Dashboard/Admin/AdminMainDashboard/LineChart";
import PaymentBarChart from "@/components/Dashboard/Admin/AdminMainDashboard/PaymentBarChart";
import PieChart from "@/components/Dashboard/Admin/AdminMainDashboard/PieChart";
// import UserGrowthChart from "@/components/Dashboard/Admin/AdminMainDashboard/UserGrowthChart";

const AdminDashboard = () => {
  return (
    <div>
      <BoxesReport />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LatestPaymentList />
        <PaymentBarChart />
        <LineChart />
        <PieChart />
        {/* <UserGrowthChart /> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
