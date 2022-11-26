import React from "react";
import HeaderLogin from "../../common/header/login/HeaderLogin";
import ForgotTitle from "../../common/title/forgotPassword/TitleForgotPassword";
import ForgotPasswordText from "../../common/title/forgotPassword/BackToLogin";
import ResendLink from "../../common/title/forgotPassword/ResendLink";
import AlertSuccess from "../../common/alerts/trueAlerts/AlertSuccess";

export default function ForgotPassword() {
  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />

        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
          <div className="grid space-y-1  ftdc:space-y-3">
            <ForgotTitle />
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
                  // bg-[#384063] t
                  text-white
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2
                  rounded-md
                "
              />
            </div>
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
              <a href="/change-password"> Send Password Link </a>
            </button>
          </form>
          <AlertSuccess
            bg_color="#219653"
            text="Password reset link has been sent successfully"
          />
          <ResendLink />
          <ForgotPasswordText />
        </div>
      </div>
    </>
  );
}
