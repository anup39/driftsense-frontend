import React from "react";
import Logo from "./LogoLoginRegister";
import DetailRegister from "./DetailRegister";
import PrivacyTerms from "../privacy/PrivacyTerms";
import BackGroundImageRegister from "./RegisterBackground ";

export default function Header() {
  return (
    <div className=" bg-[#161C24] h-full">
      <div className="grid absolute space-y-11 fdc:space-y-12 sdc:space-y-16 p-2 fdc:p-5 tdc:p-2   fvdc:px-[50px] fvdc:py-[34px]">
        <Logo />
        <DetailRegister />
      </div>
      <BackGroundImageRegister />
      <PrivacyTerms />
    </div>
  );
}
