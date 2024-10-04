"use client";
import React from "react";
import ReportStats from "./my-report/Components/ReportBoxes";
import Charts from "./my-report/Components/Charts";

const UserDashboard = () => {
  return (
    <div>
      <ReportStats />
      <Charts />
    </div>
  );
};

export default UserDashboard;
