import React from "react";

export default function ConsultantDropDown() {
  return (
    <select
      required
      placeholder="Select Consultant"
      className="outline-2 outline-[#F2994A] bg-[#384063] t text-white w-full py-1 fdc:p-2 tdc:py-1  fvdc:p-2 rounded-md"
    >
      <option style={{ backgroundColor: "#212b36" }} value="">
        Select Consultant
      </option>
      <option style={{ backgroundColor: "#212b36" }} value="US">
        United States
      </option>
      <option style={{ backgroundColor: "#212b36" }} value="CA">
        Canada
      </option>
      <option style={{ backgroundColor: "#212b36" }} value="FR">
        France
      </option>
      <option style={{ backgroundColor: "#212b36" }} value="DE">
        Germany
      </option>
    </select>
  );
}
