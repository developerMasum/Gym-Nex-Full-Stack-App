"use client";
import { useGetAllTrainersQuery } from "@/redux/api/trainerApi";
import TrainerCard from "./Components/TrainerCard";
import Loading from "@/components/Common/Loading";

const TrainersList = () => {
  // Invoke the useGetAllTrainersQuery hook
  const { data: trainers, isLoading } = useGetAllTrainersQuery({});

  // console.log(trainers);

  // If data is still loading, show the Loading component
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-8 py-6">
      <h1 className="text-2xl text-gray-100 font-bold mb-4">Hello, James</h1>
      <p className="text-gray-200 mb-6">
        Checkout the list of our world-class trainers.
      </p>

      {/* Display a grid of TrainerCard components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers?.map((trainer: any) => (
          <TrainerCard key={trainer.id} {...trainer} />
        ))}
      </div>
    </div>
  );
};

export default TrainersList;
