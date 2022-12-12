import React from "react";
import Google from "./images/google.png";
export default function LoginGoogle(props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="w-full   flex space-x-3 min-h-[50px] bg-white text-orange border border-orange tdc:border-none rounded-md justify-center items-center"
    >
      <img src={Google} alt=""></img>{" "}
      <span className="text-[20px]">Sign-in with Google</span>
    </button>
  );
}
