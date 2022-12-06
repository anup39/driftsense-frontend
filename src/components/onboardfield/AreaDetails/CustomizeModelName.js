import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function CustomizeModelName() {
  const layers = useSelector((state) => state.createFieldMap.layers);
  const layer = layers[0];
  console.log(layer);
  return (
    <>
      <div className="space-y-5">
        <div>
          <p className="block text-2xl text-orange-300  font-medium">
            Customized Location Name
          </p>
          <p className="block text-xs text-neutral-50 ">
            Add Custom Name for Your Location
          </p>
        </div>
        <div className="space-y-3">
          <p className="block text-xs text-white ">Selected Location</p>

          <p className="flex space-x-2 text-slate-200  font-medium">
            <FontAwesomeIcon
              icon={faMapMarker}
              className="text-2xl bock align-baseline"
            ></FontAwesomeIcon>
            <span>{layer.location}</span>
          </p>
        </div>
      </div>
    </>
  );
}
