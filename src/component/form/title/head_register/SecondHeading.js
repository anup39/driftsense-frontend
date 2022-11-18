import React from "react";
import LineFill from "./assets/linefill.svg";
import Circle from "./assets/circle.svg";
import CircleInsideCircle from "./assets/circleinsidecircle.svg";

export default function SecondHeading() {
    return (
        <>
            <div className="tdc:flex hidden justify-center">
                <img src={CircleInsideCircle}></img>
                <img src={LineFill} className="tdc:w-1/2 ftdc:w-full"></img>
                <img src={Circle}></img>
            </div>
        </>
    );
}