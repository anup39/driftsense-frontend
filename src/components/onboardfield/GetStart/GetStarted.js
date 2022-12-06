import React from "react";
import RightArrow from "./images/Iconright.svg";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();
  // href="/create-field"

  const handleGetStarted = () => {
    navigate("/create-field");
  };
  return (
    <>
      <button
        onClick={handleGetStarted}
        className="flex ring ring-orange-500 space-x-2 bg-[#212B36] p-2 rounded-md text-white text-lg "
      >
        <span>Get Started</span>
        <img src={RightArrow} alt="" className="h-3 mt-2"></img>
      </button>
    </>
  );
}
