import React from "react";
import Logo from "./images/logo.png";
export default function BackGroundImage() {
  return (
    <>
      <img
        src={Logo}
        alt="Logo"
        className="
        h-[28.5px] fdc:h-full tdc:h-[28.5px] fvdc:h-full
        "
      ></img>{" "}
    </>
  );
}
