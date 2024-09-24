"use client";

import React from "react";
import Offer from "../../../../assets/hero/3.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Images } from "@/components/Common/Image";
import { Fade } from "react-awesome-reveal";

const AccordionAbout = () => {
  return (
    <section className="w-full h-auto flex items-center bg-zinc-900 py-10">
      <main className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image Section */}
        <div className="w-full h-[300px] md:h-[500px] lg:h-[800px]">
          <Images
            alt="Offer Image"
            objectCover="object-cover"
            className="w-full h-full"
            image={Offer}
          />
        </div>

        {/* Content Section */}
        <div className="h-full w-full lg:px-10 px-4 flex flex-col justify-center gap-6 md:gap-10">
          <Fade className="w-full">
            <div className="text-zinc-100">
              <p className="text-xl uppercase font-bold">About Us</p>
              <p className="text-4xl uppercase font-bold mt-2">
                Here GYM Fitness Meets
              </p>
              <p className="text-5xl uppercase font-bold mt-2 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                Excellence!
              </p>

              <p className="text-pretty mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text of the
                industry for years, helping to showcase different designs and
                layouts.
              </p>
            </div>

            {/* Accordion Section */}
            <Accordion type="single" collapsible>
              <div className="bg-[#212128] px-4 py-3 rounded-md mb-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white text-lg text-start">
                    1. How do I know which gym class is right for me?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-200">
                    We offer a range of classes tailored to different fitness
                    levels. Feel free to consult with our trainers for
                    personalized guidance.
                  </AccordionContent>
                </AccordionItem>
              </div>

              <AccordionItem value="item-2">
                <div className="bg-[#212128] px-4 py-3 rounded-md mb-4">
                  <AccordionTrigger className="text-white text-lg text-start">
                    2. What facilities does the gym provide?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Our gym provides state-of-the-art equipment, personal
                    training, group classes, a swimming pool, and a spa for
                    relaxation.
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-3">
                <div className="bg-[#212128] px-4 py-3 rounded-md mb-4">
                  <AccordionTrigger className="text-white text-lg text-start">
                    3. Do you offer personal training services?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Yes, we offer personalized training sessions with certified
                    trainers to help you achieve your fitness goals efficiently.
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-4">
                <div className="bg-[#212128] px-4 py-3 rounded-md mb-4">
                  <AccordionTrigger className="text-white text-lg text-start">
                    4. Are there any membership discounts available?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    We offer seasonal discounts and family memberships. Please
                    contact our reception for more details on current offers.
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-5">
                <div className="bg-[#212128] px-4 py-3 rounded-md mb-4">
                  <AccordionTrigger className="text-white text-lg text-start">
                    5. What are the gym’s operating hours?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    We are open from 6 AM to 10 PM on weekdays and 8 AM to 8 PM
                    on weekends. Special hours apply during holidays.
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </Fade>
        </div>
      </main>
    </section>
  );
};

export default AccordionAbout;
