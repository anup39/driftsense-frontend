import React from "react";
import LoaderCirclePNG from "./images/loader.png";
export default function WaitingForApproval() {
    return (
        <>
            <div className="tdc:bg-[#161C24]">
                <div className="grid place-content-center h-screen">
                    <div class="mx-auto min-w-[263px] min-h-[180px] py-3  bg-slate-800 border-orange-400 border rounded-lg">
                        <div>
                            <div class="flex justify-center">
                                <p class="block text-center text-xl text-white  font-bold">Waiting for Approval</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <img class="block" src={LoaderCirclePNG} className="animate-spin"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
