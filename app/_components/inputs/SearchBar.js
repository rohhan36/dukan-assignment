import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="hidden md:flex gap-2 items-center text-neutral-400 bg-neutral-200/60 rounded-lg py-0.5 px-2">
      <FiSearch size={20}/>
      <input placeholder="Search features, tutorials, etc" className="bg-transparent w-80 p-2 outline-none" />
    </div>
  );
};

export default SearchBar;
