"use client";
import { useState, useEffect } from "react";
import { useGetMyselfQuery } from "@/redux/api/userApi";
import Image from "next/image";

const Profile = () => {
  const { data, isLoading } = useGetMyselfQuery({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    location: "",
    occupation: "",
    about: "",
    status: "",
    plan: "",
    role: "",
  });

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Destructure user and userProfile data
  const {
    name,
    age,
    phone,
    email,
    status,
    plan,
    role,
    createdAt,
    updatedAt,
    userProfile,
  } = data || {};

  const { location, occupation, about, maritalStatus } = userProfile || {};

  // Open the modal and set form data with current profile details
  const handleEditClick = () => {
    setIsModalOpen(true);
    setFormData({
      name: name || "",
      age: age || "",
      phone: phone || "",
      email: email || "",
      location: location || "",
      occupation: occupation || "",
      about: about || "",
      status: status || "",
      plan: plan || "",
      role: role || "",
    });
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Data: ", formData);
    handleCloseModal(); // Close the modal after submission
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Left Column - Details and About Me */}
        <div className="space-y-6 relative">
          <div>
            <h1 className="text-4xl font-bold text-teal-600">Profile</h1>
            <p className="text-gray-600 mt-2">I am a creative web developer</p>
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Details
            </h2>
            <p>
              <span className="font-bold">Name:</span> {name || "N/A"}
            </p>
            <p>
              <span className="font-bold">Age:</span> {age || "N/A"} years
            </p>
            <p>
              <span className="font-bold">Phone:</span> {phone || "N/A"}
            </p>
            <p>
              <span className="font-bold">Email:</span> {email || "N/A"}
            </p>
            <p>
              <span className="font-bold">Status:</span> {status || "N/A"}
            </p>
            <p>
              <span className="font-bold">Plan:</span> {plan || "N/A"}
            </p>
            <p>
              <span className="font-bold">Role:</span> {role || "N/A"}
            </p>
            <p>
              <span className="font-bold">Created At:</span>{" "}
              {createdAt ? new Date(createdAt).toLocaleString() : "N/A"}
            </p>
            <p>
              <span className="font-bold">Updated At:</span>{" "}
              {updatedAt ? new Date(updatedAt).toLocaleString() : "N/A"}
            </p>

            {/* Profile Details */}
            <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
              Profile Information
            </h2>
            <p>
              <span className="font-bold">Location:</span> {location || "N/A"}
            </p>
            <p>
              <span className="font-bold">Occupation:</span>{" "}
              {occupation || "N/A"}
            </p>
            <p>
              <span className="font-bold">About:</span> {about || "N/A"}
            </p>
            <p>
              <span className="font-bold">Marital Status:</span>{" "}
              {maritalStatus || "N/A"}
            </p>

            {/* Edit Button */}
            <button
              className="absolute top-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div className="bg-orange-500 text-white rounded-lg p-6 flex flex-col items-center space-y-6">
          <Image
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white"
            height={150}
            width={150}
          />
          <h2 className="text-xl font-bold">{name || "N/A"}</h2>
          <p className="text-center text-sm">
            {occupation || "No occupation information provided."}
          </p>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Age</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">About</label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
