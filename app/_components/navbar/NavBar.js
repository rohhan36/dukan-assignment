"use client";

import React from "react";
import Tooltip from "../UI/Tooltip";
import SearchBar from "../inputs/SearchBar";
import Notifications from "./Notifications";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-2.5 px-5 bg-white shadow-sm border-b-2 border-neutral-200 w-full flex-shrink-0">
      <div className="flex gap-2 items-center">
        <h5 className="font-medium text-md px-3">Payments</h5>
        <Tooltip label="How it works" content="Contact us at help@dukaan.com to know more" />
      </div>

      <SearchBar placeholder="Search features, tutorials, etc." size="md" />

      <div className="flex gap-2 items-center">
        <Notifications />
        <NavMenu />
      </div>
    </nav>
  );
};

export default NavBar;
