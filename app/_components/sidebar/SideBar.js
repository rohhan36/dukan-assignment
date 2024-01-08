"use client";

import React, { useState } from "react";
import { sideBarOptions } from "@/app/constants/sidebarOptions";
import SideBarOption from "./SideBarOption";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("home_1");
  return (
    <nav className="bg-[#1e2640] w-18 md:w-60 text-white p-3 h-screen">
      <div className="flex flex-col gap-1.5">
        {sideBarOptions.map((option) => (
          <SideBarOption
            option={option}
            key={option.id}
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
