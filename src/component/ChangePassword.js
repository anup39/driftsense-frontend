import React from "react";
import HeaderLogin from "./include/HeaderLogin";
import ForgotTitle from "./form/title/ForgotTitle";
import NewPassword from "./form/password/NewPassword";
import ConfirmNewPassword from "./form/password/ConfirmPassword";
import PasswordReset from "./button/PasswordReset";
import ForgotPasswordText from "./form/text/ForgotPasswordText";
import SavePassword from "./button/SavePassword";
import BackToLogin from "./required/true/BackToLogin";
import GuidePassword from "./form/text/passwordguide/GuidePassword";

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
            <NewPassword/>
            <ConfirmNewPassword/>
            <GuidePassword />
            {/* Back To Login and Sucess*/}
             <BackToLogin />
           
            {/* Forgot Password Text */}
            <SavePassword />
           </form>
        </div>
      </div>
    </>
  );
}
