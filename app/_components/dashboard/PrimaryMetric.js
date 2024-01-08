import React from "react";
import Tooltip from "../UI/Tooltip";
import { FaChevronRight } from "react-icons/fa";

const PrimaryMetric = ({ label, value, tooltip, isPrimary, orderCount }) => {
  return (
    <div>
      <div
        className={`${
          isPrimary ? "bg-[#146eb4] rounded-t-lg" : "bg-white rounded-lg"
        } shadow-sm flex flex-col gap-4 justify-start px-6 py-5`}
      >
        <div className={`flex gap-2 items-center ${isPrimary ? "text-white" : "text-neutral-500"}`}>
          <span className={` text-md`}>{label}</span>
          <Tooltip content={tooltip} />
        </div>
        <span className="text-xl md:text-2xl lg:text-3xl font-medium flex justify-between items-end">
          <span className={isPrimary ? "text-white" : "text-neutral-500"}>{value}</span>
          {orderCount && (
            <div className="flex items-center cursor-pointer">
              <span className={`text-sm underline ${isPrimary ? "text-white" : "text-[#146eb4]"}`}>
                {orderCount} Orders
              </span>
              <FaChevronRight className={`text-sm ${isPrimary ? "text-white" : "text-[#146eb4]"}`} />
            </div>
          )}
        </span>

      </div>
        {isPrimary && (
          <div className="h-8 text-xs flex justify-between items-center text-white rounded-b-lg bg-[#0e4f82] px-6 py-2">
            <span>Next payment date:</span>
            <span className="font-medium">Today, 04:00PM</span>
          </div>
        )}
    </div>
  );
};

export default PrimaryMetric;
