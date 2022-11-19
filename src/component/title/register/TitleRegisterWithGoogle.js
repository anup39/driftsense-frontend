import React from "react";
export default function RegisterWithGoogleHead() {
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
                    <a href="/login"> Sign In</a>
                </span>

            </div>
            <div className="justify-self-center text-center tdc:text-[#E4E6F2] text-xs fdc:text-sm tdc:text-md">
                <span className="">As you registered yourself from a social account kindly<br />
                    add your phone number and select consultant to<br />
                    complete registration process</span>

            </div>

        </>
    );
}
