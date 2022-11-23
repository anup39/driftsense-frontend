import React from "react";
import RegisterWithGoogleHead from "../../common/title/register/TitleRegisterWithGoogle";
import HeaderRegister from "../../common/header/register/HeaderRegister";
import FirstHeading from "../../common/title/register/registerheader/FirstHeading";
import Down from "../../common/form/images/down.svg";
import Nep from "../../common/form/images/Nepal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function RegisterWithGoogle() {
  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent grid tdc:grid-cols-2 space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderRegister />
        <div className="p-2 space-y-2 fdc:place-self-center fdc:min-w-[320px] tdc:min-w-[300px] ftdc:min-w-[330px] fvdc:min-w-[420px]">
          <div className="grid space-y-1  ftdc:space-y-3">
            <FirstHeading />
            <RegisterWithGoogleHead />
          </div>
          <form className=" space-y-4 ">
            <div className="">
              <label className="text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2] grid grid-cols-2">
                <span>
                  {" "}
                  Phone <span className="text-[#D44453]">*</span>{" "}
                </span>
                <span className="justify-self-end">(Optional)</span>
              </label>
              <div className="flex  focus:outline-none focus:border-2 focus:border-[#F2994A] border-2  border-transparent rounded-md">
                <ul className="basis-2/5 justify- outline-2 text-white w-full text-xs ftdc:text-lg  z-[9999] rounded-r-md relative ">
                  <div className="relative">
                    <li className=" bg-[#384063]  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 rounded-l-md flex space-x-2">
                      <img
                        alt=""
                        src={Nep}
                        className="sdc:h-6 h-6 text-gray-700 cursor-pointer rounded-full"
                      ></img>
                      <span className="mt-1  mr-1 ftdc:mt-0">+ 977 </span>
                    </li>

                    <div className=" absolute inset-y-0 right-0  tdc:pr-0 ftdc:pr-3 flex items-center text-sm justi">
                      <img
                        alt=""
                        src={Down}
                        className="h-4   text-gray-700 cursor-pointer hover:"
                      ></img>
                    </div>
                  </div>
                </ul>
                <input
                  type="text"
                  className="
                  rounded-r-md
                  outline-none
                  bg-[#384063]
                  text-white
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2
                  "
                />
              </div>
            </div>
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
                  <li className=" bg-[#384063] block  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 rounded-md">
                    Consultant{" "}
                  </li>
                  <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                    <img
                      alt=""
                      src={Down}
                      className="h-4 text-gray-700 cursor-pointer hover:"
                    ></img>
                  </div>
                </div>
              </ul>
            </div>
            <div className="flex  space-x-2 font-semibold">
              <div className="">
                <label
                  htmlFor="check-box-1"
                  className="relative cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="check-box-1"
                    className=" appearance-none	h-6 w-6 border border-[#F2994A] rounded-lg"
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 absolute  text-xl check-1 transition text-[#F2994A] -ml-6 text-opacity-0"
                  />
                </label>
              </div>
              <span className="text-[#B4B5BF]">I accept</span>
              <a href="/" className="text-[#F2994A] font-bold">
                terms of service
              </a>
            </div>
            <div className="space-y-2 ">
              <button className="w-full p-1  fdc:p-2 tdc:p-1 fvdc:p-2 bg-change bg-[#929292] text-white rounded-md text-center">
                <a href="/registration-complete">Register</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
