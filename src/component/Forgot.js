import React from "react";
import HeaderLogin from "./include/HeaderLogin";
import "../App.css";
import AlertSuccess from "./include/AlertSuccess";

export default function Loader() {
  return (
    <>
      <div
        className="
        tdc:bg-[#161C24]
        bg-transparent
        grid  
        tdc:grid-cols-2      
        space-y-2  fdc:space-y-5 tdc:space-y-2
      "
      >
        <HeaderLogin />
        <div
          className="
        p-2
        space-y-44
        fdc:place-self-center
        fdc:min-w-[320px]
        tdc:min-w-[300px]
        ftdc:min-w-[330px]
        fvdc:min-w-[420px]
        "
        >
          <div
            className="
          grid
          space-y-1  ftdc:space-y-3 
          "
          >
            <div
              className="
            justify-self-center
            font-bold tdc:text-[#E4E6F2]
            text-xl fdc:text-3xl tdc:text-2xl ftdc:text-4xl
            "
            >
              Forgot Password
            </div>
            <form className="space-y-2">
              <div className="">
                <label
                  className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
                >
                  Email <span className="text-[#D44453]">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="
                  outline-2
                  outline-[#F2994A]
                  bg-[#384063] t
                  text-white 
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 
                  rounded-md
                "
                />
              </div>
              <AlertSuccess />
              <button
                className="
                    w-full 
                    p-1  fdc:p-2 tdc:p-1 fvdc:p-2
                    bg-[#F2994A] 
                    text-white 
                    rounded-md 
                    text-center
                    "
              >
                Send Password Link
              </button>
              <a className="flex space-x-2 justify-end">
                <span className="tdc:text-white font-normal">
                  Resend Link in
                </span>
                <span className="text-[#F2994A] font-semibold">5:55</span>
              </a>
              <a className="grid justify-items-end text-[#F2994A] cursor-pointer font-semibold">
                Back to Login
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
