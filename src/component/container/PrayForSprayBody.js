import React from "react";
import PlotsForSprayBackground from "../background/PlotsForSprayBackground";
import DrawPlotBoundaries from "../button/buttonActions/DrawPlotBoundaries";
import Search from "../form/search/Search";

export default function PrayForSprayBody() {
    return (
        <>
            <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3 ">
                <div className="relative">
                    <div className="absolute w-full grid tdc:grid-cols-2 tdc:px-10 tdc:py-4 tdc:space-y-0 space-y-5">
                        <div className="justify-self-start ">
                            <Search/>
                        </div>
                        <div className="tdc:justify-self-end">
                            <DrawPlotBoundaries/>
                        </div>
                    </div>
                </div>
                <PlotsForSprayBackground />
            </div>
        </>
    );
}
