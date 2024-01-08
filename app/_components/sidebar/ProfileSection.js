import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const ProfileSection = () => {
  return (
    <div className="rounded-md flex gap-3 mb-4 p-2">
      <div className="rounded-md overflow-hidden flex-shrink-0">
        <img width={45} src="https://scontent.fstv2-1.fna.fbcdn.net/v/t39.30808-6/305842526_480112457462860_1258181700195647656_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ATmvsDqagZkAX8Fv957&_nc_ht=scontent.fstv2-1.fna&oh=00_AfAjYJIA17HdQxPT6rp4hpdEp7ujW8V8iUX_Vy_HvQEn2g&oe=65A1C07B" />
      </div>
      <div className="w-full justify-between items-center hidden md:flex">
        <div className="flex flex-col gap-2">
          <span className="text-sm">Nishiyan</span>
          <span className="text-xs underline font-light cursor-pointer">Visit Store</span>
        </div>
        <button>
          <IoChevronDownSharp />
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
