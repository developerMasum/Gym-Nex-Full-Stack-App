"use client";

import { User, Star, DollarSign } from "lucide-react";
import Image from "next/image";
import { useGetSingleTrainerQuery } from "@/redux/api/trainerApi";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Trainer Profile Component
const TrainerDetailsPage = () => {
  const pathname = usePathname();
  const id = pathname?.split("/")[2];
  const { data: trainer } = useGetSingleTrainerQuery(id);

  return (
    <div className="p-4 md:p-8 bg-transparent max-w-7xl mx-auto mt-16 space-y-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          src={trainer?.image || "/placeholder.jpg"}
          alt="Trainer Profile"
          width={300}
          height={300}
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-200">
            {trainer?.name}
          </h1>
          <p className="text-sm md:text-base text-gray-400">{trainer?.title}</p>
          <p className="text-sm text-gray-400 mt-1">
            <span className="font-bold">{trainer?.totalExperience}</span> Years
            Experience
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400" />
            ))}
            <p className="text-sm text-gray-300 ml-2">2896 Reviews</p>
          </div>
        </div>
      </div>

      {/* About */}
      <section>
        <h2 className="text-lg font-semibold text-gray-200 mb-2">About</h2>
        <p className="text-gray-300 text-sm">{trainer?.bio}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {trainer?.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatBox
          icon={<User className="text-red-500 w-6 h-6" />}
          label="Trainees"
          value={trainer?.traineesCount}
          note="8 new this week"
        />
        <StatBox
          icon={<DollarSign className="text-green-500 w-6 h-6" />}
          label="Earnings"
          value={`$${trainer?.totalEarnedAmount}`}
          note="20% high this week"
        />
        <StatBox
          icon={<Star className="text-yellow-500 w-6 h-6" />}
          label="Reviews"
          value="3689"
          note="30 new reviews"
        />
      </section>

      {/* Availability */}
      <section>
        <h2 className="text-lg font-semibold text-gray-200 mb-2">
          Availability
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {trainer?.availabilityDays?.map((day: string, index: number) => (
            <div
              key={index}
              className="p-2 text-center rounded-lg text-sm bg-[#313844] text-gray-400 font-semibold"
            >
              {day} - {trainer?.availabilityTimes[index]}
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-lg font-semibold text-gray-200 mb-2">Awards</h2>
        <div className="relative w-full h-48 bg-[#313844] rounded-lg flex justify-center items-center">
          <Image
            src="/award-gym.png"
            alt="Award"
            className="object-contain h-32"
            width={300}
            height={300}
          />
        </div>
        <p className="mt-2 text-center text-sm text-gray-100">
          4 Awards received in 2024.
        </p>
      </section>

      {/* Reviews */}
      <section>
        <h2 className="text-lg font-semibold text-gray-200 mb-4">Reviews</h2>
        {dummyReviews.map((review, index) => (
          <div
            key={index}
            className="mb-4 p-4 bg-[#313844] rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <Image
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt={review.name}
                  width={300}
                  height={300}
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-300">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-200">{review.status}</p>
                </div>
              </div>
              <p
                className={clsx("text-sm font-semibold", {
                  "text-green-500": review.recommend,
                  "text-red-500": !review.recommend,
                })}
              >
                {review.recommend ? "I recommend." : "I do not recommend."}
              </p>
            </div>
            <p className="text-gray-100 text-sm">{review.review}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.stars ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
        {/* <button className="w-full bg-gray-800 hover:bg-gray-700 transition text-white py-2 rounded-lg font-semibold">
          Load More
        </button> */}
      </section>
    </div>
  );
};

export default TrainerDetailsPage;

// Stat Box Component
const StatBox = ({ icon, label, value, note }: any) => (
  <div className="p-4 bg-[#313844] rounded-lg shadow-sm flex flex-col items-center">
    {icon}
    <p className="mt-2 text-2xl font-bold text-gray-300">{value}</p>
    <p className="text-gray-100 text-sm">{label}</p>
    <p className="text-xs text-gray-500 mt-1">{note}</p>
  </div>
);

// Dummy reviews to simulate review block
const dummyReviews = [
  {
    name: "Wendi Combs",
    status: "Excellent",
    review:
      "I have been training with Demian through Fitness for almost two years and it is an integral part of my fitness journey.",
    recommend: true,
    stars: 5,
  },
  {
    name: "Nick Morrow",
    status: "Excellent",
    review:
      "One year ago, I started training with BootstrapGallery, and it's been a great experience.",
    recommend: true,
    stars: 5,
  },
  {
    name: "Carole Dodson",
    status: "Bad",
    review: "It's a not recommended example. It's a not recommended example.",
    recommend: false,
    stars: 2,
  },
];
