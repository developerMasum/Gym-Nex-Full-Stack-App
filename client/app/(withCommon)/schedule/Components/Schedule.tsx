import React from "react";
import Image from "next/image";
import { imageUrls, scheduleData } from "@/lib/data";

interface ClassInfo {
  className: string;
  image: string;
  trainerName: string | null;
}

const schedules: any[] = scheduleData;

const Schedule = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="py-6 px-4">
      <h1 className="text-2xl font-extrabold mb-8 text-white text-center uppercase">
        My Gym Schedule
      </h1>
      <div className="overflow-x-auto">
        <div className="min-w-[640px] mx-auto flex justify-center">
          <table className="table-auto bg-[#0A0A17] border border-gray-700">
            <thead>
              <tr className="text-white">
                <th className="border border-gray-700 p-2">Time</th>
                {days.map((day) => (
                  <th key={day} className="border border-gray-700 p-2">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr key={index} className="text-white">
                  <td className="border border-gray-700 p-2">
                    {schedule.time}
                  </td>
                  {days.map((day) => {
                    const classInfo = schedule.classes[day];
                    return (
                      <td key={day} className="border border-gray-700 p-2">
                        {classInfo ? (
                          <div className="flex items-center">
                            <Image
                              src={classInfo.image || imageUrls["defaultImage"]}
                              alt={`${
                                classInfo.trainerName || "No Trainer"
                              } - ${classInfo.className}`}
                              width={50}
                              height={50}
                              className="object-cover rounded-full inline-block mr-2"
                            />
                            <div>
                              <strong>{classInfo.className}</strong>
                              <br />
                              {classInfo.trainerName || "No Trainer"}
                            </div>
                          </div>
                        ) : (
                          <div className="text-gray-500">No Class</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
