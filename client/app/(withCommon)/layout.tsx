"use client";
import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/Navbar";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animateScroll } from "react-scroll";
import { usePathname } from "next/navigation";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [pathname]);

  return (
    <>
      <NavBar />
      <div className="w-full h-full bg-zinc-900 font-nunito relative">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default CommonLayout;
