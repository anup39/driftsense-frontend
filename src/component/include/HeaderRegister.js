import React from "react";
import Logo from "./header/Logo";
import BackGroundImage from "./background/Background";
import PrivacyTerms from "./header/PrivacyTerms"
import DetailRegister from "./header/DetailRegister";
 

export default function Header() {
  return (
    <div className=" bg-[#161C24] ">
      <div className="grid absolute space-y-11 fdc:space-y-12 sdc:space-y-16 p-2 fdc:p-5 tdc:p-2  fvdc:p-5">
        {/* Logo */}
        <Logo />
        {/* Header Detail */}
        <DetailRegister />
      </div>

      {/* BG Image */}
      <BackGroundImage />

      {/* Privacy Section */}
      <PrivacyTerms />
    </div>
    
    
    
  );
}
