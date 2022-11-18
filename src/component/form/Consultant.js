import React from "react";
 export default function FormConsultant() {
   
    return (
        <>
               <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                Consultant <span className="text-[#D44453]">*</span>
              </label>
              <br />
              <select
                name="car"
                id="select"
                className="
                  outline-2
                  outline-[#F2994A]
                  bg-[#384063]
                  text-white
                  w-full
                  py-1 fdc:p-2 tdc:py-1  fvdc:p-2
                  rounded-md  "
              >
                <option value="Consultant 1">Consultant 1</option>
                <option value="Consultant 2">Consultant 2</option>
                <option value="Consultant 3">Consultant 3</option>
                <option value="Consultant 4">Consultant 4</option>
              </select>
            </div>
        </>
    );
}
