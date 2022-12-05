import React from "react";
import Line from "./images/line.svg";
import Circle from "./images/circle.svg";
import CircleInsideCircle from "./images/circleinsidecircle.svg";

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
