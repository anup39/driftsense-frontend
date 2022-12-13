import React from "react";
import "../MainList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";
import { toggleCreateGear } from "../../../../../reducers/createGearSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllGearsQuery } from "../../../../../api/gearApi";

export default function LineList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditGear = () => {
    console.log("change the input ");
    dispatch(toggleCreateGear(false));
    navigate("/gear");
  };

  const {
    data: data_gears,
    isSuccess: is_success_gear,
    isLoading: is_loading_gear,
  } = useGetAllGearsQuery();

  console.log(data_gears, is_loading_gear);

  if (is_loading_gear) {
    return <div>Loading....</div>;
  } else {
    return (
      <>
        <div className="space-y-5 ml-2 mr-3">
          {is_success_gear && data_gears
            ? data_gears.map((gear, index) => (
                <div
                  key={index}
                  className=" h-[250px]  flex justify-between gap-4 bg-[#26323F] rounded-md"
                >
                  <div className="w-[318px] col-span-3">
                    <div className=" bg-[#3C4752] rounded-md h-full overflow-x-hidden border-r-4 border-[#F2994A] rounded-r-[80px]">
                      <div className="grid place-content-center h-[230px]">
                        <img src={gear.image} alt="" className=" "></img>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 col-span-8 space-x-5 h-full content-center justify-center">
                    <div className="grid  space-y-3">
                      <div>
                        <div className="text-[#F2994A] text-sm">Name</div>
                        <div className="font-semibold text-white text-lg">
                          {gear.name}
                        </div>
                      </div>
                      <div>
                        <div className="text-[#F2994A] text-sm">
                          Nozzle Type
                        </div>
                        <div className="font-semibold text-white text-lg">
                          {gear.nozzles_type}
                        </div>
                      </div>
                      <div>
                        <div className="text-[#F2994A] text-sm">
                          Boom Pressure (bar)
                        </div>
                        <div className="font-semibold text-white text-lg">
                          {gear.boom_pressure}
                        </div>
                      </div>
                    </div>
                    <div className="grid  space-y-3">
                      <div>
                        <div className="text-[#F2994A] text-sm">Model</div>
                        <div className="font-semibold text-white text-lg">
                          {gear.model}
                        </div>
                      </div>
                      <div>
                        <div className="text-[#F2994A] text-sm">Nozzle No</div>
                        <div className="font-semibold text-white text-lg">
                          {gear.nozzles_number}
                        </div>
                      </div>
                      <div>
                        <div className="text-[#F2994A] text-sm">
                          Boom Width (meters)
                        </div>
                        <div className="font-semibold text-white text-lg">
                          {gear.boom_width}
                        </div>
                      </div>
                    </div>
                    <div className="grid  space-y-3">
                      <div>
                        <div className="text-[#F2994A] text-sm">
                          Manufacture
                        </div>
                        <div className="font-semibold text-white text-lg">
                          {gear.manufacture}
                        </div>
                      </div>
                      <div>
                        <div className="text-[#F2994A] text-sm">
                          Tank Size ( Capacity in liter)
                        </div>
                        <div className="font-semibold text-white text-lg">
                          7570
                        </div>
                      </div>
                      <div>
                        <div className="text-[#F2994A] text-sm">
                          Nozzle Height Above Canopy (meters)
                        </div>
                        <div className="font-semibold text-white text-lg">
                          1
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="  justify-self-end  py-3 px-3">
                    <div className="flex space-x-1">
                      <div className="cursor-pointer  ">
                        <label
                          htmlFor="check-box-1"
                          className="relative h-[40px] w-[40px]"
                        >
                          <input
                            type="checkbox"
                            id="check-box-1"
                            className=" appearance-none	  h-[40px] w-[40px] rounded-full border border-[#F2994A]  bg-[#161C24]"
                          />
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="h-8 w-8 absolute left-0 px-1 py-1 text-2xl check-1 transition text-[#F2994A] text-opacity-0"
                          />
                        </label>
                      </div>

                      <button
                        onClick={handleEditGear}
                        className="h-[40px] w-[40px] rounded-full  flex items-center justify-center bg-white"
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-[#F2994A]"
                        ></FontAwesomeIcon>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}

          {/* ENd ONE LIST */}
        </div>
      </>
    );
  }
}
