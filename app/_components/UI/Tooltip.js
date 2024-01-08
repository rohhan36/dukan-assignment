import React, { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Tooltip = ({ label, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="flex items-center text-[#636363] gap-2 relative">
      <button onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        <FaRegCircleQuestion />
      </button>
      <span className="text-xs font-medium">{label}</span>
      <div
        class={`absolute z-50 w-56 text-xs top-6 whitespace-normal break-words rounded-lg bg-neutral-500 py-1.5 px-3 font-normal text-white focus:outline-none transition-all
          ${showTooltip ? "opacity-1000" : "opacity-0"}
        `}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
