import React from "react";

export default function ResendLink(props) {
  const { show } = props;
  return (
    <>
      <div className={`flex space-x-2 justify-end ${show}`}>
        <span className="tdc:text-white font-normal">Resend Link in</span>
        <span className="text-[#F2994A] font-semibold">5:55</span>
      </div>
    </>
  );
}
