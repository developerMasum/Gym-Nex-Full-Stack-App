import DietChart from "@/components/Dashboard/User/Diet/DietChart";
import DietModel from "@/components/Dashboard/User/Diet/DietModel";
import DietPlan from "@/components/Dashboard/User/Diet/DietPlan";
import React from "react";

const MyDiet = () => {
  return (
    <div>
      <DietModel />
      <DietPlan />
      {/* <DietChart /> */}
    </div>
  );
};

export default MyDiet;
