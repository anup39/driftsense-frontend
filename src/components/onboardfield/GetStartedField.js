import React from "react";
import HeaderLogoDark from "./GetStart/LogoBlackAlone";
import OnbordingBackground from "./GetStart/OnbordingBackground";
import StepOne from "./GetStart/StepOne";
import StepOneText from "./GetStart/StepOneText";
import GetStarted from "./GetStart/GetStarted";
import OnboardingFooter from "./GetStart/FooterEmpty";

export default function OnboardingProcess() {
  return (
    <>
      <div className="bg-[#E9E9E9] max-h-screen h-full space-y-3">
        <div className="  h-[10vh] ">
          <HeaderLogoDark />
        </div>
        <div className="grid h-[80vh] content-center w-full justify-items-center">
          <div className="place-self-center space-y-2  ">
            <OnbordingBackground />
            <div className="grid justify-items-center space-y-2">
              <StepOne />
              <StepOneText />
              <GetStarted />
            </div>
          </div>
        </div>
        <div className="h-[10vh] grid content-end">
          <OnboardingFooter />
        </div>
      </div>
    </>
  );
}
