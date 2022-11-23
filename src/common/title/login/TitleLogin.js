import React from "react";
export default function LoginTitle() {
  return (
    <>
      <div className="justify-self-center font-bold tdc:text-[#E4E6F2] text-xl fdc:text-3xl tdc:text-2xl ftdc:text-4xl">
        Login
      </div>

      <div className="justify-self-center  tdc:text-[#E4E6F2] text-xs fdc:text-sm tdc:text-xs">
        <span>Needs an account?</span>
        <span className="text-[#F2994A] font-bold">
          <a href="/register"> Sign Up</a>
        </span>
      </div>
    </>
  );
}
