import React from "react";
import Logo from "./assets/logo.png";
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
