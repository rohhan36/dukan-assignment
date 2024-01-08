import React from "react";
import { BiSolidMessageDots } from "react-icons/bi";

const Notifications = () => {
  return (
    <button className="bg-neutral-200/60 rounded-full p-2 hover:bg-neutral-200 transition-all">
      <BiSolidMessageDots size={30} className="text-neutral-600" />
    </button>
  );
};

export default Notifications;
