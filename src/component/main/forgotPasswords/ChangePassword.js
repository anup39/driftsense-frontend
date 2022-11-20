import React from "react";
import HeaderLogin from "../../header/login/HeaderLogin";
import ForgotTitle from "../../title/forgotPassword/TitleForgotPassword";

import NewPassword from "../../form/password/NewPassword";
import ConfirmNewPassword from "../../form/password/ConfirmPassword";
import SavePassword from "../../button/password/PasswordSave";
// import BackToLogin from "../../title/forgotPassword/BackToLogin";
import GuidePassword from "../../form/password/passwordguide/GuidePassword";
import BackToLogin from "../../alerts/trueAlerts/BackToLogin";

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
             {/* <BackToLogin /> */}
           
            {/* Forgot Password Text */}
            <SavePassword />
            <BackToLogin />
           </form>
        </div>
      </div>
    </>
  );
}
