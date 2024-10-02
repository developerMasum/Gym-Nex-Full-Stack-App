"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getUserInfo } from "@/services/actions/auth.services";
import Link from "next/link";

const AdminResponsePage = () => {
  const user = getUserInfo();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (user) {
      setUserName(user?.name || "");
      setUserEmail(user?.email || "");
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 pt-20">
      <div className="bg-teal-800 shadow-lg rounded-lg p-8 w-[900px] text-center">
        <Image
          src="https://img1.picmix.com/output/stamp/normal/7/4/7/0/2380747_eaf41.gif" // Replace with any relevant waiting image
          alt="Waiting"
          width={150}
          height={150}
          className="mx-auto mb-4 rounded-full"
        />
        <h2 className="text-4xl font-bold text-white mb-4">
          Welcome, <span>{userName}</span>
        </h2>
        <p className="text-gray-200 mb-2">
          Thank you for your payment. Your transaction is currently being
          processed.
        </p>
        <p className="text-gray-200 mb-2">
          A confirmation email will be sent to you shortly at{" "}
          <strong>{userEmail}</strong>.
        </p>
        <p className="text-gray-200 mb-6">
          Our admin team is reviewing your payment and will get back to you as
          soon as possible.
        </p>
        <div className="mb-4">
          <p className="text-gray-300 font-semibold">Best Regards,</p>
          <p className="text-gray-300">The Admin Team</p>
        </div>
        <Link href="/">
          <p className=" cursor-pointer underline text-muted-foreground text-gay-100 font-semibold hover:bg-gradient-to-r">
            return to the home page
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdminResponsePage;
