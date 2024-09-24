import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { exercisesData } from "@/lib/data";
import Image from "next/image";
import React from "react";

type TCode = {
  Completed: string;
  Inprogress: string;
  "Not Started": string;
};
const statusColors = {
  Completed: "bg-green-500",
  Inprogress: "bg-purple-500",
  "Not Started": "bg-gray-700",
};

const ExercisePlan = () => {
  return (
    <Tabs defaultValue="sunday">
      <div className="border-b border-gray-800">
        <p className="text-white font-bold text-center uppercase mt-8">
          My Weekly Exercise Plan
        </p>
        <TabsList className="mb-4 mt-2 flex justify-center items-center bg-transparent">
          {exercisesData.map((plan) => (
            <TabsTrigger key={plan.day} value={plan.day}>
              {plan.day.charAt(0).toUpperCase() + plan.day.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {exercisesData.map((plan) => (
        <TabsContent key={plan.day} value={plan.day}>
          <div className="grid grid-cols-3 gap-6 mt-8 text-white">
            {plan.exercises.map((exercise, idx) => (
              <div
                key={idx}
                className="card w-[360px] h-[300px] p-4 bg-[#313844] rounded-lg flex flex-col items-center justify-between"
              >
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  width={120}
                  height={120}
                  className="mb-4 object-cover"
                />
                <div className="flex flex-col items-center flex-grow text-center">
                  <h3 className="text-lg font-bold mb-2">{exercise.name}</h3>
                  <div className="flex justify-between w-full mb-2">
                    <span>Sets: </span>
                    <span>{exercise.sets}</span>
                  </div>
                  <div className="flex justify-between w-full mb-2">
                    <span>Time: </span>
                    <span>{exercise.time}</span>
                  </div>
                </div>
                <button
                  className={`${
                    statusColors[exercise.status as keyof typeof statusColors]
                  } px-3 py-2 rounded-md w-full text-center`}
                >
                  {exercise.status}
                </button>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ExercisePlan;
