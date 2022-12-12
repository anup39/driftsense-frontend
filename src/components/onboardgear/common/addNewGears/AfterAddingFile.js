import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Tractor from "../../assets/tr.png";
import EditButton from "./editEvent/EditButton";
export default function AfterAddingFile() {
  return (
    <>
      <div className="space-y-5">
        <div className="text-4xl font-semibold text-white">Add New Sprayer</div>
        <div className="h-[500px] bg-[#3C4752] rounded-md relative space-y-3  ">
          <div className="flex justify-center w-full text-white text-2xl  py-5">
            Kubota B2420 4x4
          </div>
          <div className="flex">
            <div className="flex z-10 items-center justify-center h-3/4 p-3  absolute">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-2xl text-white"
              />
            </div>
            <div className="h-fit w-full grid place-content-center absolute">
              <div className="relative">
                <EditButton />
                {/* For Edit Button */}
                <img src={Tractor} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-end h-3/4 p-3 w-full absolute">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-2xl text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
