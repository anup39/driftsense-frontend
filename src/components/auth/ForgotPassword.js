import React, { useEffect, useState } from "react";
import HeaderLogin from "./LoginRegister/HeaderLogin";
import ForgotPasswordText from "./ForgotChangePassword/BackToLogin";
import ResendLink from "./ForgotChangePassword/ResendLink";
import AlertSuccess from "./ForgotChangePassword/AlertSuccess";
import NormalLoginButton from "./LoginRegister/NormalLoginButton";
import { useForgotPasswordEmailMutation } from "../../api/authApi";

export default function ForgotPassword() {
  const [show, setShow] = useState("invisible");
  const [alertColor, setAlertColor] = useState("#219653");
  const [alertText, setAlertText] = useState(
    "Password reset link has been sent successfully"
  );

  const [forgotPasswordEmail, { isLoading, isError, isSuccess }] =
    useForgotPasswordEmailMutation();

  const handleForgotPassSubmit = (event) => {
    event.preventDefault();
    const email = event.target.forgotPassEmailInput.value;
    const forgot_pass_data = { username_or_email: email };
    forgotPasswordEmail(forgot_pass_data);
    event.target.reset();
  };

  useEffect(() => {
    if (isSuccess || isError) {
      if (isSuccess) {
        setAlertColor("#219653");
        setAlertText("Password reset link has been sent successfully");
      } else {
        setAlertColor("#d60909");
        setAlertText("Sorry Email not found.Something went wrong");
      }
      setShow("visible");
    } else {
      setShow("invisible");
    }
  }, [isSuccess, isError]);

  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />
        <div className="tdc:bg-[#161C24]   w-full grid justify-items-center fvdc:py-[34px]">
          <div className="  p-2 space-y-2 fdc:place-self-center ">
            <div className="fdc:max-w-[320px] tdc:max-w-[300px] ftdc:max-w-[330px] fvdc:max-w-[420px] space-y-2">
              <div className="grid p-2  space-y-2 fdc:place-self-center  fdc:max-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px]">
                <div className="justify-self-center font-bold tdc:text-[#E4E6F2] text-[40px]">
                  Forgot Password
                </div>
                <form onSubmit={handleForgotPassSubmit} className="space-y-2">
                  <div className="">
                    <label
                      className="
              text-[16px] tdc:text-[#E4E6F2]
              "
                    >
                      Email <span className="text-[#D44453]">*</span>
                    </label>
                    <br />
                    <input
                      id="forgotPassEmailInput"
                      required
                      type="text"
                      placeholder="Enter Email Address"
                      className="
                border-2
                border-transparent
                focus:border-2 
                focus:border-orange
                outline-none
                bg-formblue 
                text-white
                w-full
                py-1 fdc:p-2 tdc:py-1  fvdc:p-2
                rounded-md
                min-h-[50px]
                "
                    />
                  </div>
                  <NormalLoginButton
                    type={isLoading}
                    text="Send Password Link"
                  />
                </form>
                <AlertSuccess
                  bg_color={alertColor}
                  text={alertText}
                  show={show}
                />
                <ResendLink show={show} />
                <ForgotPasswordText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
