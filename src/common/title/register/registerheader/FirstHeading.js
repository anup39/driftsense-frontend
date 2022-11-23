import React from "react";
import Line from "./assets/line.svg";
import Circle from "./assets/circle.svg";
import CircleInsideCircle from "./assets/circleinsidecircle.svg";

export default function FirstHeading() {
  return (
    <>
      <div className="tdc:flex hidden justify-center">
        <img src={CircleInsideCircle} alt="" />
        <img src={Line} className="tdc:w-1/2 ftdc:w-full" alt="" />
        <img src={Circle} alt="" />
      </div>
    </>
  );
}
