import React from "react";
import Google from "../images/google.png";

export default function RegisterGoogle(props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="w-full p-1 fdc:p-2 tdc:p-1 fvdc:p-2 flex space-x-2 bg-white text-[#F2994A] border border-[#F2994A] tdc:border-none rounded-md justify-center"
    >
      <img src={Google} alt=""></img> Sign-up with Google
    </button>
  );
}
