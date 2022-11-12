import React from "react";

import "./Header.css";

import Logo from "./assets/logo.png";
import BG from "./assets/bg.png";

export default function Header() {
  return (
    <div className="bg-[#161C24] sm:bg-transparent ">
      <div className="grid absolute p-5 space-y-16">
        <img src={Logo} alt="Logo"></img>
        <div className="grid gap-2">
          <h1 className="text-white font-bold text-3xl">
            Keep track on your <br /> spraying
            times
          </h1>
          <p className="text-white">
            Together we will schedule the times for the most
            <br /> efficient spraying. Reduce
            drift and grow with us.
          </p>
        </div>
      </div>

      <img src={BG} alt="BackGround" className=""></img>

      <div className="space-x-5 flex absolute px-5 -mt-12">
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
