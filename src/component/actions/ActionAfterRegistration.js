import React from "react";

 
export default function Toast() {
  return (
    <div
      className="
     fdc:min-w-[320px]
    tdc:min-w-[300px]
    ftdc:min-w-[330px]
    fvdc:min-w-[420px] space-y-2"
    >
      <h1 className="">
        <center className="text-xl fdc:text-3xl tdc:text-2xl ftdc:text-4xl font-semibold tdc:text-[#E4E6F2]">
          Account Registered <br></br> Successfully
        </center>
      </h1>
      <button  className="bg-[#219653] p-2 min-w-[420px] rounded-md">
        <center><a href="/plotselectionstepone">Start the onboarding</a></center>
      </button>
    </div>
  );
}
