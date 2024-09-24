import User from "@/components/Dashboard/Admin/User";
import GymPersonInfo from "@/components/Dashboard/User/GymPersonInfo";
import Payments from "@/components/Dashboard/User/Payments";

const Dashboard = () => {
  const gymPerson = {
    name: "John Doe",
    age: 30,
    expertise: "Bodybuilding, Personal Training",
    experience: 10,
    goals:
      "Building strength, improving endurance, and helping others achieve their fitness goals.",
    image: "https://example.com/profile-image.jpg", // replace with actual image URL
    bio: "John is a dedicated fitness enthusiast with a passion for helping others achieve their personal best. With a decade of experience in the fitness industry, John specializes in strength training and nutrition planning.",
    certifications: [
      "Certified Personal Trainer (CPT)",
      "Nutrition Specialist",
      "Strength and Conditioning Coach",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/johndoe" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
      { platform: "Facebook", url: "https://facebook.com/johndoe" },
    ],
  };
  return (
    <>
      <Payments />
      <GymPersonInfo {...gymPerson} />
      <User />
    </>
  );
};

export default Dashboard;
