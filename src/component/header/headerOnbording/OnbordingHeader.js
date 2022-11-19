import React from "react";

import LogoBlackForTabs from "../logo/LogoBlackForTabs"
 // Active and InActive
import PlotSelectionActive from "./headertabs/plotselectiontab/PlotSelectionActive";
import PlotSelectionInactive from "./headertabs/plotselectiontab/PlotSelectionInactive";

// Active and InActive
import GearActive from "./headertabs/geartabs/GearActive";
import GearInactive from "./headertabs/geartabs/GearInactive";

// Active and InActive
import PaymentActive from "./headertabs/paymenttabs/PaymentActive";
import PaymentInactive from "./headertabs/paymenttabs/PaymentInactive";

import Profile from "./headertabs/Profile";

export default function PrayForSprayHeader() {
    return (
        <>
            <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3 grid tdc:grid-cols-5 tdc:text-xs ftdc:text-sm fvdc:text-lg">
                <LogoBlackForTabs />
                
                <PlotSelectionActive />
                {/* <PlotSelectionInactive /> */}
                {/* <GearActive /> */}
                <GearInactive />

                {/* <PaymentActive /> */}
                <PaymentInactive />
                
                <Profile />
            </div>
        </>
    );
}
