import React from "react";

 
import LoaderPng from "./images/loader.png";

export default function Loader() {
  return (
    <div
      className=" 
    grid
      border
bg-white        rounded-md 
        h-[80px]
        max-w-[420px]
        min-w-[420px]  "
    >
      <img src={LoaderPng} className="h-fit place-self-center animate-spin"></img>
    </div>
  );
}
