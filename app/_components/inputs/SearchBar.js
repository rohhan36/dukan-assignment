import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder, white, border }) => {

  return (
    <div
      className={`hidden lg:flex gap-2 items-center text-neutral-400 bg-neutral-200/60 rounded-md py-0.5 px-2
      ${white && "bg-white"}
      ${border && "border-2 border-neutral-200"}
    `}>
      <FiSearch size={20} />
      <input placeholder={placeholder} className={`bg-transparent p-2 outline-none w-80`} />
    </div>
  );
};

export default SearchBar;
