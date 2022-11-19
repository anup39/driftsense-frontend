import React from "react";

import Back from "../../button/buttonActions/Back";
import Next from "../../button/buttonActions/Next";
 

export default function FooterWithBackNext() {
    return (
        <>
                <div className="p-4  bg-[#212B36] flex space-x-4 justify-end">
                    <Back/>
                    <Next />
                </div>

        </>
    );
}
