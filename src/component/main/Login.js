import React, { useState } from "react";

import HeaderLogin from "../header/login/HeaderLogin";
import HeaderTitle from "../title/login/TitleLogin";
import LoginForgotPass from "../title/login/LoginForgotPass";
import FormEmail from "../form/fields/Email";
import FormPassword from "../form/fields/Password";
import LoginSubmit from "../button/login/LoginSubmit";
import GoogleLogin from "../button/login/LoginGoogle";


export default function Login() {

  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />
        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">

          <div className="grid space-y-1  ftdc:space-y-3">
            {/* Login  Title*/}
            <HeaderTitle />
          </div>

          <form className="space-y-2">
            {/* Form */}
            <FormEmail />
            <FormPassword />

            {/*Forgot Password  */}
            <LoginForgotPass />
          </form>
          {/* Buttons */}
          <div className="space-y-2">
            <LoginSubmit />
            <GoogleLogin />
          </div>
        </div>
      </div>
    </>
  );
}
