import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function SavedSuccessfully() {
  return (
    <>
      <div className="bg-[#161C24]/40 w-full absolute z-50">
        <div className="flex justify-center items-center h-screen">
          <div className="mx-auto min-w-[263px] min-h-[180px] py-3  bg-slate-800 border-orange-400 border rounded-lg">
            <div>
              <div className="flex justify-center">
                <p className="block text-center text-xl text-white  font-bold">
                  Saved Sucessfully
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-16 relative ">
              <div className="absolute bg-white h-[90px] w-[90px] opacity-30 rounded-full"></div>
              <div className="absolute bg-white h-[70px] w-[70px] rounded-full"></div>
              <FontAwesomeIcon
                icon={faCheck}
                className="absolute text-green-700 text-2xl"
              ></FontAwesomeIcon>
            </div>
            {/* <a className="cursor-pointer text-orange-400 flex items-center justify-center">Next</a> */}
          </div>
        </div>
      </div>
    </>
  );
}
