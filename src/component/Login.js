import React from "react";
import "../App.css";

import Google from "../assets/google.png";
import Show from "../assets/show.svg";
import Header from "./include/Header";

export default function Login() {
  return (
    <>
      <div className="grid sm:grid-cols-2 sm:bg-[#161C24]">

        <Header />

        <div className="p-5 lmd:px-20 lmd:py-16 lg:px-32 lg:py-28 md:p-5 md:px-10 sm:space-y-4 space-y-3">

          <div className="grid space-y-2">
            <div className="justify-self-center  font-bold sm:text-[#E4E6F2] text-4xl ">
              Login
            </div>
            <div className="justify-self-center  sm:text-[#A6A7B0] ">
              <span>Needs an account?</span>
              <span className="text-[#F2994A] font-bold">
                <a href="#"> Sign Up</a>
              </span>
            </div>
          </div>

          <form className="sm:space-y-3 space-y-2">
            <div className="">
              <label className="sm:text-[#DEDEDF]">
                Email <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="outline-2 p-2   outline-[#F2994A] bg-[#384063] text-white w-full   rounded-md"
              />
            </div>
            <div className="">
              <label className="sm:text-[#DEDEDF]">
                Password <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <div className="relative">
                <input type='text' className="text-md block outline-2 p-2   outline-[#F2994A] bg-[#384063] text-white w-full   rounded-md"  ></input>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <img src={Show} className="h-6 text-gray-700 cursor-pointer"></img>
                </div>
              </div>
            </div>

            <div className="grid justify-items-end text-[#F2994A] font-bold">
              <a href=""> Forgot your Password? </a>
            </div>
          </form >



          <div className="space-y-4">
            <button className="w-full p-2 bg-[#F2994A] text-white rounded-md text-center  ">
              Login
            </button>
            <button className="w-full p-2 flex space-x-2  bg-white text-[#F2994A] border border-[#F2994A] sm:border-none rounded-md justify-center">
              <img src={Google}></img> <span>Sign-in with Google</span>
            </button>
          </div>
        </div >
      </div >
    </>
  );
}
