import React from "react";

import HeaderRegister from "../header/register/HeaderRegister";
import FirstHeading from "../title/register/registerheader/FirstHeading";
// import FirstHeading from "../title/register/registerheader/SecondHeading";
// import FirstHeading from "../title/register/registerheader/ThirdHeading";

import RegisterTitle from "../title/register/TitleRegister";

import FormFullName from "../form/fields/FullName";
import FormEmail from "../form/fields/Email";
import FormPassword from "../form/fields/Password";
import FormConsultant from "../form/fields/Consultant";
import FormNumber from "../form/fields/PhoneNumber";

import Checkbox from "../form/checkbox/Checkbox";
import RegisterText from "../title/register/RegisterText";

import GoogleRegister from "../button/register/RegisterGoogle";
import RegisterSubmit from "../button/register/RegisterSubmit";

import LoaderCircle from "../loader/LoaderCircle";
import ActionAfterRegistration from "../actions/ActionAfterRegistration";

export default function Register() {
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
            {/* <ActionAfterRegistration/> After the Sucessfull Registration*/}
          </div>

          <form className=" space-y-2 ">
            <FormFullName />
            <FormEmail />
            <FormPassword />
            <FormConsultant />
            <FormNumber />
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
          {/* <LoaderCircle /> */}
          </div>
        </div>
      </div>
    </>
  );
}
