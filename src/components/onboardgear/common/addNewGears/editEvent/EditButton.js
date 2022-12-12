import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
  } from "@fortawesome/free-solid-svg-icons";
export default function EditButton(){
    return(
        <>
             <div className="z-10 absolute h-full grid content-center justify-items-center w-full mt-9 ">
                  <button className="relative">
                    <div className="z-20  absolute h-full w-full grid place-content-center">
                      <div className=" bg-white h-[66px] w-[66px] rounded-full relative">
                        <div className="absolute h-full w-full grid place-content-center">
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="text-[#F2994A] text-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white opacity-50 h-[90px] w-[90px] rounded-full"></div>
                  </button>
                </div>
        </>
    );
}