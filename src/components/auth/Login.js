import React, { useEffect, useState } from "react";
import HeaderLogin from "./LoginRegister/HeaderLogin";
import HeaderTitle from "./LoginRegister/TitleLogin";
import LoginForgotPass from "./LoginRegister/LoginForgotPass";
import GoogleLoginButton from "./LoginRegister/LoginGoogle";
import Hide from "./common/hide.svg";
import Show from "./common/hide.svg";
import {
  useLoginUserMutation,
  useGoogleLoginMutation,
} from "../../api/authApi";
import { useGetProfileViaTokenQuery } from "../../api/userInfoApi";
import NormalLoginButton from "./LoginRegister/NormalLoginButton";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import {
  addToken,
  addFullName,
  addFarmerId,
  setFieldOnboard,
} from "../../reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState("password");
  const [errorText, setErrorText] = useState("invisible");
  const [errorTextMessage, setErrorTextMessage] = useState(
    "Invalid email address or password."
  );
  const [verifiedText, setVerifiedText] = useState(props.verifiedText);

  const auth_token = useSelector((state) => state.auth.token);
  // console.log(auth_token, "auth token");

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
  const [
    loginUser,
    { data: data_normal_login, isLoading, error, isSuccess: isSuccess_ },
  ] = useLoginUserMutation();
  const [googleLogin, { data: data_google_login, isSuccess }] =
    useGoogleLoginMutation();

  const {
    data: data_profile,
    isSuccess: is_success_profile,
    isLoading: is_loading_profile,
  } = useGetProfileViaTokenQuery(auth_token);

  useEffect(() => {
    if (is_success_profile && data_profile) {
      console.log(data_profile, "data profile");
      dispatch(addFullName(data_profile[0].full_name));
      dispatch(addFarmerId(data_profile[0].id));
      dispatch(setFieldOnboard(data_profile[0].is_field_onboard_completed));
      localStorage.setItem("full_name", data_profile[0].full_name);
      localStorage.setItem("farmer_id", data_profile[0].id);
      localStorage.setItem(
        "field_onboard_complete",
        data_profile[0].is_field_onboard_completed
      );
      navigate("/registration-complete");
    }
  }, [
    is_loading_profile,
    is_success_profile,
    data_profile,
    navigate,
    dispatch,
  ]);

  useEffect(() => {
    if (isSuccess_ && data_normal_login.key) {
      if (data_normal_login.key === "NotVerified") {
        setErrorTextMessage("Email is not verified yet");
        setErrorText("visible");
      } else {
        localStorage.setItem("token", data_normal_login.key);
        dispatch(addToken(data_normal_login.key));
      }
    }
  }, [isSuccess_, data_normal_login, dispatch]);

  useEffect(() => {
    if (isSuccess && data_google_login.key) {
      localStorage.setItem("token", data_google_login.key);
      dispatch(addToken(data_google_login.key));
    }
  }, [isSuccess, data_google_login, dispatch, navigate]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.loginEmailInput.value;
    const password = event.target.loginPasswordInput.value;
    const login_data = { username: email, password: password };
    loginUser(login_data);
    setVerifiedText("invisible");
    event.target.reset();
  };

  const handleLoginGoogleSuccess = (result) => {
    const access_token = result.accessToken;
    const code = result.Ca;
    const id_token = result.tokenId;
    const login_data_google = { access_token, code, id_token };
    googleLogin(login_data_google);
  };

  const handleLoginGoogleFailure = (result) => {
    console.log(result);
  };

  useEffect(() => {
    if (error) {
      setErrorTextMessage("Invalid email address or password.");
      setErrorText("visible");
    } else {
      setErrorText("invisible");
    }
  }, [error]);

  return (
    <>
      <div className="tdc:bg-authslate bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />

        <div className=" p-2 space-y-3 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
          <div className="grid space-y-2  ftdc:space-y-3">
            <HeaderTitle />
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-3">
            <p
              className={`mt-2 ${errorText} peer-invalid:visible text-pink-600 text-sm`}
            >
              {errorTextMessage}
            </p>
            <p
              className={`mt-2 ${verifiedText} peer-invalid:visible text-${props.color}-600 text-sm`}
            >
              {props.textVerify}
            </p>
            <div className="">
              <label
                className="
                  text-[16px] tdc:text-[#E4E6F2]
                  "
              >
                Email <span className="text-pinkred">*</span>
              </label>
              <br />
              <input
                id="loginEmailInput"
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
            <div className="">
              <label
                className="
                text-[16px] tdc:text-[#E4E6F2]
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
                  min-h-[50px]"
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
            <NormalLoginButton type={isLoading} text="Login" />
          </form>
          <div className="space-y-2">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <GoogleLoginButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
              )}
              onSuccess={handleLoginGoogleSuccess}
              onFailure={handleLoginGoogleFailure}
              cookiePolicy={"single_host_origin"}
            ></GoogleLogin>
          </div>
        </div>
      </div>
    </>
  );
}
