import React from "react";

import BlackRight from "../assets/Iconrightblack.svg"

export default function Next() {
    return (
        <>
            <button className="flex ring-2 ring-orange-500 space-x-2  bg-white p-2 rounded-md text-black text-lg ">
                <span>Next</span>
                <img src={BlackRight} alt="" className="h-3 mt-2"></img>
            </button>
        </>
    );
}
