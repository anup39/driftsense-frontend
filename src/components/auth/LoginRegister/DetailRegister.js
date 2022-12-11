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
          text-lg fdc:text-3xl sdc:text-4xl tdc:text-2xl ftdc:text-2xl fvdc:text-4xl
           "
        >
          Timing is Everything!
        </h1>
        <p
          className="
          text-white
          text-xs fdc:text-sm tdc:text-xs fvdc:text-sm
          "
        >
          DriftSense helps you to cut your expenses.
          <br className="hidden tdc:block" /> We provide the most efficient
          times for pesticide application, <br className="hidden tdc:block" />
          and notify of potential cross field drift.
        </p>
      </div>
    </>
  );
}
