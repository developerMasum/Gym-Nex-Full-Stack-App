import { User, Dumbbell, Bike, Award } from "lucide-react"; // Import icons from Lucide
import StatsCard from "./StatsCard";
const StatsOverview = () => {
  const stats = [
    {
      icon: <Dumbbell className="text-indigo-600 w-6 h-6" />,
      count: 8,
      label: "Fitness",
    },
    {
      icon: <Dumbbell className="text-indigo-600 w-6 h-6" />,
      count: 3,
      label: "Yoga",
    },
    {
      icon: <Bike className="text-indigo-600 w-6 h-6" />,
      count: 2,
      label: "Cardio",
    },
    {
      icon: <User className="text-indigo-600 w-6 h-6" />,
      count: 2,
      label: "Athlete",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, idx) => (
        <StatsCard key={idx} {...stat} />
      ))}
    </div>
  );
};
export default StatsOverview;
