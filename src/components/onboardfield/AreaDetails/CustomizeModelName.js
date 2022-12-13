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
          <p className="block text-[20px] text-orange  font-medium">
            Customized Location Name
          </p>
          <p className="block text-[12px] text-neutral ">
            Add Custom Name for Your Location
          </p>
        </div>
        <div className="space-y-3">
          <p className="block text-[12px] text-white ">Selected Location</p>

          <p className="grid grid-cols-12 space-x-2 text-neutraladdress font-medium">
            <img alt="" src={Location} className="h-auto"></img>

            {create ? (
              <span className="col-span-11 text-[16px]">
                {layers.length !== 0 ? layers[0].location : null}
              </span>
            ) : (
              <span className="col-span-11">{location_already}</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
