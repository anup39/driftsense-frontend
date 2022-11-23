import React from "react";
import RightArrow from "../images/Iconright.svg";

export default function GetStarted() {
  return (
    <>
      <a
        href="/create-field"
        className="flex ring ring-orange-500 space-x-2 bg-[#212B36] p-2 rounded-md text-white text-lg "
      >
        <span>Get Started</span>
        <img src={RightArrow} alt="" className="h-3 mt-2"></img>
      </a>
    </>
  );
}
