import React from "react";

import Tick from "../images/tick.svg";
export default function AlertSuccess(props) {
  const { bg_color, text, show } = props;

  return (
    <div
      className="
    fdc:min-w-[320px]
    tdc:min-w-[300px]
    ftdc:min-w-[330px]
    fvdc:min-w-[420px] space-y-2"
    >
      <div
        className={`outline-2 outline-[#F2994A] bg-[${bg_color}] ${show} text-white w-full py-1 fdc:p-2 tdc:py-1  fvdc:p-2 rounded-md`}
      >
        <div className="flex space-x-10 justify-center">
          <img src={Tick} alt="" className="h-4 mt-1"></img>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
}
// bg-[#219653] -- For sucess
// bg-[#d60909] -- For Error
// Password reset link has been sent successfully
