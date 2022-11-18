import React from "react";
import Logo from "./header/Logo";
import DetailLogin from "./header/DetailLogin";
import BackGroundImage from "./background/Background";
import PrivacyTerms from "./header/PrivacyTerms"

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
