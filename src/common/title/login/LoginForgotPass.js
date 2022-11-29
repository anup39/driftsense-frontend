import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForgotPass() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid justify-items-end text-[#F2994A] font-semibold text-sm">
        <button
          onClick={() => {
            navigate("/forgot-password");
          }}
        >
          {" "}
          Forgot your Password?{" "}
        </button>
      </div>
    </>
  );
}
