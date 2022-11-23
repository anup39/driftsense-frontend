import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
export default function CustomizeModelName() {
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
            <span>Red Bluff, CA 96080, USA</span>
          </p>
        </div>
      </div>
    </>
  );
}