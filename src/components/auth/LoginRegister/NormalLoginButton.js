import React, { useState, useEffect } from "react";
import LoaderPng from "../common/loader.png";

const NormalLoginButton = (props) => {
  const { type, text } = props;
  const [bg, setBg] = useState("#F2994A");

  useEffect(() => {
    if (type) {
      setBg("");
    } else {
      setBg("#F2994A");
    }
  }, [type]);
  return (
    <button
      className={`border border-orange grid w-full  content-center bg-[${bg}] min-h-[50px] text-[20px] text-white rounded-md text-center`}
    >
      {type ? (
        <img
          src={LoaderPng}
          className="h-fit place-self-center animate-spin"
          alt=""
        ></img>
      ) : (
        text
      )}
    </button>
  );
};

export default NormalLoginButton;
