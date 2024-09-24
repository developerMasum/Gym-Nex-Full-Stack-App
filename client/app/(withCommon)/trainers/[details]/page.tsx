"use client";

import { User, Star, DollarSign } from "lucide-react";
import Image from "next/image";
import { useGetSingleTrainerQuery } from "@/redux/api/trainerApi";
import { usePathname } from "next/navigation";

// Trainer Profile Component
const TrainerDetailsPage = () => {
  const pathname = usePathname();
  const id = pathname?.split("/")[2];

  const { data: trainer } = useGetSingleTrainerQuery(id);

  return (
    <div className="p-8 bg-transparent shadow-md rounded-lg mt-20">
      <div className="flex items-center space-x-6 mb-6">
        <Image
          className="w-32 h-32 rounded-full"
          src={trainer?.image}
          alt="Trainer Profile"
          width={300}
          height={400}
        />
        <div>
          <h1 className="text-2xl font-extrabold text-gray-200 ">
            {trainer?.name}
          </h1>
          <p className="text-sm text-gray-100">{trainer?.title}</p>
          <p className="text-sm text-gray-100">
            <span className="text-gray-100 font-bold">
              {trainer?.totalExperience}
            </span>{" "}
            Years Experience
          </p>
          <div className="flex items-center space-x-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400" />
            ))}
            <p className="text-sm text-gray-100 ml-2">2896 Reviews</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-200">About</h2>
        <p className="text-gray-100">{trainer?.bio}</p>
        <div className="flex space-x-2 mt-4">
          {trainer?.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-[#313844] rounded-lg shadow-sm flex flex-col items-center">
          <User className="text-purple-500 w-8 h-8" />
          <p className="mt-2 text-2xl font-bold">{trainer?.traineesCount}</p>
          <p className="text-gray-100 text-sm">Trainees</p>
          <p className="text-xs text-purple-500 mt-1">8 new this week</p>
        </div>
        <div className="p-4 bg-[#313844]  rounded-lg shadow-sm flex flex-col items-center">
          <DollarSign className="text-green-500 w-8 h-8" />
          <p className="mt-2 text-2xl font-bold">
            ${trainer?.totalEarnedAmount}
          </p>
          <p className="text-gray-100 text-sm">Earnings</p>
          <p className="text-xs text-green-500 mt-1">20% high this week</p>
        </div>
        <div className="p-4 bg-[#313844]  rounded-lg shadow-sm flex flex-col items-center">
          <Star className="text-yellow-500 w-8 h-8" />
          <p className="mt-2 text-2xl font-bold">3689</p>
          <p className="text-gray-100 text-sm">Reviews</p>
          <p className="text-xs text-yellow-500 mt-1">30 new reviews</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-200">
          Availability
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {trainer?.availabilityDays?.map((day: string, index: number) => (
            <div
              key={index}
              className="p-2 text-center rounded-lg text-sm bg-[#313844] text-gray-400 font-semibold"
            >
              {day} - {trainer?.availabilityTimes[index]}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-200">Awards</h2>
        <div className="relative w-full h-48 bg-[#313844] rounded-lg flex justify-center items-center">
          <Image
            src="/award-gym.png"
            alt="Award"
            className="object-contain h-32"
            width={300}
            height={300}
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#313844] hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-center text-sm text-gray-100">
          4 Awards received in 2024.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-200">Reviews</h2>
        {[
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
              "One year ago, I started training with BootstrapGallery, and it's been a great experience. My trainer has not only become my fitness guide but also my biggest cheerleader.",
            recommend: true,
            stars: 5,
          },
          {
            name: "Carole Dodson",
            status: "Bad",
            review:
              "Its a not recommended example. Its a not recommended example.",
            recommend: false,
            stars: 2,
          },
        ].map((review, index) => (
          <div
            key={index}
            className="mb-4 p-4 bg-[#313844] rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <Image
                  className="w-10 h-10 rounded-full"
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt={review.name}
                  width={300}
                  height={300}
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-300 ">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-200">{review.status}</p>
                </div>
              </div>
              {review.recommend ? (
                <p className="text-green-500 text-sm font-semibold">
                  I recommend.
                </p>
              ) : (
                <p className="text-red-500 text-sm font-semibold">
                  I do not recommend.
                </p>
              )}
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
        <button className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold">
          Load More
        </button>
      </div>
    </div>
  );
};

export default TrainerDetailsPage;
