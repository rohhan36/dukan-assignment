"use client";

import React, { useState } from "react";
import { sideBarOptions } from "@/app/_constants/sidebarOptions";
import { CiWallet } from "react-icons/ci";

import SideBarOption from "./SideBarOption";
import ProfileSection from "./ProfileSection";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("home_1");
  return (
    <nav className="bg-[#1e2640] w-18 md:w-60 text-white p-3 h-screen flex flex-col  justify-between flex-shrink-0">
      <div>
        <ProfileSection />
        
        <div className="flex flex-col gap-1">
          {sideBarOptions.map((option) => (
            <SideBarOption
              option={option}
              key={option.id}
              activeOption={activeOption}
              setActiveOption={setActiveOption}
            />
          ))}
        </div>
      </div>

      <div className="hidden bg-[#343c56] md:flex items-center p-1.5 rounded-md gap-3 cursor-pointer">
        <div className="bg-[#494f64] p-1 rounded-md h-10 w-10 flex justify-center items-center">
          <CiWallet size={30} className="mx-auto my-3 text-white" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs">Available Credits</span>
          <span className="text-md font-semibold">222.10</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
