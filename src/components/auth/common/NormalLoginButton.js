import React, { useState, useEffect } from "react";
import LoaderPng from "../../../common/loader/images/loader.png";

const NormalLoginButton = (props) => {
  const { type } = props;
  const [bg, setBg] = useState("#F2994A");

  useEffect(() => {
    if (type) {
      setBg("");
    } else {
      setBg("#F2994A");
    }
  }, [type]);
  return (
    <div className="space-y-2">
      <button
        className={`border border-[#F2994A] grid w-full p-1  fdc:p-2 tdc:p-1 fvdc:p-2 bg-[${bg}] text-white rounded-md text-center`}
      >
        {type ? (
          <img
            src={LoaderPng}
            className="h-fit place-self-center animate-spin"
            alt=""
          ></img>
        ) : (
          "Login"
        )}
      </button>
    </div>
  );
};

export default NormalLoginButton;
