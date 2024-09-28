import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { Fade } from "react-awesome-reveal";

const ContactSection: FC = () => {
  return (
    <div className="bg-black text-white py-12 px-4 lg:px-16 mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section: Contact Info */}
        <div>
          <Fade>
            <h2 className="text-3xl font-bold mb-4">Location & Contact</h2>
          </Fade>
          <Fade> </Fade>
          <p className="mb-8">
            Discover fitness excellence at our premier gym. With top-notch
            equipment, expert trainers, and dynamic classes.
          </p>

          <div className="space-y-6">
            <Fade>
              {" "}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M21 10L12 2 3 10l9 12 9-12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Address:</p>
                  <p>901 N Pitt Str., Suite 170 Alexandria, NY, USA</p>
                </div>
              </div>
            </Fade>

            <Fade>
              {" "}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M16 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Email:</p>
                  <p>wordpressriver@gmail.com</p>
                </div>
              </div>
            </Fade>

            <Fade>
              {" "}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M3 10l9-7 9 7-9 11L3 10z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Phone Number:</p>
                  <p>(406) 555-0120</p>
                </div>
              </div>
            </Fade>

            <Fade>
              {" "}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M20 14V9a2 2 0 0 0-2-2h-4V3m-4 4V3M5 5h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Open Hour:</p>
                  <p>Monday to Friday: 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        {/* Right Section: Form */}
        <Fade>
          {" "}
          <div>
            <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
            <form>
              {/* Name and Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <Input
                  className="bg-gray-800 text-white"
                  placeholder="Write your name..."
                  aria-label="Name"
                />
                <Input
                  className="bg-gray-800 text-white"
                  placeholder="example@gmail.com"
                  aria-label="Email"
                />
              </div>

              {/* Phone Number Field */}
              <div className="mb-6">
                <Input
                  className="bg-gray-800 text-white"
                  placeholder="(406) 555-0120"
                  aria-label="Phone Number"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <textarea
                  className="bg-gray-800 text-white"
                  placeholder="Write your message..."
                  aria-label="Message"
                  rows={18}
                  cols={90}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ContactSection;
