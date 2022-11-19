import React from "react";
import PlotsForSprayBackground from "../background/PlotsForSprayBackground";
import DrawPlotBoundaries from "../button/buttonActions/DrawPlotBoundaries";
import Search from "../form/search/Search";

export default function PrayForSprayBody() {
    return (
        <>
            <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3 ">
                <div className="relative">
                    <div className="absolute w-full grid grid-cols-2 px-10 py-4">
                        <div className="justify-self-start ">
                            <Search/>
                        </div>
                        <div className="justify-self-end">
                            <DrawPlotBoundaries/>
                        </div>
                    </div>
                </div>
                <PlotsForSprayBackground />
            </div>
        </>
    );
}
