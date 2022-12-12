import React from "react";
import ProfileImg from "../../images/profile.png";
export default function Profile() {
  return (
    <>
      <div className=" justify-self-center tdc:justify-self-end flex space-x-5">
        <div className="">
          <div className=" grid mt-5 ml-1">
            <p>John Doe</p>
          </div>
        </div>
        <img
          src={ProfileImg}
          alt=""
          className="h-[36px] mt-3 rounded-full border border-[#F2994A]"
        ></img>
      </div>
    </>
  );
}
