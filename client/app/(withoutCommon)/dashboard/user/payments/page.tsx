import React from "react";
import {
  User,
  Star,
  Award,
  Calendar,
  Dumbbell,
  Bike,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

// Trainer Profile Component
const TrainerProfile = () => {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-6 mb-6">
        <Image
          className="w-32 h-32 rounded-full"
          src="https://randomuser.me/api/portraits/men/85.jpg"
          alt="Trainer Profile"
          width={300}
          height={400}
        />
        <div>
          <h1 className="text-2xl font-bold">Nigel Vasquez</h1>
          <p className="text-sm text-gray-600">Fitness and Gym Trainer</p>
          <p className="text-sm text-gray-600">16 Years Experience</p>
          <div className="flex items-center space-x-1 mt-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
            <p className="text-sm text-gray-600 ml-2">2896 Reviews</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">About</h2>
        <p className="text-gray-600">
          With over 12 years in the fitness industry, Nigel Embark on a journey
          of self-discovery and empowerment with Nigel, where fitness becomes
          the gateway to unparalleled physical and spiritual growth.
        </p>
        <div className="flex space-x-2 mt-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Fitness
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Gym
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Cardio
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Lifestyle
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Weight loss
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
          <User className="text-purple-500 w-8 h-8" />
          <p className="mt-2 text-2xl font-bold">890</p>
          <p className="text-gray-600 text-sm">Trainees</p>
          <p className="text-xs text-purple-500 mt-1">8 new this week</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
          <DollarSign className="text-green-500 w-8 h-8" />
          <p className="mt-2 text-2xl font-bold">$90k</p>
          <p className="text-gray-600 text-sm">Earnings</p>
          <p className="text-xs text-green-500 mt-1">20% high this week</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
          <Star className="text-yellow-500 w-8 h-8" />
          <p className="mt-2 text-2xl font-bold">3689</p>
          <p className="text-gray-600 text-sm">Reviews</p>
          <p className="text-xs text-yellow-500 mt-1">30 new reviews</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Availability</h2>
        <div className="grid grid-cols-4 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day, index) => (
              <div
                key={index}
                className={`p-2 text-center rounded-lg text-sm ${
                  index < 5
                    ? "bg-blue-50 text-blue-500"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {day} - 9AM - 2PM
              </div>
            )
          )}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Awards</h2>
        <div className="relative w-full h-48 bg-gray-50 rounded-lg flex justify-center items-center">
          <Image
            src="/award-gym.png"
            alt="Award"
            width={300}
            height={400}
            className="object-contain h-32"
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
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
        <p className="mt-2 text-center text-sm text-gray-600">
          4 Awards received in 2024.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Reviews</h2>
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
          <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <Image
                  className="w-10 h-10 rounded-full"
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt={review.name}
                  width={300}
                  height={400}
                />
                <div>
                  <h4 className="text-sm font-semibold">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.status}</p>
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
            <p className="text-gray-600 text-sm">{review.review}</p>
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
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold">
          Load More
        </button>
      </div>
    </div>
  );
};

export default TrainerProfile;
