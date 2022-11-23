import React from "react";
import LoaderCirclePNG from "./images/loader.png";
export default function SavedSuccessfully() {
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
                            <div className="">
                                
                            </div>
                        </div>
                        <a className="cursor-pointer text-orange-400 flex items-center justify-center">Next</a>
                    </div>
                </div>
            </div>
        </>
    );
}
