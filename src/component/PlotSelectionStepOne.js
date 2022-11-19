import React from "react";

import HeaderLogoDark from "./include/header/onbording/OnbordingLogo";
import OnbordingBackground from "./include/background/OnbordingBackground"
import StepOne from "./onbording/onbordingText/step/StepOne";
import StepOneText from "./onbording/onbordingText/StepOneText";
import GetStarted from "./button/Onbording/GetStarted";
import OnboardingFooter from "./onbording/OnbordingFooter";


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
