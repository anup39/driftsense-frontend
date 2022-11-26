import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faHome } from "@fortawesome/free-solid-svg-icons";
export default function CropGeometry() {
  return (
    <>
      <div className="space-y-1">
        <label className="block text-xs text-orange-400">Crop Geometry</label>
        <ul className="text-white   z-[9999]  relative space-y-1">
          <div className="relative  w-full h-[48px]">
            <div className=" absolute inset-y-0 left-0 pl-3 flex items-center text-sm">
              <FontAwesomeIcon
                icon={faHome}
                className="-mt-2 text-black text-2xl cursor-pointer"
              ></FontAwesomeIcon>
            </div>
            <li className=" bg-white text-[#7C7C7C] block  pl-14 p-2 rounded-md">Crop Type </li>
            <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
              <FontAwesomeIcon
                icon={faAngleDown}
                className="-mt-2 text-black text-2xl cursor-pointer"
              ></FontAwesomeIcon>
            </div>
          </div>
        </ul>
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
