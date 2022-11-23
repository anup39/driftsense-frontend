import React from "react";

export default function AddPlotsName() {
    return (
        <>
            <div className="">
                <label className="block text-xs text-orange-400  font-medium">
                    Plot Name
                </label>
                <form> <input type="text" className="text-neutral-50 bg-transparent border-b border-orange-400 outline-none tdc:w-[200px] ftdc:w-[230px]" value="Plot - A" /></form>            </div>
        </>
    );
}
