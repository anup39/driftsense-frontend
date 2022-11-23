import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrop } from "@fortawesome/free-solid-svg-icons";

export default function CalculatedPlotAcreage() {
    return (
        <>
            <div class="flex flex-col justify-start items-start">
                <div class="flex flex-col gap-2 justify-start items-start w-full h-[6.81rem]">
                    <div class="flex flex-row gap-1 justify-start items-start w-full h-[0.94rem]">
                        <p class="block text-xs text-orange-400 ">Calculated Plot Acreage</p>
                    </div>
                    <div class="flex flex-row gap-3 justify-start items-center w-[14.38rem] px-4 py-[1.94rem] rounded-DEFAULT">
                        <FontAwesomeIcon icon={faCrop} className="text-orange-400 "></FontAwesomeIcon>
                        <p class="block w-full text-orange-400 ">1,032 Acres</p>
                    </div>
                </div>
            </div>
        </>
    );
}
