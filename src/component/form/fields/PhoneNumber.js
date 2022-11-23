import React from "react";
import Down from "../images/down.svg";
import Nep from "../images/Nepal.png";

export default function PhoneNumber() {
  return (
    <>
      <div className="">
        <label className="text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2] grid grid-cols-2">
          <span> Phone <span className="text-[#D44453]">*</span> </span>
          <span className="justify-self-end">(Optional)</span>
        </label>
       
        <div className="flex  focus:outline-none focus:border-2 focus:border-[#F2994A] border-2  border-transparent rounded-md">
          <ul className="basis-2/5 justify- outline-2 text-white w-full text-xs ftdc:text-lg  z-[9999] rounded-r-md relative ">
            <div className="relative">
              <li className=" bg-[#384063]  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 rounded-l-md flex space-x-2">
                <img alt="" src={Nep} className="sdc:h-6 h-6 text-gray-700 cursor-pointer rounded-full"></img>
                <span className="mt-1  mr-1 ftdc:mt-0">+ 977 </span>
              </li>

              <div className=" absolute inset-y-0 right-0  tdc:pr-0 ftdc:pr-3 flex items-center text-sm justi">
                <img alt="" src={Down} className="h-4   text-gray-700 cursor-pointer hover:"></img>
              </div>
            </div>
            {/* DropDown */}
            <li className="basis-3/5 rounded-md  absolute text-center w-full  max-h-[150px] overflow-y-scroll hidden">
              <li className="bg-[#1F2937] hover:bg-[#161C24] py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex space-x-2">
                <img alt="" src={Nep} className="h-6 text-gray-700 cursor-pointer rounded-full"></img>
                <span>+ 977 </span>
              </li>
              <li className="bg-[#1F2937] hover:bg-[#161C24] py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex space-x-2">
                <img alt="" src={Nep} className="h-6 text-gray-700 cursor-pointer rounded-full"></img>
                <span>+ 977 </span>
              </li>
              <li className="bg-[#1F2937] hover:bg-[#161C24] py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex space-x-2">
                <img alt="" src={Nep} className="h-6 text-gray-700 cursor-pointer rounded-full"></img>
                <span>+ 977 </span>
              </li>
            </li>

          </ul>
          <input
            type="text"
            className="
                  rounded-r-md
                  outline-none
                  bg-[#384063]
                  text-white
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2

                  "
          />
        </div>
      </div>
    </>
  );
}
