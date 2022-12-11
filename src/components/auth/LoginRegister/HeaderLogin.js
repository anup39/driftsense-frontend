import React from "react";
import Logo from "./LogoLoginRegister";
import DetailLogin from "./DetailLogin";
import BackGroundImage from "./LoginRegisterBackground";
import PrivacyTerms from "../privacy/PrivacyTerms";

export default function HeaderLogin() {
  return (
    <div className=" bg-[#161C24] tdc:h-screen">
      <div className="grid absolute space-y-11 fdc:space-y-12 sdc:space-y-16 p-2 fdc:p-5 tdc:p-2  fvdc:p-5">
        <Logo />
        <DetailLogin />
      </div>
      <BackGroundImage />
      <PrivacyTerms />
    </div>
  );
}
