import React from "react";

import OnbordingHeader from "../../header/headerOnbording/OnbordingHeader";
import OnbordingSecondFooter from "../../footer/afterLogin/FooterWithBackNext";

import PrayForSprayBody from "../../container/PrayForSprayBody";
import OnbordingFooterLoader from "../../loader/LoaderFooter";
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
