import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TimerCounter() {
  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col gap-2 justify-start items-start w-full h-[6.81rem]">
          <div className="flex flex-row gap-1 justify-start items-start w-full h-[0.94rem]">
            <p className="block text-white ">Spray Duration</p>
          </div>
          <div className="flex p-2  gap-3 justify-start items-center   ">
            <div className="text-white">Hours</div>
            <div className="   ">
              <center><a href="/"><FontAwesomeIcon icon={faChevronUp} className="text-2xl text-orange-400 grid justify-items-end" /></a></center>
              <input type="text" className="outline-none rounded-lg text-4xl h-[50px] w-[50px] appearance-none" />
              <center><a href="/"><FontAwesomeIcon icon={faChevronDown} className="text-2xl text-orange-400" /></a></center>
            </div>
            <div className="text-white"> Minutes</div>
            <div>
              <center><a href="/"><FontAwesomeIcon icon={faChevronUp} className="text-2xl text-orange-400  grid justify-items-end" /></a></center>
              <input type="text" className="outline-none rounded-lg text-4xl h-[50px] w-[50px] appearance-none" />
              <center><a href="/"><FontAwesomeIcon icon={faChevronDown} className="text-2xl text-orange-400" /></a></center>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
