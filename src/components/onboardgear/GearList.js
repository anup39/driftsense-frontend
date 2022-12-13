import React, { useState } from "react";
import OnbordingFooterLoader from "./common/loader/LoaderFooter";
import BlackRight from "./common/button/images/Iconrightblack.svg";
import LeftBlack from "./common/button/images/leftblack.svg";
// Gear
import SearchGear from "./common/form/search/SearchGear";
import AddNewSpray from "./common/button/gear/AddNewSpray";
import GearHeading from "./common/header/headerOnbording/GearHeading";
import BlockTypes from "./common/listofgears/listtTypes/BlockTypes";
import LineList from "./common/listofgears/listtTypes/LineList";

import Block from "./assets/block.svg";
import List from "./assets/list.svg";
export default function GearList() {
  const [displayType, setDisplayType] = useState("List");

  const handleDisplayTypeChange = () => {
    if (displayType === "List") {
      setDisplayType("Block");
    } else {
      setDisplayType("List");
    }
  };
  return (
    <div className="bg-[#E9E9E9] grid  relative max-h-screen">
      <div className="h-[10vh]">
        <GearHeading />
      </div>
      <div className="grid h-[80vh]">
        <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3">
          <div className="bg-[#212B36] rounded-t-md w-full grid   px-3 fdc:px-16 py-3 tdc:grid-cols-3 tdc:px-10 tdc:py-4 tdc:space-y-0 space-y-5">
            <div className="justify-self-start z-10 ">
              <AddNewSpray />
            </div>
            <div className="tdc:justify-self-end col-span-2 z-10 flex space-x-3">
              <div className="flex gap-3 justify-self-end">
                <button onClick={handleDisplayTypeChange}>
                  <img src={Block} alt="" />
                </button>
                <button onClick={handleDisplayTypeChange}>
                  <img src={List} alt="" className="" />
                </button>
              </div>
              <SearchGear />
            </div>
          </div>
          <div className="w-full h-[85%]  rounded-b-md bg-[#212B36] ">
            <div className="px-5">
              <div className="h-[60vh] overflow-y-auto  mx-4 scrollbar-style">
                {displayType === "List" ? <LineList /> : <BlockTypes />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="   w-full h-[10vh] grid content-end">
        <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-2  bg-[#212B36] flex space-x-4  justify-end">
          <button className=" flex ring-2 ring-orange-500 space-x-2 bg-white p-2 rounded-md  text-lg ">
            <img src={LeftBlack} alt="" className="h-3 mt-2"></img>
            <span>Back</span>
          </button>
          {/* Changed Button to a for linking you can replce the tag a to button if needed */}
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
