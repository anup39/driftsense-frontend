import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Soy from "../../../../assets/Soy.png";
import Crop from "../../../../assets/crop.svg";

export default function CropType() {
  return (
    <>
      {/* tdc:w-[200px] fvdc:w-[230px] */}
      <div className="space-y-1">
        <label className="block text-xs text-orange-400">Crop Type</label>
        <ul className="text-white   z-[9999]  relative space-y-1">
          <div className="relative w-full h-[48px]">
            <div className=" absolute inset-y-0 left-0 pl-3 flex items-center text-sm space-x-3">
              <img
                src={Crop}
                className="-mt-2 text-black text-2xl cursor-pointer"
              ></img>
              <img
                src={Soy}
                className="-mt-2 h-6 rounded-full text-black text-2xl cursor-pointer"
              ></img>
            </div>
            <input
              className="w-full outline-none bg-white text-[#7C7C7C] block  pl-20 p-2 rounded-t-md  border-black border-t border-l border-r"
              placeholder="Crop Type"
            />
            <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
              <FontAwesomeIcon
                icon={faAngleDown}
                className="-mt-2 text-black text-2xl cursor-pointer"
              ></FontAwesomeIcon>
            </div>

            <center>
              <hr className="mx-3 -mt-[1px]" />
            </center>
            <div className="z-50  ">
              <ul className="px-2 grid  grid-cols-2 gap-2 rounded-b-md bg-white absolute text-center  w-full  border-black border-b border-l border-r max-h-[161px] overflow-y-scroll">
                <li className=" text-black    py-1 fdc:p-2 tdc:py-1  fvdc:p-2 ">
                  <div className="flex space-x-2   ">
                    <img src={Soy} alt="" className="h-6 w-auto rounded-full" />
                    <h1 className="text-gray-400">Rectangle</h1>
                  </div>
                </li>
                <li className=" text-black    py-1 fdc:p-2 tdc:py-1  fvdc:p-2 ">
                  <div className="flex space-x-2     ">
                    <img src={Soy} alt="" className="h-6 w-auto rounded-full" />
                    <h1 className="text-gray-400">Rectangle</h1>
                  </div>
                </li>
                <li className=" text-black   py-1 fdc:p-2 tdc:py-1  fvdc:p-2  ">
                  <div className="flex space-x-2     ">
                    <img src={Soy} alt="" className="h-6 w-auto rounded-full" />
                    <h1 className="text-gray-400">Rectangle</h1>
                  </div>
                </li>
                <li className=" text-black    py-1 fdc:p-2 tdc:py-1  fvdc:p-2 ">
                  <div className="flex space-x-2     ">
                    <img src={Soy} alt="" className="h-6 w-auto rounded-full" />
                    <h1 className="text-gray-400">Rectangle</h1>
                  </div>
                </li>
                
               
                 
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

/* <li className=" rounded-md  absolute text-center  hidden">
  <li className="bg-white py-1 fdc:p-2 tdc:py-1  fvdc:p-2">Jon Doe</li>
  <li className="bg-white py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
    Im the Agronomist / Pest Control Advisor
  </li>
  <li className="bg-white py-1 fdc:p-2 tdc:py-1  fvdc:p-2">Others</li>
</li>; */
