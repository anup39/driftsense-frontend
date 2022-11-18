import React from "react";
import Google from "./assets/google.png";

export default function GoogleRegister() {
  return (
    <button className="w-full p-1 fdc:p-2 tdc:p-1 fvdc:p-2 flex space-x-2 bg-white text-[#F2994A] border border-[#F2994A] tdc:border-none rounded-md justify-center">
      <img src={Google}></img> <span>Sign-up with Google</span>
    </button>
  );
}
