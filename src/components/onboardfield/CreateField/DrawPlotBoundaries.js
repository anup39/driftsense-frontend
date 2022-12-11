import React from "react";
import { useEffect, useMemo } from "react";
import { Draw } from "ol/interaction";
import {
  togglePopup,
  toggleShowCancel,
  toggleLayers,
} from "../../../reducers/createFieldMapSlice";
import { useDispatch, useSelector } from "react-redux";
import getFeaturesGeojson from "../../OpenLayersComponent/helpers/getFeaturesGeojson";
import Search from "./Search";

export default function DrawPlotBoundaries({
  handleDrawClick,
  type,
  enable,
  addInteraction,
  removeInteraction,
}) {
  const showCancel = useSelector((state) => state.createFieldMap.showCancel);
  const dispatch = useDispatch();

  const drawInstance = useMemo(
    () =>
      new Draw({
        type,
      }),
    [type]
  );

  useEffect(() => {
    drawInstance.on("drawend", (e) => {
      const geojson = getFeaturesGeojson([e.feature]);
      const layer = {
        id: 1,
        name: "field-drawn",
        geometryType: "POLYGON",
        checked: true,
        zoomToLayer: false,
        geojson: geojson,
        location: null,
        acerage: null,
      };
      dispatch(toggleLayers(layer));
      removeInteraction(drawInstance);
      dispatch(togglePopup(true));
      dispatch(toggleShowCancel("invisible"));
    });
  }, [drawInstance, removeInteraction, dispatch]);

  useEffect(() => {
    if (!enable) return;
    addInteraction(drawInstance);
    dispatch(toggleShowCancel("visible"));
  }, [addInteraction, type, enable, drawInstance, dispatch]);

  useEffect(() => {
    if (enable) return;
    removeInteraction(drawInstance);
  }, [removeInteraction, enable, drawInstance]);

  const handleCancelClick = () => {
    removeInteraction(drawInstance);
    dispatch(toggleShowCancel("invisible"));
    handleDrawClick(false);
  };
  return (
    <>
      <div className="absolute   top-5 tdc:px-2">
        <div className=" grid tdc:grid-cols-12 gap-4 w-full">
          <div className="justify-self-start">
            <Search />
          </div>
          <div className="justify-self-end flex space-x-5 col-span-11 pr-5">
            <div
              onClick={handleCancelClick}
              className={`p-3 rounded-md  cursor-pointer bg-[red] text-white   ${showCancel} `}
              href="/"
            >
              Cancel
            </div>
            <button
              onClick={() => handleDrawClick("add-polygon")}
              className="p-2 bg-[#212B36] tdc:w-[250px] w-[200px] ftdc:w-[330px] rounded-md   text-white"
            >
              <h1>Draw Plot Boundaries</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
