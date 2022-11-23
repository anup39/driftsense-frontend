import React from "react";
import "./Checkbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Checkbox() {
  return (
    <>
      <div className="">
        <label htmlFor="check-box-1" className="relative cursor-pointer">
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
      {/* On Check bg-[#F2994A] this color on Class and on not check bg-[#929292] this Class */}
    </>
  );
}
