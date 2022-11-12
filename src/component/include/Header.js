import React from "react";

import "./Header.css";

import Logo from "./assets/logo.png";
import BG from "./assets/bg.png";

export default function Header() {
  return (
    <div
      className="
    bg-[#161C24] 
     "
    >
      <div
        className="
      grid 
      absolute
      space-y-11 fdc:space-y-12 sdc:space-y-16
      p-2 fdc:p-5 tdc:p-2  fvdc:p-5
      "
      >
        <img
          src={Logo}
          alt="Logo"
          className="
        h-[28.5px] fdc:h-full tdc:h-[28.5px] fvdc:h-full
        "
        ></img>
        <div
          className="
        space-y-1 ftdc:space-y-3
        "
        >
          <h1
            className="
          text-white 
          font-bold 
          text-lg fdc:text-3xl sdc:text-4xl tdc:text-2xl ftdc:text-2xl fvdc:text-5xl
          leading-1"
          >
            Keep track on your <br /> spraying times
          </h1>
          <p
            className="
          text-white 
          text-xs fdc:text-sm tdc:text-xs fvdc:text-sm
          "
          >
            Together we will schedule the times for the most
            <br className="hidden tdc:block" /> efficient spraying. Reduce drift and grow
            with us.
          </p>
        </div>
      </div>

      <img src={BG} alt="BackGround" className="
      tdc:h-screen tdc:w-auto
      "></img>

      <div className="
       flex
       absolute  
       text-xs fdc:text-sm tdc:text-xs fvdc:text-sm
       px-2 fdc:p-5 tdc:px-2 fdc:p-0 fvdc:px-5
       -mt-5   
       space-x-2 
       ">
        <button className="text-[#F2994A]">
          <a>Privacy Policy</a>
        </button>
        <button className="text-[#F2994A]">
          <a>Terms & Conditions</a>
        </button>
      </div>
    </div>
  );
}
