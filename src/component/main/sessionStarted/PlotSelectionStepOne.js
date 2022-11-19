import React from "react";

import HeaderLogoDark from "../../header/logo/LogoBlackAlone";
import OnbordingBackground from "../../background/OnbordingBackground"
import StepOne from "../../title/stepsOnbording/stepOne/StepOne";
import StepOneText from "../../title/stepsOnbording/stepOne/StepOneText";
import GetStarted from "../../button/buttonActions/GetStarted";
import OnboardingFooter from "../../footer/afterLogin/FooterEmpty";


export default function OnboardingProcess() {
    return (
        <>
            <div className="space-y-5">
                <div className="space-y-7">
                    <HeaderLogoDark />
                    <OnbordingBackground />
                </div>
                <div className="grid justify-items-center space-y-4">
                    <div className="space-y-2 grid justify-items-center">
                        <StepOne />
                        <StepOneText />
                    </div>
                    <GetStarted />
                </div>
                <OnboardingFooter />
            </div>
        </>
    );
}
