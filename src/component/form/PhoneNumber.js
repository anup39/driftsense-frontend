import React from "react";

export default function FormNumber() {
  return (
    <>
      <div className="">
        <label
          className="
        text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
        "
        >
          Phone <span className="text-[#D44453]">*</span>
        </label>
        <br />
        <div className="flex">
          <select
            name="cars"
            id="cars"
            className="
                  outline-2 rounded-l-md
                  outline-[#F2994A]
                  bg-[#384063]
                  text-white
                   py-1 fdc:p-2 tdc:py-1  fvdc:p-2
                   "
          >
            <option value="Nepal">+ 977</option>
            <option value="India">+ 91 </option>
          </select>
          <input
            type="text"
            className="
                  outline-2 rounded-r-md
                  outline-[#F2994A]
                  bg-[#384063]
                  text-white
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2

                  "
          />
        </div>
      </div>
    </>
  );
}
