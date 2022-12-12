import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function SavedSuccessfully() {
  return (
    <>
      <div className="absolute px-2 z-50 sdc:px-4 tdc:px-6 fdc:px-10   w-full   h-full pt-3   ">
        <div className=" h-full bg-authslate/80  rounded-md  ">
          <div className="h-full grid content-center">
            <div className="mx-auto min-w-[263px] min-h-[180px] py-3  bg-authslate border-orange border rounded-lg">
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
      </div>
    </>
  );
}
