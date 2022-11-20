import React from "react";
import Down from "../images/down.svg";

export default function Consultant() {

  return (
    <>
      <div className="">
        <label
          className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
        >
          Consultant <span className="text-[#D44453]">*</span>
        </label>
        <br />
          <ul className="  outline-2 text-white w-full  z-[9999]  relative ">
            <div className="relative">
                <li className=" bg-[#384063] block py-1 fdc:p-2 tdc:py-1  fvdc:p-2 rounded-md">Consultant </li>
                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                  <img alt="" src={Down} className="h-4 text-gray-700 cursor-pointer hover:"></img>
                </div>
            </div>
            <li className=" rounded-md  absolute text-center w-full hidden">
              <li className="bg-[#1F2937] hover:bg-[#161C24] py-1 fdc:p-2 tdc:py-1  fvdc:p-2">Jon Doe</li>
              <li className="bg-[#1F2937] hover:bg-[#161C24] py-1 fdc:p-2 tdc:py-1  fvdc:p-2">Im the Agronomist / Pest Control Advisor</li>
              <li className="bg-[#1F2937] hover:bg-[#161C24] py-1 fdc:p-2 tdc:py-1  fvdc:p-2">Others</li>
            </li>
            
          </ul>
      </div>
    </>
  );
}
