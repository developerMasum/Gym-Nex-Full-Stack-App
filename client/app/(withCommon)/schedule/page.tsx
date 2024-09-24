import React from "react";
import Schedule from "./Components/Schedule";
import ReuseAbleBanner from "@/components/Common/ReuseAbleBanner";

const SchedulePage = () => {
  return (
    <div>
      <ReuseAbleBanner name="Schedule" path="Schedule" />
      <Schedule />
    </div>
  );
};

export default SchedulePage;
