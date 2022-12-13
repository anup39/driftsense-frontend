import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchGear() {
  return (
    <>
      <div className="relative">
        <button className="absolute top-0 mt-4 ml-3 text-white cursor-pointer">
          <FontAwesomeIcon icon={faSearch} className="text-xl" />
        </button>
        <input
          type="text"
          className="p-3 pl-14 bg-[#3C4752] w-[570px] text-[#F2994A] outline-none rounded-xl border-2 border-transparent focus:border-2 focus:border-[#F2994A]"
          placeholder="Search Gear"
        />
      </div>
    </>
  );
}
