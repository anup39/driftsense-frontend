import React, { useEffect, useState } from "react";
import HeaderLogin from "../../common/header/login/HeaderLogin";
import HeaderTitle from "../../common/title/login/TitleLogin";
import LoginForgotPass from "../../common/title/login/LoginForgotPass";
import GoogleLogin from "../../common/button/login/LoginGoogle";
import Hide from "../../common/form/images/hide.svg";
import Show from "../../common/form/images/show.svg";
import { useLoginUserMutation } from "../../api/authApi";
import NormalLoginButton from "../auth/common/NormalLoginButton";

export default function Login(props) {
  const [show, setShow] = useState("password");
  const [errorText, setErrorText] = useState("invisible");
  const [verifiedText, setVerifiedText] = useState(props.verifiedText);

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

  const [loginUser, { data, isLoading, error, isSuccess }] =
    useLoginUserMutation();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.loginEmailInput.value;
    const password = event.target.loginPasswordInput.value;
    const login_data = { username: email, password: password };
    loginUser(login_data);
    setVerifiedText("invisible");
    event.target.reset();
  };

  useEffect(() => {
    if (error) {
      setErrorText("visible");
    } else {
      setErrorText("invisible");
    }
  }, [error]);

  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />

        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
          <div className="grid space-y-1  ftdc:space-y-3">
            <HeaderTitle />
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-2">
            <p
              className={`mt-2 ${errorText} peer-invalid:visible text-pink-600 text-sm`}
            >
              Invalid email address or password.
            </p>
            <p
              className={`mt-2 ${verifiedText} peer-invalid:visible text-${props.color}-600 text-sm`}
            >
              {props.textVerify}
            </p>
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
                id="loginEmailInput"
                required
                type="text"
                placeholder="Enter Email Address"
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
                  id="loginPasswordInput"
                  required
                  type={show}
                  placeholder="Enter Password"
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
            <NormalLoginButton type={isLoading} />
          </form>
          <div className="space-y-2">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </>
  );
}
