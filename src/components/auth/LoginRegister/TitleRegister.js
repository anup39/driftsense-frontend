import React from "react";

export default function RegisterTitle() {
  return (
    <>
      <div
        className="
        justify-self-center font-bold tdc:text-[#E4E6F2] text-[40px]
            "
      >
        Register New Account
      </div>

      <div
        className="
            justify-self-center  tdc:text-[#E4E6F2]
            text-[18px]
            "
      >
        <span>Already have an Account ?</span>
        <span
          className="
              text-[#F2994A]
              font-bold
              "
        >
          <a href="/login"> Sign In</a>
        </span>
      </div>
    </>
  );
}
