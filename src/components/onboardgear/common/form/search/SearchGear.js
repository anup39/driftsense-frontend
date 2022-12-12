import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchGear() {
  return (
    <>
      <div className="relative">
        <button className="absolute top-0 mt-3 ml-3 text-white cursor-pointer">
          <FontAwesomeIcon icon={faSearch} className="text-xl" />
        </button>
        <input
          type="text"
          className="p-3 pl-14 bg-[#3C4752] w-[570px] text-[#F2994A] outline-none rounded-md border-2 border-[#F2994A]"
          placeholder="Search Gear"
        />
      </div>
    </>
  );
}
// 'fdc': '320px',
// 'sdc': '420px',
// 'tdc': '620px',
// 'ftdc': '820px'
// 'fvdc': '920px',
