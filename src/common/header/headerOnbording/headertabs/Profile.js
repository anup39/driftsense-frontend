import React from "react";
import ProfileImg from "../../images/profile.png";
export default function Profile() {
  return (
    <>
      <div className="relative justify-self-center tdc:justify-self-end flex space-x-5">
        <div className="absolute grid content-center h-full pt-4">
        <div className="border-l-2 border-[#F2994A]  h-12"></div>
        </div>
        <div className="">
          <div className=" grid mt-5 ml-1">
            <p>John Doe</p>
          </div>
        </div>
        <img
          src={ProfileImg}
          alt=""
          className="h-[36px] mt-4 rounded-full border border-[#F2994A]"
        ></img>
      </div>
    </>
  );
}
