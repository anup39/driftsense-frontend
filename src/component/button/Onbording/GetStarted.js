import React from "react";

import RightArrow from "../assets/Iconright.svg"

export default function GetStarted() {
    return (
        <>
            <button className="flex ring ring-orange-500 space-x-2 bg-[#212B36] p-2 rounded-md text-white text-lg ">
                <span>Get Started</span>
                <img src={RightArrow} alt="" className="h-3 mt-2"></img>
            </button>
        </>
    );
}
