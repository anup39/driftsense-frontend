import React from "react";
import LogoBlackForTabs from "./LogoBlackForTabs";
import PlotSelectionActive from "./headertabs/plotselectiontab/PlotSelectionActive";
// import GearActive from "./headertabs/geartabs/GearActive";
import PaymentInactive from "./headertabs/paymenttabs/PaymentInactive";
// import PlotSelectionInactive from "./headertabs/plotselectiontab/PlotSelectionInactive";
import GearInactive from "./headertabs/geartabs/GearInactive";
// import PaymentActive from "./headertabs/paymenttabs/PaymentActive";

import Profile from "./headertabs/Profile";

export default function PrayForSprayHeader() {
  return (
    <>
      <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3 grid tdc:grid-cols-5 tdc:text-xs ftdc:text-sm fvdc:text-lg">
        <LogoBlackForTabs />
        <PlotSelectionActive />
        <GearInactive />
        <PaymentInactive />
        <Profile />
      </div>
    </>
  );
}

/* <PlotSelectionInactive /> */

/* <GearInactive /> */

/* <PaymentActive /> */
