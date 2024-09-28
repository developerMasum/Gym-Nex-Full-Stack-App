"use client";
import ReuseAbleBanner from "@/components/Common/ReuseAbleBanner";
import ContactSection from "./Components/ContactSection";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Components/Maps"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <div className="bg-transparent">
      <ReuseAbleBanner name="Contact" path="Contact" />
      <Map />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
