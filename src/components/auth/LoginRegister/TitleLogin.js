import React from "react";
import { useNavigate } from "react-router-dom";
export default function LoginTitle() {
  const navigate = useNavigate();

  return (
    <>
      <div className="justify-self-center font-bold tdc:text-[#E4E6F2] text-[40px]">
        Login
      </div>

      <div className="justify-self-center space-x-2 tdc:text-[#E4E6F2]  text-[18px]">
        <span>Needs an account?</span>
        <button
          onClick={() => {
            return navigate("/register");
          }}
          className="text-[#F2994A] font-bold"
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
