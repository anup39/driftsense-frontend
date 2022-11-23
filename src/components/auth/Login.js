import React, { useState } from "react";
import HeaderLogin from "../../common/header/login/HeaderLogin";
import HeaderTitle from "../../common/title/login/TitleLogin";
import LoginForgotPass from "../../common/title/login/LoginForgotPass";
import LoginSubmit from "../../common/button/login/LoginSubmit";
import GoogleLogin from "../../common/button/login/LoginGoogle";
import Hide from "../../common/form/images/hide.svg";
import Show from "../../common/form/images/show.svg";

export default function Login() {
  const [show, setShow] = useState("password");

  const handleShowPassword = (event) => {
    const value = event.target.title;
    if (value === "1") {
      event.target.src = Show;
      event.target.title = "0";
      setShow("text");
    } else {
      event.target.src = Hide;
      event.target.title = "1";
      setShow("password");
    }
  };

  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />
        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
          <div className="grid space-y-1  ftdc:space-y-3">
            <HeaderTitle />
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
                required
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
                  required
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
            <LoginForgotPass />
            <div className="space-y-2">
              <LoginSubmit />
            </div>
          </form>
          <div className="space-y-2">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </>
  );
}
