import React from "react";
import HeaderLogin from "./LoginRegister/HeaderLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function StartOnBording() {
  const auth_token = useSelector((state) => state.auth.token);
  console.log(auth_token);
  const navigate = useNavigate();
  const handleStartOnboard = () => {
    navigate("/get-started-field");
  };
  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent  grid tdc:grid-cols-2  space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderLogin />

        <div className=" p-2 space-y-2 fdc:place-self-center  fdc:min-w-[320px]   tdc:min-w-[300px]   ftdc:min-w-[330px]  fvdc:min-w-[420px] ">
          <div
            className="
            space-y-2"
          >
            <h1 className="">
              <center className="text-xl fdc:text-3xl tdc:text-2xl ftdc:text-4xl font-semibold tdc:text-[#E4E6F2]">
                Account Registered <br></br> Successfully
              </center>
            </h1>

            {!auth_token ? (
              <p
                className={`text-xl fdc:text-1xl tdc:text-1xl ftdc:text-1xl  tdc:text-[red]`}
              >
                Please Check you mail and verify your account to start the
                onboarding Process
              </p>
            ) : null}

            <button
              onClick={handleStartOnboard}
              className={`bg-[${
                !auth_token ? "#929292" : "#219653"
              }] p-2 min-w-[420px] rounded-md`}
              disabled={!auth_token ? true : false}
            >
              <center>Start the onboarding</center>
            </button>
            {/* <button className="bg-[#219653] p-2 min-w-[420px] rounded-md ">
              <center>
                <a href="/get-started-field">Start the onboarding</a>
              </center>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
