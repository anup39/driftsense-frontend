import React from "react";

import Back from "../../button/buttonActions/Back";
import Next from "../../button/buttonActions/Next";
 

export default function FooterWithBackNext() {
    return (
        <>
            
                <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-2  bg-[#212B36] flex space-x-4 justify-end">
                    <Back/>
                    <Next />
                </div>
      
        </>
    );
}
