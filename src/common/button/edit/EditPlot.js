import React from "react";
import EditIcon from "../../../assets/edit.svg";
export default function EditPlot() {
  return (
    <>
      <div
        className="flex  cursor-pointer   justify-center items-center overflow-hidden h-[72px] w-[72px] bg-white rounded-full"
        href="/"
      >
        <img src={EditIcon} alt="" />
        {/* #1BB66E onactive*/}
      </div>
    </>
  );
}
