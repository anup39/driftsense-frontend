import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrop } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function CalculatedPlotAcreage() {
  const layers = useSelector((state) => state.createFieldMap.layers);
  const layer = layers[0];
  console.log(layer);
  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col gap-2 justify-start items-start w-full h-[6.81rem]">
          <div className="flex flex-row gap-1 justify-start items-start w-full h-[0.94rem]">
            <p className="block text-xs text-orange-400 ">
              Calculated Plot Acreage
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-start items-center w-[14.38rem] px-4 py-[1.94rem] rounded-DEFAULT">
            <FontAwesomeIcon
              icon={faCrop}
              className="text-orange-400 "
            ></FontAwesomeIcon>
            <p className="block w-full text-orange-400 ">
              {layer.acerage} Acres
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
