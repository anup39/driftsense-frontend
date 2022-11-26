import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          className="p-2 bg-[#212B36] w-[200px] ftdc:w-[330px] tdc:w-[250px] text-[#F2994A] rounded-md"
          placeholder="Search Location"
        />
        <button className="relative -ml-7 text-white cursor-pointer">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </>
  );
}
