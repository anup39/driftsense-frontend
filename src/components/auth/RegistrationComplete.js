import React from "react";

import HeaderLogin from "../../common/header/login/HeaderLogin";

export default function StartOnBording() {
  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />

        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
          <div
            className="
            space-y-2"
          >
            <h1 className="">
              <center className="text-xl fdc:text-3xl tdc:text-2xl ftdc:text-4xl font-semibold tdc:text-[#E4E6F2]">
                Account Registered <br></br> Successfully
              </center>
            </h1>
            <button className="bg-[#219653] p-2 min-w-[420px] rounded-md">
              <center>
                <a href="/get-started-field">Start the onboarding</a>
              </center>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
