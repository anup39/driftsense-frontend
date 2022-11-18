import React from "react";
import FirstHeading from "./head_register/FirstHeading";
 
export default function RegisterTitle() {
    return (
        <>
         
            
            <div
                className="
            justify-self-center
            font-bold tdc:text-[#E4E6F2]
            text-xl fdc:text-3xl tdc:text-2xl ftdc:text-4xl
            "
            >
                Register New Account
            </div>

            <div
                className="
            justify-self-center  tdc:text-[#E4E6F2]
            text-xs fdc:text-sm tdc:text-xs
            "
            >
                <span>Already have an Account ?</span>
                <span
                    className="
              text-[#F2994A]
              font-bold
              "
                >
                    <a href="/"> Sign In</a>
                </span>
            </div>
        </>
    );
}
