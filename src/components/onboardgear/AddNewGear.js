import React from "react";
import OnbordingFooterLoader from "./common/loader/LoaderFooter";
import BlackRight from "./common/button/images/Iconrightblack.svg";
import LeftBlack from "./common/button/images/leftblack.svg";
// Gear

import GearHeading from "./common/header/headerOnbording/GearHeading";
import "./common/listofgears/MainList.css";

import FileUpload from "./common/addNewGears/FileUpload";
import GearDetail from "./common/addNewGears/GearDetail";
import AfterAddingFile from "./common/addNewGears/AfterAddingFile";
import { useSelector } from "react-redux";

export default function AddNewGear() {
  const create = useSelector((state) => state.createGear.create);

  return (
    <div className="bg-[#E9E9E9] grid space-y-3 relative">
      <div className="">
        <GearHeading />
      </div>

      <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3">
        <div className="bg-[#212B36] h-[75vh] overflow-y-auto   scrollbar-style">
          <div className="grid tdc:grid-cols-2 gap-8 p-5">
            {create ? <FileUpload /> : <AfterAddingFile />}
            <GearDetail />
          </div>
          <div className="w-full grid justify-items-end p-5 pt-0 pb-18">
            <button className="bg-[#1BB66E] w-full sdc:w-fit rounded-md px-7 py-3">
              Confirm
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-2  bg-[#212B36] flex space-x-4  justify-end">
          <button className=" flex ring-2 ring-orange-500 space-x-2 bg-white p-2 rounded-md  text-lg ">
            <img src={LeftBlack} alt="" className="h-3 mt-2"></img>
            <span>Back</span>
          </button>
          <button className="flex ring-2 ring-orange-500 space-x-2  bg-white p-2 rounded-md text-black text-lg ">
            <span>Next</span>
            <img src={BlackRight} alt="" className="h-3 mt-2"></img>
          </button>
        </div>
        <OnbordingFooterLoader />
      </div>
    </div>
  );
}
