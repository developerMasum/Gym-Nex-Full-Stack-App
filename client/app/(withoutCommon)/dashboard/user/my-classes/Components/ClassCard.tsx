import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // ShadCN UI components
import { imageUrls } from "@/lib/data"; // Your existing data
import Image from "next/image";

// Function to get the current day in the format of your `days` array
const getCurrentDay = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  return today;
};

const Schedule = () => {
  const days = [
    { day: "Monday", hasClass: true },
    { day: "Tuesday", hasClass: true },
    { day: "Wednesday", hasClass: true },
    { day: "Thursday", hasClass: true },
    { day: "Friday", hasClass: true },
    { day: "Saturday", hasClass: true },
    { day: "Sunday", hasClass: false },
  ];

  const classTime = "6:00 AM - 7:00 AM";
  const currentDay = getCurrentDay(); // Get today's day

  return (
    <div className="py-6 px-4">
      <h1 className="text-2xl font-extrabold mb-8 text-white text-center uppercase">
        My Gym Schedule
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-200">
        {days.map(({ day, hasClass }) => (
          <Card
            key={day}
            className={`${
              day === currentDay ? "bg-green-900" : "bg-[#313844]"
            } text-white shadow-lg border-0`}
          >
            <CardHeader className="text-center">
              <CardTitle>{day}</CardTitle>
              {hasClass ? (
                <>
                  <Image
                    src={imageUrls.trainer1}
                    alt="Gym Class"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardDescription className="font-semibold">
                    Class Time: {classTime}
                  </CardDescription>
                </>
              ) : (
                <CardDescription>No Class</CardDescription>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
