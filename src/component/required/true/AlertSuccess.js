import React from "react";

 import Tick from "../assets/tick.svg";
export default function AlertSuccess() {
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
                  text-white  
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 
                  rounded-md"
      >
        <div className="flex space-x-3 justify-center">
          <div>
            <img src={Tick}></img>
          </div>
          <div>Password reset link has been sent successfully</div>
        </div>
      </div>
    </div>
  );
}
