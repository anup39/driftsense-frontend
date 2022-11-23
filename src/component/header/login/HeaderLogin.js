import React from "react";
import Logo from "../logo/LogoLoginRegister";
import DetailLogin from "./DetailLogin";
import BackGroundImage from "../../background/LoginRegisterBackground";
import PrivacyTerms from "../../footer/privacyTerms/PrivacyTerms";

export default function HeaderLogin() {
  return (
    <div className=" bg-[#161C24] ">
      <div className="grid absolute space-y-11 fdc:space-y-12 sdc:space-y-16 p-2 fdc:p-5 tdc:p-2  fvdc:p-5">
        {/* Logo */}
        <Logo />
        {/* Header Detail */}
        <DetailLogin />
      </div>

      {/* BG Image */}
      <BackGroundImage />

      {/* Privacy Section */}
      <PrivacyTerms />

    </div>
  );
}