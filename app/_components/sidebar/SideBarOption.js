import React from "react";

const SideBarOption = ({ option, activeOption, setActiveOption }) => {
  const Icon = option.icon;
  const isActive = activeOption === option.id;
  const changeActiveOption = () => {
    setActiveOption(option.id);
  };

  return (
    <div
      onClick={changeActiveOption}
      className={`flex gap-3 items-center cursor-pointer transition-all rounded-md px-3 py-1.5
        ${isActive ? "bg-[#343c53]" : "hover:bg-[#343c53]/40"}
      `}
    >
      <span className="text-lg py-1">
        <Icon />
      </span>
      <div className="font-light hidden md:block text-sm">{option.label}</div>
    </div>
  );
};

export default SideBarOption;
