import React from "react";
import Logo from "./LogoLoginRegister";
import DetailLogin from "./DetailLogin";
import BackGroundImage from "./LoginRegisterBackground";
import PrivacyTerms from "../privacy/PrivacyTerms";

export default function HeaderLogin() {
  return (
    <div className="bg-authslate">
      <div className="grid absolute space-y-11 fdc:space-y-12 sdc:space-y-16 p-2 fdc:p-5 tdc:p-2  fvdc:px-[50px] fvdc:py-[34px]">
        <Logo />
        <DetailLogin />
      </div>
      <BackGroundImage />
      <PrivacyTerms />
    </div>
  );
}
