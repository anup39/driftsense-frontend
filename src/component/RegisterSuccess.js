import React from "react";
import "../App.css";
import HeaderRegister from "./include/HeaderRegister";
// import Show from "../assets/show.svg";
// import IconDown from "../assets/IconDown.svg";
import CircleInsideCircle from "../assets/circleinsidecircle.svg";
import Line from "../assets/line.svg";
import tickCircle from "../assets/tickcircle.svg";
import Toast from "./include/Toast";
// import Google from "../assets/google.png";
export default function Register() {
  return (
    <>
      <div
        className="
        tdc:bg-[#161C24]
        bg-transparent
        grid  
        tdc:grid-cols-2      
        space-y-2  fdc:space-y-5 tdc:space-y-2
      "
      >
        <HeaderRegister />

        <div
          className="
        p-2
        space-y-44
        fdc:justify-self-center
        fdc:min-w-[320px]
        tdc:min-w-[300px]
        ftdc:min-w-[330px]
        fvdc:min-w-[420px]
        "
        >
          <div
            className="
          grid
          space-y-1  ftdc:space-y-3 
          "
          >
            <div className="tdc:flex hidden justify-center">
              <img src={CircleInsideCircle}></img>
              <img src={Line} className="tdc:w-1/2 ftdc:w-full"></img>
              <img src={tickCircle}></img>
            </div>

            <div
              className="
            justify-self-center
            font-bold tdc:text-[#E4E6F2]
            text-xl fdc:text-3xl tdc:text-2xl ftdc:text-4xl
            "
            >
              Register New Account
            </div>
            {/* For Toast */}
          </div>
          <Toast />
        </div>
      </div>
    </>
  );
}
