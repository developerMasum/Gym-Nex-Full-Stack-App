import React from "react";
import ProgressChart from "./Components/ProgressChart";
import Banner from "./Components/Banner";
import ExercisePlan from "./Components/ExercisePlan";

const WorkoutPlan = () => {
  return (
    <main>
      <div className=" flex justify-between  items-center gap-6 bg-[#313844] px-3 py-3">
        <div className="w-1/2  ">
          <ProgressChart />
        </div>
        <div className="w-1/2">
          <Banner />
        </div>
      </div>
      <ExercisePlan />
    </main>
  );
};

export default WorkoutPlan;
