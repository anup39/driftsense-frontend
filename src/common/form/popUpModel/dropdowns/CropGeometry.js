import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Trailing from "../../../../assets/Trailing.png";
import Geometry from "../../../../assets/Geometry.svg";
export default function CropGeometry() {
  return (
    <>
      <div className="space-y-1">
        <label className="block text-xs text-orange-400">Crop Geometry</label>
        <div className="text-white   z-[9999]  relative space-y-1">
          <div className="relative  w-full h-[48px] -z-10">
            <div className=" absolute inset-y-0 left-0 pl-3 flex items-center text-sm">
              <img
                src={Geometry}
                className="-mt-2 text-black text-2xl cursor-pointer"
              ></img>
              
            </div>
            <input type="text" className=" bg-white text-[#7C7C7C] block  pl-14 p-2 rounded-t-md w-full outline-none pointer-events-none  border-black border-t border-l border-r" placeholder="Crop Geometry" />
            <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
              <FontAwesomeIcon
                icon={faAngleDown}
                className="-mt-2 text-black text-2xl cursor-pointer"
              ></FontAwesomeIcon>
            </div>
          <center><hr className="mx-3 -mt-[1px]"/></center>
            <ul className="  rounded-b-md bg-white absolute text-center  w-full  border-black border-b border-l border-r max-h-[161px] overflow-y-auto">
              <li className=" text-black space-x-5 py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex">
                   <img src={Trailing} alt="" className="pl-1 text-2xl h-6" />
                    <h1 className="text-gray-400">Rectangle</h1>
               </li>
               <li className=" text-black space-x-5 py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex">
                   <img src={Trailing} alt="" className="pl-1 text-2xl h-6" />
                    <h1 className="text-gray-400">Rectangle</h1>
               </li>
               <li className=" text-black space-x-5 py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex">
                   <img src={Trailing} alt="" className="pl-1 text-2xl h-6" />
                    <h1 className="text-gray-400">Rectangle</h1>
               </li>
               <li className=" text-black space-x-5 py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex">
                   <img src={Trailing} alt="" className="pl-1 text-2xl h-6" />
                    <h1 className="text-gray-400">Rectangle</h1>
               </li>
               <li className=" text-black space-x-5 py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex">
                   <img src={Trailing} alt="" className="pl-1 text-2xl h-6" />
                    <h1 className="text-gray-400">Rectangle</h1>
               </li>
               <li className=" text-black space-x-5 py-1 fdc:p-2 tdc:py-1  fvdc:p-2 flex">
                   <img src={Trailing} alt="" className="pl-1 text-2xl h-6" />
                    <h1 className="text-gray-400">Rectangle</h1>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

/* <li className=" rounded-md  absolute text-center  hidden">
<li className="bg-white py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
  Jon Doe
</li>
<li className="bg-white py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
  Im the Agronomist / Pest Control Advisor
</li>
<li className="bg-white py-1 fdc:p-2 tdc:py-1  fvdc:p-2">Others</li>
</li> */
