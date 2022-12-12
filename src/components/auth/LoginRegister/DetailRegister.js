import React from "react";
export default function DetailRegister() {
  return (
    <>
      <div
        className="
        space-y-1 ftdc:space-y-3
        "
      >
        <h1
          className="
          text-white
          font-bold
          text-[36px]
          leading-10
           "
        >
          Timing is Everything!
        </h1>
        <p
          className="
          text-white
          text-[16px] 
          max-w-[450px]
          font-medium
          "
        >
          DriftSense helps you to cut your expenses. We provide the most
          efficient times for pesticide application,{" "}
          <br className="hidden tdc:block" />
          and notify of potential cross field drift.
        </p>
      </div>
    </>
  );
}
