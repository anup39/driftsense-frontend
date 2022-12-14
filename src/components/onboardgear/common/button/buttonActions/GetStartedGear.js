import React from "react";
import RightArrow from "../images/Iconright.svg";
import { useNavigate } from "react-router-dom";
export default function GetStartedGear() {
  const navigate = useNavigate();
  const handleStartGearOnboard = () => {
    navigate("/gear-list");
  };
  return (
    <>
      <div
        onClick={handleStartGearOnboard}
        className="flex focus:ring focus:ring-orange  space-x-2 bg-[#212B36] p-2 rounded-md text-white text-lg cursor-pointer"
      >
        <span>Get Started</span>
        <img src={RightArrow} alt="" className="h-3 mt-2"></img>
      </div>
    </>
  );
}
