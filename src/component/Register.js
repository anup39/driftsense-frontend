import React from "react";
import "../App.css";
import Loader from "./include/Loader";
import HeaderRegister from "./include/HeaderRegister";
import Show from "../assets/show.svg";
import IconDown from "../assets/IconDown.svg";
import CircleInsideCircle from "../assets/circleinsidecircle.svg";
import Line from "../assets/line.svg";
import Circle from "../assets/circle.svg";
import Google from "../assets/google.png";
import Nep from "../assets/nep.png";
export default function Register() {
  return (
    <>
      <div
        className="
        tdc:bg-[#161C24]
        bg-transparent
        grid  
        tdc:grid-cols-2      
        space-y-2  fdc:space-y-5 tdc:space-y-2
      "
      >
        <HeaderRegister />

        <div
          className="
        p-2
        space-y-2
        fdc:place-self-center
        fdc:min-w-[320px]
        tdc:min-w-[300px]
        ftdc:min-w-[330px]
        fvdc:min-w-[420px]
        "
        >
          <div
            className="
          grid
          space-y-1  ftdc:space-y-3
          "
          >
            <div className="tdc:flex hidden justify-center">
              <img src={CircleInsideCircle}></img>
              <img src={Line} className="tdc:w-1/2 ftdc:w-full"></img>
              <img src={Circle}></img>
            </div>
            <div
              className="
            justify-self-center
            font-bold tdc:text-[#E4E6F2]
            text-xl fdc:text-3xl tdc:text-2xl ftdc:text-4xl
            "
            >
              Register New Account
            </div>

            <div
              className="
            justify-self-center  tdc:text-[#E4E6F2]
            text-xs fdc:text-sm tdc:text-xs
            "
            >
              <span>Already have an Account ?</span>
              <span
                className="
              text-[#F2994A] 
              font-bold
              "
              >
                <a href="#"> Sign In</a>
              </span>
            </div>
          </div>

          <form
            className="
          space-y-2
  
          "
          >
            <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                Fullname <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="
                  outline-2
                  outline-[#F2994A]
                  bg-[#384063] t
                  text-white 
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 
                  rounded-md
                "
              />
            </div>
            <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                Email <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="
                  outline-2
                  outline-[#F2994A]
                  bg-[#384063] t
                  text-white 
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 
                  rounded-md
                "
              />
            </div>
            <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <div className="relative">
                <input
                  type="text"
                  className="
                outline-2
                outline-[#F2994A]
                bg-[#384063] t
                text-white 
                w-full
                py-1 fdc:p-2  tdc:py-1 fvdc:p-2
                rounded-md
                block"
                ></input>

                <div
                  className="
                absolute 
                inset-y-0 
                right-0 
                pr-3 
                flex 
                items-center 
                text-sm 
                leading-5
                "
                >
                  <img
                    src={Show}
                    className="
                    h-4
                   text-gray-700 
                   cursor-pointer"
                  ></img>
                </div>
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
              <select
                name="car"
                id="car"
                className="
                  outline-2 
                  outline-[#F2994A]
                  bg-[#384063] 
                  text-white 
                  w-full
                   mr-10
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 
                  rounded-md  "
              >
                <option value="Consultant 1">Consultant 1</option>
                <option value="Consultant 2">Consultant 2</option>
                <option value="Consultant 3">Consultant 3</option>
                <option value="Consultant 4">Consultant 4</option>
              </select>
            </div>
            <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              grid grid-cols-2
              "
              >
                <div>
                  Phone <span className="text-[#D44453]">*</span>
                </div>
                <span className="justify-self-end text-xs">(Optional)</span>
              </label>
              <div className="flex">
                <select
                  name="cars"
                  id="cars"
                  className="
                  outline-2 rounded-l-md
                  outline-[#F2994A]
                  bg-[#384063] 
                  text-white 
                   py-1 fdc:p-2 tdc:py-1  fvdc:p-2
                   "
                >
                  <option value="Nepal">+ 977</option>
                  <option value="India">+ 91 </option>
                </select>
                <input
                  type="text"
                  className="
                  outline-2 rounded-r-md
                  outline-[#F2994A]
                  bg-[#384063] 
                  text-white 
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 
                   
                  "
                />
              </div>
            </div>
            <div
              className="
             flex
             space-x-2 
           
            font-semibold
             
            "
            >
              <input
                id="orange-checkbox"
                type="checkbox"
                value=""
                class="w-6 accent-[#F2994A] "
              ></input>
              <span className="text-[#B4B5BF]">I accept</span>
              <a href="" className="text-[#F2994A] font-bold">
                terms of service
              </a>
              {/* On Check bg-[#F2994A] this color on Class and on not check bg-[#929292] this Class */}
            </div>
          </form>

          <div
            className="
          space-y-2
          "
          >
            <button
              className="
            w-full 
            p-1  fdc:p-2 tdc:p-1 fvdc:p-2
            bg-[#929292]
             
            text-white 
            rounded-md 
            text-center
            "
            >
              Register
            </button>
            <button
              className="
            w-full  
            p-1 fdc:p-2 tdc:p-1 fvdc:p-2
            flex 
            space-x-2  
            bg-white 
            text-[#F2994A] 
            border 
            tdc:border-none
            border-[#F2994A] 
            sm:border-none 
            rounded-md 
            justify-center
            "
            >
              <img src={Google}></img> <span>Signup with Google</span>
            </button>
          </div>
          {/* <Loader /> */}
        </div>
      </div>
    </>
  );
}
