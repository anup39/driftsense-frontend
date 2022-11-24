import React from "react";
import PopUpCancel from "../button/popUpModel/PopUpCancel";
import PopUpConfirm from "../button/popUpModel/PopUpConfirm";
import ConfirmModelHeader from "../header/popUpModel/ConfirmModelHeader";
export default function ModelConfirm() {
  return (
    <>
      <div className="w-full absolute   h-screen grid place-content-center ">
        <div className="bg-slate-800 p-4 max-w-[18.69rem] min-h-[144px] rounded-lg space-y-5  mx-auto ">
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
