import assets from "@/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Image
        src="https://i.ibb.co.com/6w2zGH4/cyclists-competing-city-bicycle-marathon-74855-10571-removebg-preview.png"
        alt="image"
        width={600}
        height={500}
        // className="w-4/6 h-auto object-cover"
      />
    </div>
  );
};

export default Banner;
