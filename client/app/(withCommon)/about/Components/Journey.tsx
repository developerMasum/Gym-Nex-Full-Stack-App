"use client";

import Image from "next/image";
import React from "react";
import assets from "@/assets";
import { Fade } from "react-awesome-reveal";

const milestones = [
  {
    year: "2013",
    title: "Building Foundations",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: assets.images.arrow, // Replace with the actual path of your image
  },
  {
    year: "2015",
    title: "Expanding Horizons",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: assets.images.arrow,
  },
  {
    year: "2020",
    title: "Reaching New Heights",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    image: assets.images.arrow,
  },
  {
    year: "2024",
    title: "Achieving Excellence",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC.",
    image: assets.images.arrow,
  },
];

const Journey = () => {
  return (
    <main className="bg-[#01010F]">
      <Fade>
        <p className="text-4xl font-extrabold text-center uppercase bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent py-8 font-sans">
          Our Journey
        </p>
      </Fade>
      <div className="text-white w-full h-auto flex flex-wrap justify-center items-center  py-10 gap-6">
        {milestones.map((milestone, index) => (
          <Fade triggerOnce key={index} cascade>
            <div
              className="w-[350px] h-[350px] bg-[#01010F] p-6 rounded-lg shadow-md flex flex-col items-start text-start"
              style={{ backgroundColor: "#01010F" }}
            >
              <Image
                src={milestone.image}
                alt={`Milestone ${milestone.year}`}
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-2xl font-extrabold">{milestone.year}</p>
              <p className="text-xl font-bold mt-2">{milestone.title}</p>
              <p className="text-sm mt-2">{milestone.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </main>
  );
};

export default Journey;
