import React, { useState } from "react";
import "../App.css";

import Google from "../assets/google.png";
import Show from "../assets/show.svg";
import HeaderLogin from "./include/HeaderLogin";

export default function Login() {
  const [show, setShow] = useState("password");

  const handleShowPassword = (event) => {
    const value = event.target.title;
    if (value === "1") {
      event.target.src = Show;
      event.target.title = "0";
      setShow("text");
    } else {
      console.log("opened");
      event.target.src = Google;
      event.target.title = "1";
      setShow("password");
    }
  };

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
        space-y-2
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
              Login
            </div>

            <div
              className="
            justify-self-center  tdc:text-[#E4E6F2]
            text-xs fdc:text-sm tdc:text-xs
            "
            >
              <span>Needs an account?</span>
              <span
                className="
              text-[#F2994A]
              font-bold
              "
              >
                <a href="/"> Sign Up</a>
              </span>
            </div>
          </div>

          <form
            className="
          space-y-2

          "
          >
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
            <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <div className="relative">
                <input
                  type={show}
                  className="
                outline-2
                outline-[#F2994A]
                bg-[#384063] t
                text-white
                w-full
                py-1 fdc:p-2  tdc:py-1 fvdc:p-2
                rounded-md
                block"
                ></input>

                <div
                  className="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                text-sm
                leading-5
                "
                >
                  <img
                    title="1"
                    onClick={handleShowPassword}
                    alt=""
                    src={Show}
                    className="
                    h-4
                   text-gray-700
                   cursor-pointer"
                  ></img>
                </div>
              </div>
            </div>

            <div
              className="
            grid
            justify-items-end
            text-[#F2994A]
            font-semibold
            text-sm
            "
            >
              <a href="/"> Forgot your Password? </a>
            </div>
          </form>

          <div
            className="
          space-y-2
          "
          >
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
              Login
            </button>
            <button
              className="
            w-full
            p-1 fdc:p-2 tdc:p-1 fvdc:p-2
            flex
            space-x-2
            bg-white
            text-[#F2994A]
            border
            border-[#F2994A]
            sm:border-none
            rounded-md
            justify-center
            "
            >
              <img src={Google} alt=""></img> <span>Sign-in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
