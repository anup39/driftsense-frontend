import React from "react";

 import Tick from "../images/tick.svg";
export default function BackToLogin() {
  return (
    <div
      className="
       
    fdc:min-w-[320px]
    tdc:min-w-[300px]
    ftdc:min-w-[330px]
    fvdc:min-w-[420px] space-y-2"
    >
      <div
        className=" outline-2
                  outline-[#F2994A]
                  bg-[#219653]
                   w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 
                  rounded-md"
      >
        <div className="flex space-x-5 justify-center">
           <img src={Tick} alt="" className="h-4 mt-1" ></img>
           <div className="flex space-x-2"><span className="text-white">Password Changed Successfully</span><span><a href="/login" className="cursor-pointer">back to login</a></span></div>
        </div>
      </div>
    </div>
  );
}
