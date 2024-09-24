import Image from "next/image";
import assets from "@/assets";
import { FastForward } from "lucide-react";

const trainersData = [
  {
    id: 1,
    name: "John Kaye",
    role: "Co-Founder",
    image: assets.trainer.trainer1,
  },
  {
    id: 2,
    name: "Lisa Ray",
    role: "Head Trainer",
    image: assets.trainer.trainer2,
  },
  {
    id: 3,
    name: "Tom Carter",
    role: "Fitness Coach",
    image: assets.trainer.trainer3,
  },
  {
    id: 4,
    name: "Tyler Larsen",
    role: "Fitness Coach",
    image: assets.trainer.trainer1,
  },
];

const Trainers = () => {
  return (
    <main className="w-full h-auto py-10">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent uppercase text-xl font-extrabold">
          Trainers
        </p>
        <p className="text-4xl font-extrabold text-slate-100 uppercase">
          Our Trainers
        </p>
      </div>

      {/* Trainers Grid */}
      <div className="w-full h-auto flex flex-wrap gap-5 justify-center items-center">
        {trainersData.map((trainer) => (
          <div
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
                <p className="text-sm text-gray-400">{trainer.role}</p>
              </div>
              <FastForward className="text-slate-100 group-hover:text-red-500 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Trainers;
