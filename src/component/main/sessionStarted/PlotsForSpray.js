import React from "react";

import OnbordingHeader from "../../header/headerOnbording/OnbordingHeader";
import OnbordingSecondFooter from "../../footer/afterLogin/FooterWithBackNext";

import PrayForSprayBody from "../../container/PrayForSprayBody";
import OnbordingFooterLoader from "../../loader/LoaderFooter";
export default function OnboardingProcess() {
    return (
        <>
            <div className="bg-[#E9E9E9] grid space-y-3">
                <div className="">
                    <OnbordingHeader />
                </div>
                <div className="grid h-">
                    <div className="space-y-2">
                        <PrayForSprayBody />
                    </div>
                </div>
                <div className="sticky bottom-0 w-full">
                    <OnbordingSecondFooter />
                    <OnbordingFooterLoader />
                </div>
            </div>
        </>
    );
}
