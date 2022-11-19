import React from "react";

import Back from "../button/Onbording/Back";
import Next from "../button/Onbording/Next";
 

export default function OnboardingSecondFooter() {
    return (
        <>
                <div className="p-4  bg-[#212B36] flex space-x-4 justify-end">
                    <Back/>
                    <Next />
                </div>

        </>
    );
}
