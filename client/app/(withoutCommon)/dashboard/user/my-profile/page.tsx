import Image from "next/image";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Left Column - Details and About Me */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-teal-600">Profile</h1>
            <p className="text-gray-600 mt-2">Im a creative web developer</p>
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Details
            </h2>
            <p>
              <span className="font-bold">Name:</span> Ann Norton
            </p>
            <p>
              <span className="font-bold">Age:</span> 32 years
            </p>
            <p>
              <span className="font-bold">Location:</span> Hertogenbosch, The
              Netherlands, Earth
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* About Me Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              About me
            </h2>
            <p className="text-gray-600">
              I am an allround web designer. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-gray-600 mt-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            <div className="mt-6">
              <button className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700">
                Contact Me
              </button>
            </div>
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
          <h2 className="text-xl font-bold">HELLO, I M PATRYCJA</h2>
          <p className="text-center text-sm">
            I am a versatile graphic designer who can approach marketing
            projects from concept to implementation.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-orange-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
