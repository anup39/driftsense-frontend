import React from "react";
import Location from "./images/location.png";
import { useSelector } from "react-redux";

export default function CustomizeModelName(props) {
  const location_already = props.selected_location;
  const create = props.create;

  const layers = useSelector((state) => state.createFieldMap.layers);

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
            <img
              alt=""
              src={Location}
              className="text-2xl bock align-baseline"
            ></img>

            {create ? (
              <span>{layers.length !== 0 ? layers[0].location : null}</span>
            ) : (
              <span>{location_already}</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
