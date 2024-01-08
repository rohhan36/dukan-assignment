import React from "react";

const OptionTab = ({ activeTab, setActiveTab, label, count, id }) => {
  const isActive = activeTab === id;
  const activateTab = () => {
    setActiveTab(id);
  };

  return (
    <button
      className={`rounded-full text-sm px-3 py-1 transition-all duration-300 ${isActive ? "bg-[#146eb4] text-white" : "bg-neutral-200 text-neutral-500"}`}
      onClick={activateTab}
    >{`${label} (${count})`}</button>
  );
};

export default OptionTab;
