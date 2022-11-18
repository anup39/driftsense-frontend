import React, { useState } from "react";
import Show from "../assets/show.svg";
import Hide from "../assets/hide.svg";
     

export default function FormNewPassword() {

    
    const [show, setShow] = useState("password");
  
    const handleShowPassword = (event) => {
      const value = event.target.title;
      if (value === "1") {
        event.target.src = Show;
        event.target.title = "0";
        setShow("text");
      } else {
        console.log("opened");
        event.target.src = Hide;
        event.target.title = "1";
        setShow("password");
      }
    };
    
    return (
        <>
              <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                New Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <div className="relative">
                <input
                  type={show}
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
        </>
    );
}
