import React from "react";
import HeaderRegister from "./include/HeaderRegister";
import FirstHeading from "./form/title/head_register/FirstHeading";
import RegisterTitle from "./form/title/RegisterTitle";
import RegisterWithGoogleHead from "./form/title/RegisterWithGoogleHead";

import FormFullName from "./form/FullName";
import FormEmail from "./form/Email";
import FormPassword from "./form/Password";
import FormConsultant from "./form/Consultant";
import FormNumber from "./form/PhoneNumber";

import Checkbox from "./form/checkbox/Checkbox";
import RegisterText from "./form/text/RegisterText";

import GoogleRegister from "./button/GoogleRegister";
import RegisterSubmit from "./button/RegisterSubmit";

import Loader from "./required/Loader";
import Toast from "./required/Toast";
export default function RegisterWithGoogle() {
    return (
        <>
            <div className="tdc:bg-[#161C24] bg-transparent grid tdc:grid-cols-2 space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderRegister />

        <div className="p-2 space-y-2 fdc:place-self-center fdc:min-w-[320px] tdc:min-w-[300px] ftdc:min-w-[330px] fvdc:min-w-[420px]">
          <div className="grid space-y-1  ftdc:space-y-3">
            {/* Register First Second and Third From - form/title/head_register/... */}
            <FirstHeading />
            {/* Register Title */}
            <RegisterTitle />
            <RegisterWithGoogleHead/>
            {/* <Toast></Toast> After the Sucessfull Registration*/}
          </div>

          <form className=" space-y-4 ">
            <FormNumber />
            <FormConsultant />
            <div className="flex  space-x-2 font-semibold">
              {/* Checkbox */}
              <Checkbox />
              {/* Terms and COndition */}
              <RegisterText />
            </div>
          </form>

          <div className="space-y-2 ">
            {/* Buttons */}
            <RegisterSubmit />
            <GoogleRegister />
          {/* <Loader /> */}
          </div>
        </div>
      </div>

            
        </>
    );
}
