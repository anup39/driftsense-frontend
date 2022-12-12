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
    <div className="bg-[#E9E9E9] grid space-y-3 relative">
      <div className="">
        <GearHeading />
      </div>
      <div className="grid">
        <div className="space-y-2">
          <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3">
            <div className="bg-[#212B36] rounded-t-md w-full grid   px-3 fdc:px-16 py-3 tdc:grid-cols-2 tdc:px-10 tdc:py-4 tdc:space-y-0 space-y-5">
              <div className="justify-self-start z-10 ">
                <AddNewSpray />
              </div>
              <div className="tdc:justify-self-end z-10">
                <button onClick={handleDisplayTypeChange}>{displayType}</button>
                <SearchGear />
              </div>
            </div>
            <div className="w-full h-[62vh]  rounded-b-md bg-[#212B36] ">
              <div className="px-5">
                <div className="h-[60vh] overflow-y-auto  mx-4 scrollbar-style">
                  {displayType === "List" ? <LineList /> : <BlockTypes />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
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
