import React from "react";

export default function ConsultantDropDown(props) {
  const { is_hidden } = props;
  return (
    <ul
      className={
        is_hidden
          ? "z-50  mt-[0.5px] hidden absolute text-center w-full border-2 border-orange-400 rounded-md"
          : "z-50  mt-[0.5px]  absolute text-center w-full   border-2 border-orange-400 rounded-md"
      }
    >
      <li className="bg-[#1F2937] hover:bg-[#161C24] cursor-pointer  py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
        Jon Doe
      </li>
      <li className="bg-[#1F2937] hover:bg-[#161C24]  cursor-pointer py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
        Im the Agronomist / Pest Control Advisor
      </li>
      <li className="bg-[#1F2937] hover:bg-[#161C24] cursor-pointer py-1 fdc:p-2 tdc:py-1  fvdc:p-2">
        Others
      </li>
    </ul>
  );
}
