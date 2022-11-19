import React from "react";

import HeaderLogin from "../../header/login/HeaderLogin";
import ForgotTitle from "../../title/forgotPassword/TitleForgotPassword";
import FormEmail from "../../form/fields/Email";
import PasswordReset from "../../button/password/PasswordReset";
import ForgotPasswordText from "../../title/forgotPassword/BackToLogin";
import ResendLink from "../../title/forgotPassword/ResendLink";
import AlertSuccess from "../../alerts/trueAlerts/AlertSuccess";

export default function ForgotPassword() {
  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />

        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
          <div className="grid space-y-1  ftdc:space-y-3">
            {/* Forgot  Title*/}
            <ForgotTitle />
          </div>
          <form className="space-y-2">
            {/* Email Field  */}
            <FormEmail />

            {/* Send Password Link Button */}
            <PasswordReset />
            <AlertSuccess />
            {/* Forgot Password Text */}
            <ResendLink />
            <ForgotPasswordText />
          </form>
        </div>
      </div>
    </>
  );
}
