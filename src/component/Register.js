import React from "react";
import "../App.css";

import Google from "../assets/google.png";
export default function Register() {
  return (
    <>
      <div className="grid sm:max-w-[220px] md:max-w-[420px]  gap-3 sm:gap-1 md:gap-3">
        <div className="grid space-y-4 sm:space-y-2 md:space-y-8">
          <div className="justify-self-center text-5xl sm:text-2xl md:text-5xl font-bold  sm:text-[#E4E6F2]">
            Register
          </div>
          <div className="justify-self-center sm:text-xs md:text-sm sm:text-[#A6A7B0] ">
            <span>Needs an account?</span>
            <span className="text-[#F2994A] font-bold">
              <a href="#"> Sign Up</a>
            </span>
          </div>
        </div>

        <div className="">
          <form className="space-y-1">
            <div className="">
              <label className="sm:text-[#DEDEDF]">
                Email <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="outline-2 outline-[#F2994A] p-2 sm:p-1 md:p-2 bg-[#384063] text-white w-full  rounded-md"
              />
            </div>
            <div className="">
              <label className="sm:text-[#DEDEDF]">
                Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="outline-none p-2 sm:p-1 md:p-2 w-full bg-[#384063] text-white rounded-md"
              ></input>
            </div>

            <div className="">
              <label className="sm:text-[#DEDEDF]">
                Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="outline-none p-2 sm:p-1 md:p-2 w-full bg-[#384063] text-white rounded-md"
              ></input>
            </div>

            <div className="">
              <label className="sm:text-[#DEDEDF]">
                Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="outline-none p-2 sm:p-1 md:p-2 w-full bg-[#384063] text-white rounded-md"
              ></input>
            </div>

            <div className="">
              <label className="sm:text-[#DEDEDF]">
                Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="outline-none p-2 sm:p-1 md:p-2 w-full bg-[#384063] text-white rounded-md"
              ></input>
            </div>
          </form>
        </div>

        <div className="justify-self-end text-[#F2994A] font-bold sm:text-xs md:text-md">
          <a href=""> Forgot your Password? </a>
        </div>

        <div className="space-y-3 sm:space-y-1 md:space-y-3">
          <button className="w-full bg-[#F2994A] text-white p-2 sm:p-1 md:p-2 rounded-md text-center  ">
            Login
          </button>
          <button className="w-full flex space-x-2  bg-white text-[#F2994A] border border-[#F2994A] sm:border-none p-2 sm:p-1 md:p-2 rounded-md justify-center">
            <img src={Google}></img> <span>Sign-in with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}
