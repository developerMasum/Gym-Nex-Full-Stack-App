"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React, { useEffect, useState } from "react";

import { UserRole } from "@/types";
import { getUserInfo } from "@/services/actions/auth.services";
import SidebarLink from "../Sidebar/SidebarLink";
import { drawerItems } from "../Sidebar/SidebarItems";
import Image from "next/image";
import assets from "@/assets";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  const sidebarItems = drawerItems(userRole as UserRole);
  const router = useRouter();
  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <div className="min-h-screen w-full bg-[#292E38]">
      {/* Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 h-screen w-[220px] lg:w-[280px] bg-[#18181B]">
        <div className="flex flex-col h-full gap-4">
          {/* Logo & Profile */}
          <div className="flex flex-col items-center gap-4 px-4 py-4 lg:px-6 bg-transparent pt-8 pb-8">
            <Image
              src={assets.trainer.trainer1}
              alt="logo"
              width={50}
              height={50}
              className="h-28 w-28 rounded-full"
            />
            <div className="">
              <p className="text-white font-semibold text-sm lg:text-base">
                Anderson Smith
              </p>
              <button className="mt-1 text-xs lg:text-sm px-2 py-1 lg:px-5 lg:py-2 text-white font-semibold bg-red-600 rounded-md">
                GOLD
              </button>
            </div>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto">
            <nav className="grid gap-2 items-start px-4 text-sm lg:text-base font-medium text-gray-300 lg:px-6">
              {sidebarItems.map((item, index) => (
                <SidebarLink key={index} item={item} />
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4">
            <Button
              onClick={handleLogOut}
              variant="ghost"
              className="text-white"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-[220px] lg:ml-[280px] flex flex-col">
        {/* Mobile Header */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col bg-[#202124]">
            <nav className="grid gap-2 items-start px-4 text-sm font-medium text-gray-300">
              {sidebarItems.map((item, index) => (
                <SidebarLink key={index} item={item} />
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button
                onClick={handleLogOut}
                variant="ghost"
                className="text-white"
              >
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Section */}
        <main className="flex-1 flex flex-col gap-6 p-4 md:p-6 bg-[#292E38]">
          {children}
        </main>
      </div>
    </div>
  );
}
