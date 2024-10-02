import React from "react";
import { Flame, Droplet, Moon, Footprints, Dumbbell } from "lucide-react";
import { useUserProfileCountQuery } from "@/redux/api/dashboardApi";

const ReportStats = () => {
  const { data: dashboardData, isLoading } = useUserProfileCountQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mb-8">
        <div className="bg-[#313844] p-6 rounded  flex flex-col items-center shadow-lg">
          <div className="bg-[#F49510] bg-opacity-50 px-2 py-2 rounded-md">
            <button className="bg-[#F0503C] px-2 py-2 rounded-md">
              <Footprints
                className="text-4xl text-slate-100"
                size={36}
                strokeWidth={1.75}
              />
            </button>
          </div>
          <div className="text-3xl font-bold text-gray-100">
            {dashboardData?.steps || 0}
          </div>
          <div className="text-gray-100">Steps</div>
        </div>

        <div className="bg-[#313844] p-6 rounded shadow-md flex flex-col items-center">
          <div className="bg-[#F49510] bg-opacity-50 px-2 py-2 rounded-md">
            <button className="bg-[#F0503C] px-2 py-2 rounded-md">
              <Flame
                className="text-4xl text-slate-100"
                size={36}
                strokeWidth={1.75}
              />
            </button>
          </div>
          <div className="text-3xl font-bold text-gray-100">
            {dashboardData?.calories || 0}
          </div>
          <div className="text-gray-300">Calories</div>
        </div>
        <div className="bg-[#313844] p-6 rounded shadow-md flex flex-col items-center">
          <div className="bg-[#F49510] bg-opacity-50 px-2 py-2 rounded-md">
            <button className="bg-[#F0503C] px-2 py-2 rounded-md">
              <Droplet
                className="text-4xl text-slate-100"
                size={36}
                strokeWidth={1.75}
              />
            </button>
          </div>
          <div className="text-3xl font-bold text-gray-100">
            {dashboardData?.progress}
          </div>
          <div className="text-gray-300 ">Progress</div>
        </div>
        <div className="bg-[#313844] p-6 rounded shadow-md flex flex-col items-center">
          <div className="bg-[#F49510] bg-opacity-50 px-2 py-2 rounded-md">
            <button className="bg-[#F0503C] px-2 py-2 rounded-md">
              <Moon
                className="text-4xl text-slate-100"
                size={36}
                strokeWidth={1.75}
              />
            </button>
          </div>
          <div className="text-3xl font-bold text-gray-100">
            {dashboardData?.sleep || 0}
            <span className="text-gray-300 text-base ml-2">hrs</span>
          </div>
          <div className="text-gray-300">Sleep</div>
        </div>
        <div className="bg-[#313844] p-6 rounded shadow-md flex flex-col items-center">
          <div className="bg-[#F49510] bg-opacity-50 px-2 py-2 rounded-md">
            <button className="bg-[#F0503C] px-2 py-2 rounded-md">
              <Dumbbell
                className="text-4xl text-slate-100"
                size={36}
                strokeWidth={1.75}
              />
            </button>
          </div>
          <div className="text-3xl text-gray-100 font-bold">
            {dashboardData?.gym || 0}{" "}
            <span className="text-gray-300 text-base">hrs</span>
          </div>
          <div className="text-gray-300">Gym</div>
        </div>
      </div>
    </div>
  );
};

export default ReportStats;
