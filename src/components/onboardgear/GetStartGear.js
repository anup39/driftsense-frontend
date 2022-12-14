import React from "react";
import HeaderLogoDark from "./common/header/logo/LogoBlackAlone";
import GearBackground from "./common/background/GearBackground";
import StepTwoCongratulations from "./common/title/stepsOnbording/stepOne/StepTwoCongratulations";
import StepTwoText from "./common/title/stepsOnbording/stepOne/StepTwoText";
import GetStartedGear from "./common/button/buttonActions/GetStartedGear";
import OnboardingFooter from "./common/footer/afterLogin/FooterEmpty";

export default function OnboardingProcess() {
  return (
    <>
      <div className="bg-[#E9E9E9] max-h-screen h-full space-y-3">
        <div className="h-[10vh]">
          <HeaderLogoDark />
        </div>
        <div className="grid h-[80vh] content-center w-full justify-items-center">
          <div className="place-self-center space-y-2 ">
            <GearBackground />
            <div className="grid justify-items-center space-y-2">
              <StepTwoCongratulations />
              <StepTwoText />
              <GetStartedGear />
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
