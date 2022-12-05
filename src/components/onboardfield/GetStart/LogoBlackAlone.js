import React from "react";

import LogoDark from "./images/logo_dark.png";

export default function HeaderLogoDark() {
  return (
    <>
      <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3">
        <img src={LogoDark} alt="" className="h-8 sdc:h-10 ftdc:h-full"></img>
      </div>
    </>
  );
}
