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
      <div className="bg-[#E9E9E9] h-screen  space-y-3">
        <div className="">
          <HeaderLogoDark />
        </div>
        <div className="grid">
          <div className="place-self-center space-y-2 h-3/4">
            <OnbordingBackground />
            <div className="grid justify-items-center space-y-2">
              <StepOne />
              <StepOneText />
              <GetStarted />
            </div>
          </div>
        </div>
        <OnboardingFooter />
      </div>
    </>
  );
}
