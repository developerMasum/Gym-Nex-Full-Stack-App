"use client";
import About from "@/components/Home/About";
import Blogs from "@/components/Home/Blogs";
import Calculator from "@/components/Home/Calculator";
import Contact from "@/components/Home/Contact";
import HeroSection from "@/components/Home/Hero";
import Membership from "@/components/Home/Membership";
import Offers from "@/components/Home/Offers";
import Testimonials from "@/components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Offers />
      <Membership />
      <Calculator />
      <Testimonials />
      <Blogs />
      <Contact />
    </>
  );
};

export default Home;
