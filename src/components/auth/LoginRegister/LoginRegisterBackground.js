import React from "react";
import BG from "./images/bg.png";
export default function BackGroundImage() {
  return (
    <>
      <img
        src={BG}
        alt="BackGround"
        className="h-full sxdc:h-screen tdc:w-auto"
      ></img>
    </>
  );
}
