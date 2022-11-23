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
