import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderLogin from "../../common/header/login/HeaderLogin";
import ForgotTitle from "../../common/title/forgotPassword/TitleForgotPassword";
import GuidePassword from "../../common/form/password/passwordguide/GuidePassword";
import Hide from "../../common/form/images/hide.svg";
import Show from "../../common/form/images/show.svg";
import AlertSuccess from "../../common/alerts/trueAlerts/AlertSuccess";
import ForgotPasswordText from "../../common/title/forgotPassword/BackToLogin";
import NormalLoginButton from "./common/NormalLoginButton";
import { useChangePasswordMutation } from "../../api/authApi";

export default function ForgotPassword() {
  const { token } = useParams();
  const [show, setShow] = useState("invisible");
  const [show1, setShow1] = useState("password");
  const [show2, setShow2] = useState("password");
  const [alertColor, setAlertColor] = useState("#219653");
  const [alertText, setAlertText] = useState(
    "Password change has been successful.Please Login."
  );
  const [changePassword, { data, isLoading, error, isError, isSuccess }] =
    useChangePasswordMutation();

  const handleShowPassword1 = (event) => {
    const value = event.target.title;
    if (value === "1") {
      event.target.src = Show;
      event.target.title = "0";
      setShow1("text");
    } else {
      event.target.src = Hide;
      event.target.title = "1";
      setShow1("password");
    }
  };
  const handleShowPassword2 = (event) => {
    const value = event.target.title;
    if (value === "1") {
      event.target.src = Show;
      event.target.title = "0";
      setShow2("text");
    } else {
      event.target.src = Hide;
      event.target.title = "1";
      setShow2("password");
    }
  };

  const handleChangePassSubmit = (event) => {
    event.preventDefault();
    const new_password1 = event.target.changePassInput1.value;
    const new_password2 = event.target.changePassInput2.value;
    const change_pass_data = {
      new_password1,
      new_password2,
      forgot_password_token: token,
    };
    changePassword(change_pass_data);
    event.target.reset();
  };

  useEffect(() => {
    if (isSuccess || isError) {
      if (isSuccess) {
        setAlertColor("#219653");
        setAlertText("Password change has been successful. Please Login");
      } else {
        setAlertColor("#d60909");
        setAlertText("Password is too short and not valid. Please try Again");
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
        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
          <div className="grid space-y-1  ftdc:space-y-3">
            <ForgotTitle />
          </div>
          <form onSubmit={handleChangePassSubmit} className="space-y-2">
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
                  id="changePassInput1"
                  required
                  type={show1}
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
                    onClick={handleShowPassword1}
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
            <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                Confirm Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <div className="relative">
                <input
                  id="changePassInput2"
                  required
                  type={show2}
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
                    onClick={handleShowPassword2}
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
            <GuidePassword />
            <NormalLoginButton type={isLoading} text="Save" />
          </form>
          <AlertSuccess bg_color={alertColor} text={alertText} show={show} />
          <ForgotPasswordText />
        </div>
      </div>
    </>
  );
}
