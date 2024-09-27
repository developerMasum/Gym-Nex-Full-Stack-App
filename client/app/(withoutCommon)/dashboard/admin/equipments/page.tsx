import React from "react";

// Sample data array
const gymData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/3sL6Z3y/1-1.jpg",
    number: 20,
    label: "Dumbbells",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/LCbsy5C/2.jpg",
    number: 29,
    label: "Strength",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/qRLPZCs/3-1.jpg",
    number: 38,
    label: "Stations",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/NmBW3rZ/4.jpg",
    number: 29,
    label: "Air Cycle",
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/D8ScWt0/5-1.jpg",
    number: 19,
    label: "Spin Bike",
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/jW8YBFf/6.jpg",
    number: 20,
    label: "Kettlebells",
  },
  {
    id: 7,
    image: "https://i.ibb.co.com/TKbSPQp/7-1.jpg",
    number: 43,
    label: "BullrocK",
  },
  {
    id: 8,
    image: "https://i.ibb.co.com/6JF405j/8.jpg",
    number: 32,
    label: "Barbells",
  },
  {
    id: 9,
    image: "https://i.ibb.co.com/kycFKvm/9-1.jpg",
    number: 18,
    label: "Bumper",
  },
  {
    id: 10,
    image: "https://i.ibb.co.com/mRmgpxJ/10-1.jpg",
    number: 22,
    label: "Air Cycle",
  },
  {
    id: 11,
    image: "https://i.ibb.co.com/p14m26m/11.jpg",
    number: 33,
    label: "Foam Pad",
  },
  {
    id: 12,
    image: "https://i.ibb.co.com/Bt5LHwX/12-1.jpg",
    number: 60,
    label: "Kettlebells",
  },
  {
    id: 13,
    image: "https://i.ibb.co.com/b6nR81w/13.jpg",
    number: 40,
    label: "Stations",
  },
  {
    id: 14,
    image: "https://i.ibb.co.com/fpZpQWz/14-1.jpg",
    number: 8,
    label: "Squat Stand",
  },
  {
    id: 15,
    image: "https://i.ibb.co.com/HD3BY34/15.jpg",
    number: 36,
    label: "Treadmill",
  },
  {
    id: 16,
    image: "https://i.ibb.co.com/WB08Md5/16-1.jpg",
    number: 20,
    label: "Spin Bike",
  },
  {
    id: 17,
    image: "https://i.ibb.co.com/mJ28pb7/17.jpg",
    number: 10,
    label: "Dumbbells",
  },
  {
    id: 18,
    image: "https://i.ibb.co.com/74qSKgC/18.jpg",
    number: 80,
    label: "Barbell",
  },
];

const GymItemsPage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {gymData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center border p-4 rounded-lg shadow bg-white"
        >
          <img
            src={item.image}
            alt={item.label}
            className="w-24 h-24 object-contain mb-4"
          />
          <h2 className="text-4xl font-thin">{item.number}</h2>
          <p className="text-lg font-semibold">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default GymItemsPage;
