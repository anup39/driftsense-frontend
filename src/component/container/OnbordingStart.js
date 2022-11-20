import React, { useState } from "react";

import HeaderLogin from "../header/login/HeaderLogin";
 
import ActionAfterRegistration from "../actions/ActionAfterRegistration";

export default function StartOnBording() {

  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />

        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
                <ActionAfterRegistration/>
           
        </div>
      </div>
    </>
  );
}
