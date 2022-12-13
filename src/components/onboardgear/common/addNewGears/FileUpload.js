import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faFile,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import "./FileUpload.css";
export default function FileUpload() {
  return (
    <>
      <div className="space-y-5">
        <div className="text-4xl font-semibold text-white">Add New Sprayer</div>
        <div className="h-[600px] bg-[#3C4752] rounded-md relative space-y-3 grid content-center">
          <div className="flex justify-center w-full text-white text-2xl  py-5">
            Upload File
          </div>
          <div className="grid justify-items-center w-full">
            <div className=" border-dashed border-2 rounded-md border-[#F5F5F5] w-2/3 px-10 h-[190px] relative">
              <div className="grid place-items-center w-full h-full  tdc:-space-y-5 -space-y-10">
                <div className="relative cursor-pointer">
                  <div className="grid place-content-center w-full h-full absolute">
                    <FontAwesomeIcon
                      icon={faFolder}
                      className="text-[#F2994A]  text-3xl "
                    ></FontAwesomeIcon>
                  </div>
                  <input
                    type="file"
                    className="custom-file-input  w-[100px] h-[100px] rounded-full bg-[#F2994A] opacity-30 "
                  />
                </div>
                <div>
                  <h4 className="text-white text-xs grid place-content-center w-full">
                    <center>
                      Drop your file here to upload
                      <br /> or select from storage
                    </center>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-3 pb-1">
            <button className="bg-[#F2994A] py-3 px-16 text-white rounded-md">
              Browser
            </button>
          </div>
          <center>
            <hr className="w-2/3 flex justify-center" />
          </center>
          <div className="w-full py-3 pt-1">
            <div className="grid place-items-center">
              <div className="bg-white w-2/3 relative h-[75px]  rounded-lg">
                <div className="h-full grid grid-cols-8 content-center px-2">
                  <div className="w-[42px] h-[42px] rounded-full opacity-75 bg-[#F2994A]  relative">
                    <div className="grid place-content-center h-full w-full absolute">
                      <FontAwesomeIcon
                        icon={faFile}
                        className="bg-[#F2994A] text-lg"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 relative space-y-2">
                    <div className="grid grid-cols-2 text-xs">
                      <div className="justify-self-start">File_Name.jpg</div>
                      <div className="justify-self-end">50%</div>
                    </div>
                    <div className="w-full">
                      <div className="bg-[#F2994A] w-[50%] absolute h-1 rounded-md"></div>
                      <div className="bg-[#212B36] w-full h-1 rounded-md"></div>
                    </div>
                  </div>
                  <div className="w-[42px] h-[42px] rounded-full justify-self-end relative">
                    <div className="grid place-content-center h-full w-full absolute">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        className=" text-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
