import React from "react";
import "../MainList.css";
import TopEllipse from "../../../assets/topEllipse.png";
import Tracktor from "../../../assets/tracktor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCreateGear } from "../../../../../reducers/createGearSlice";
import { useGetAllGearsQuery } from "../../../../../api/gearApi";

export default function BlockTypes() {
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
        <div className="ml-2 mr-3">
          <div className="grid grid-cols-2 gap-5">
            {is_success_gear && data_gears
              ? data_gears.map((gear, index) => (
                  <div
                    key={index}
                    className="h-[395px] bg-[#26323F] rounded-md grid grid-rows-2"
                  >
                    <div className="flex">
                      <div className="basis-5/6 relative h-full w-full">
                        <div className="absolute grid w-[350px] overflow-hidden h-[150px] justify-center content-center  px-5">
                          <img
                            src={gear.image}
                            alt=""
                            className="h-[137px]"
                          ></img>
                        </div>
                        <img src={TopEllipse} alt="" className=""></img>
                      </div>
                      <div className="basis-1/6 p-5">
                        <div className="flex space-x-2">
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
                    <div className="px-5  ">
                      <div className="grid grid-cols-3 space-x-5 place-content-center">
                        <div className="grid  space-y-3">
                          <div>
                            <div className="text-[#F2994A] text-xs">Name</div>
                            <div className="font-semibold text-white text-base">
                              {gear.name}
                            </div>
                          </div>
                          <div>
                            <div className="text-[#F2994A] text-xs">
                              Nozzle Type
                            </div>
                            <div className="font-semibold text-white text-base">
                              {gear.nozzles_type}
                            </div>
                          </div>
                          <div>
                            <div className="text-[#F2994A] text-xs">
                              Boom Pressure (bar)
                            </div>
                            <div className="font-semibold text-white text-base">
                              {gear.boom_pressure}
                            </div>
                          </div>
                        </div>
                        <div className="grid  space-y-3">
                          <div>
                            <div className="text-[#F2994A] text-xs">Model</div>
                            <div className="font-semibold text-white text-base">
                              {gear.model}
                            </div>
                          </div>
                          <div>
                            <div className="text-[#F2994A] text-xs">
                              Nozzle No
                            </div>
                            <div className="font-semibold text-white text-base">
                              {gear.nozzles_number}
                            </div>
                          </div>
                          <div>
                            <div className="text-[#F2994A] text-xs">
                              Boom Width (meters)
                            </div>
                            <div className="font-semibold text-white text-base">
                              {gear.boom_width}
                            </div>
                          </div>
                        </div>
                        <div className="grid  space-y-3">
                          <div>
                            <div className="text-[#F2994A] text-xs">
                              Manufacture
                            </div>
                            <div className="font-semibold text-white text-base">
                              {gear.manufacture}
                            </div>
                          </div>
                          <div>
                            <div className="text-[#F2994A] text-xs">
                              Tank Size ( Capacity in liter)
                            </div>
                            <div className="font-semibold text-white text-base">
                              7570
                            </div>
                          </div>
                          <div>
                            <div className="text-[#F2994A] text-xs">
                              Nozzle Height Above Canopy (meters)
                            </div>
                            <div className="font-semibold text-white text-base">
                              1
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </>
    );
  }
}
