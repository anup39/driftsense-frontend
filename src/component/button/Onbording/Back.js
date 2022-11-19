import React from "react";

import LeftBlack from "../assets/leftblack.svg";

export default function Back() {
    return (
        <>
            <button className="flex ring-2 ring-orange-500 space-x-2 bg-white p-2 rounded-md  text-lg ">
                <img src={LeftBlack} alt="" className="h-3 mt-2"></img>
                <span>Back</span>
            </button>
        </>
    );
}
