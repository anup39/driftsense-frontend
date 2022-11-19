import React from "react";
import BG from "./assets/bg_obording.png";
import DrawPlotBoundaries from "./required/DrawPlotBoundaries";
import Search from "./required/Search";

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
                <img src={BG} alt="" className="w-full" />
            </div>
        </>
    );
}
