import React from "react";
export default function PasswordReset() {
  return (
    <>
      <button
        className="
                    w-full
                    p-1  fdc:p-2 tdc:p-1 fvdc:p-2
                    bg-[#F2994A]
                    text-white
                    rounded-md
                    text-center
                    "
      >
        <a href="/passwordchange"> Send Password Link </a>
      </button>
    </>
  );
}