import React from "react";
import PopUpCancel from "../button/popUpModel/PopUpCancel";
import PopUpConfirm from "../button/popUpModel/PopUpConfirm";
import ConfirmModelHeader from "../header/popUpModel/ConfirmModelHeader";
export default function ModelConfirm() {
    return (
        <>
            <div className="max-w-[18.69rem] mx-auto   grid h-screen place-content-center">
                <div className="bg-slate-800 p-4  rounded-lg space-y-5 ">
                    <ConfirmModelHeader />
                <div className="flex flex-row gap-4 justify-center items-center">
                    <PopUpCancel />
                    <PopUpConfirm />
                </div>
                </div>
            </div>
        </>
    );
}
