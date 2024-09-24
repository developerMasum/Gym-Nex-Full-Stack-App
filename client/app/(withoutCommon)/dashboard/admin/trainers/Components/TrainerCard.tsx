import { useDeleteTrainerMutation } from "@/redux/api/trainerApi";
import { Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const TrainerCard = ({
  id,
  name,
  role,
  totalExperience,
  traineesCount,
  rating,
  image,
}: any) => {
  const [deleteTrainer] = useDeleteTrainerMutation({});
  const handleDelete = async (id: any) => {
    console.log(`Deleting trainer with id: ${id}`);

    try {
      await deleteTrainer(id).unwrap();
      toast.success("Trainer deleted successfully");
    } catch (error) {
      toast.error("Failed to delete trainer");
    }
  };

  return (
    <div className="card p-5 bg-[#313844] rounded-lg shadow-lg w-[300px] ">
      <Link href={`/trainers/${id}`}>
        <div className="flex flex-col items-center">
          <Image
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full mb-3 object-cover"
            width={300}
            height={400}
          />

          <h3 className="text-lg font-bold text-center text-gray-100 mb-1">
            {name}
          </h3>
          <div className="flex justify-center mt-3">
            {[...Array(5)].map((_, i) => (
              <Award
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-100 text-center">{role}</p>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-100">
            <p>
              Experience:{" "}
              <span className="font-bold font-xl">
                {" "}
                {totalExperience} years
              </span>{" "}
            </p>
            {/* <p>Available: {availabilityTimes}</p> */}
            <p>
              Students Trained:{" "}
              <span className="font-bold font-xl"> {traineesCount}</span>{" "}
              students trained
            </p>
          </div>
          {/* Buttons will be hidden by default, and shown on hover */}
        </div>
      </Link>
      <button
        onClick={() => handleDelete(id)}
        className="w-full mt-4 bg-transparent text-indigo-100 border border-indigo-200 py-2 px-3 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default TrainerCard;
