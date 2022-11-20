import React from "react";
export default function FullName() {
    return (
        <>
              <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                Fullname <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="
                  outline-2
                  outline-[#F2994A]
                  bg-[#384063] t
                  text-white
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2
                  rounded-md
                "
              />
            </div>
        </>
    );
}
