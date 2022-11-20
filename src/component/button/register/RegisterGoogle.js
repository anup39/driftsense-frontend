import React from "react";
import Google from "../images/google.png";

export default function RegisterGoogle() {
  return (
    <button className="w-full p-1 fdc:p-2 tdc:p-1 fvdc:p-2 flex space-x-2 bg-white text-[#F2994A] border border-[#F2994A] tdc:border-none rounded-md justify-center">
      <img src={Google}></img> <a href="/registerwithgoogle">Sign-up with Google</a>
    </button>
  );
}
