import React, { useState } from "react";
import Down from "../../common/form/images/down.svg";
import Nep from "../../common/form/images/Nepal.png";
import HeaderRegister from "../../common/header/register/HeaderRegister";
import FirstHeading from "../../common/title/register/registerheader/FirstHeading";
import RegisterTitle from "../../common/title/register/TitleRegister";
import GoogleRegister from "../../common/button/register/RegisterGoogle";
import LoaderCircle from "../../common/loader/LoaderCircle";
import "../../common/form/checkbox/Checkbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Hide from "../../common/form/images/hide.svg";
import Show from "../../common/form/images/show.svg";
import ConsultantDropDown from "./common/ConsultantDropDown";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import "./register.css";

export default function Register() {
  const [show, setShow] = useState("password");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [termsCondition, setTermsCondition] = useState(false);

  const handleShowPassword = (event) => {
    const value = event.target.title;
    if (value === "1") {
      event.target.src = Show;
      event.target.title = "0";
      setShow("text");
    } else {
      event.target.src = Hide;
      event.target.title = "1";
      setShow("password");
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log("Submit buttoned is Clicked");
  };

  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent grid tdc:grid-cols-2 space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderRegister />
        <div className="p-2 space-y-2 fdc:place-self-center fdc:min-w-[320px] tdc:min-w-[300px] ftdc:min-w-[330px] fvdc:min-w-[420px]">
          <div className="grid space-y-1  ftdc:space-y-3">
            <FirstHeading />
            <RegisterTitle />
          </div>
          <form onSubmit={handleRegisterSubmit} className=" space-y-2 ">
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
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
                type="text"
                placeholder="Enter Your Name Here"
                className="
                  outline-none
                  border-2
                  border-[#F2994A]
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                type="text"
                placeholder="Enter Email Address"
                className="    
                  outline-none
                  border-2
                  border-[#F2994A]
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  type={show}
                  placeholder="Enter Password"
                  className="
                  outline-none
                  border-2
                  border-[#F2994A]
                bg-[#384063] 
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
                    title="1"
                    onClick={handleShowPassword}
                    alt=""
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
              {/* <br /> */}
              <div className="  outline-2 text-white w-full     ">
                <div className="relative ">
                  <div className="relative">
                    <input className=" bg-[#384063] block  w-full py-1 fdc:p-2 tdc:py-1  fvdc:p-2 rounded-md outline-none
                  border-2
                  border-[#F2994A]" />
                    <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                      <img
                        alt=""
                        src={Down}
                        className="h-4 text-gray-700 cursor-pointer hover:"
                      ></img>
                    </div>
                  </div>
                  <ul className="z-50  mt-[0.5px] hidden absolute text-center w-full   border-2 border-orange-400 rounded-md">
                    <li className="bg-[#1F2937] hover:bg-[#161C24] cursor-pointer  py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
                      Jon Doe
                    </li>
                    <li className="bg-[#1F2937] hover:bg-[#161C24]  cursor-pointer py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
                      Im the Agronomist / Pest Control Advisor
                    </li>
                    <li className="bg-[#1F2937] hover:bg-[#161C24] cursor-pointer py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
                      Others
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className=" ">
              <label className="text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2] grid grid-cols-2">
                <span>
                  {" "}
                  Phone <span className="text-[#D44453]"></span>{" "}
                </span>
                <span className="justify-self-end">(Optional)</span>
              </label>

                 <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
             </div>

            <div className="flex  space-x-2 font-semibold">
              <div className="">
                <label
                  htmlFor="check-box-1"
                  className="relative cursor-pointer"
                >
                  <input
                    checked={termsCondition}
                    onChange={(event) =>
                      setTermsCondition(event.target.checked)
                    }
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
                Register
              </button>
            </div>
          </form>
          <div className="space-y-2 ">
            <GoogleRegister />
          </div>
        </div>
      </div>
    </>
  );
}
