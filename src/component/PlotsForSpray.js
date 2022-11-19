import React from "react";
import OnbordingHeader from "./include/header/OnbordingHeader";
import OnbordingSecondFooter from "./onbording/OnbordingSecondFooter";

import PrayForSprayBody from "./onbording/bodyOnbording/PrayForSprayBody";
import OnbordingFooterLoader from "./onbording/OnbordingLoaderFooter";
export default function OnboardingProcess() {
    return (
        <>
            <div className="space-y-3">
                <OnbordingHeader />
                <PrayForSprayBody />
                <div className="relative">
                    <OnbordingSecondFooter />
                    <div className="w-[480px] absolute -mt-[10px]">
                        <OnbordingFooterLoader />
                    </div>
                </div>
            </div>
        </>
    );
}
