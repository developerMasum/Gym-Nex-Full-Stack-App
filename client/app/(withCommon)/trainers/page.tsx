"use client";
import Image from "next/image";
import { FastForward } from "lucide-react";
import Link from "next/link";
import ReuseAbleBanner from "@/components/Common/ReuseAbleBanner";
import { useGetAllTrainersQuery } from "@/redux/api/trainerApi";
import Loading from "@/components/Common/Loading";

const Trainers = () => {
  const { data: trainersData, isLoading } = useGetAllTrainersQuery({});
  if (isLoading) return <Loading />;
  return (
    <main>
      <ReuseAbleBanner name="Trainers" path="Trainers" />
      <div className="w-full h-auto py-12">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-4xl font-extrabold text-slate-100 uppercase">
            Our Trainers
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="w-full h-auto flex flex-wrap gap-5 justify-center items-center">
          {trainersData?.map((trainer: any) => (
            <Link
              href={`/trainers/${trainer.id}`}
              key={trainer.id}
              className="w-[400px] h-[500px] bg-[#01010F] rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="w-full h-[75%] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Trainer Info */}
              <div className="flex justify-between items-center p-4 text-slate-100">
                <div>
                  <p className="text-xl font-bold transition-colors duration-300 group-hover:text-red-500">
                    {trainer.name}
                  </p>
                  <p className="text-sm text-gray-400">{trainer.title}</p>
                </div>
                <FastForward className="text-slate-100 group-hover:text-red-500 transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Trainers;
