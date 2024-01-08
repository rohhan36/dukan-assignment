import React from "react";
import { FaCaretDown  } from "react-icons/fa";

const NavMenu = () => {
  return (
  <button className="bg-neutral-200/60 rounded-full p-2 hover:bg-neutral-200 transition-all">
      <FaCaretDown  size={30} className="text-neutral-600" />
    </button>
  );
};

export default NavMenu;
