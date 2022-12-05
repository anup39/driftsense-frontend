import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useDrawUtils from "../helpers/useDrawUtils";
import { useMapInstance } from "../MapContainer";
import DrawPlotBoundaries from "../../onboardfield/CreateField/DrawPlotBoundaries";
import { useSelector, useDispatch } from "react-redux";
import { toggleDraw } from "../../../reducers/createFieldMapSlice";

export default function DrawTool({ zIndex, onSave = () => {} }) {
  const dispatch = useDispatch();
  const { map } = useMapInstance();
  const draw = useSelector((state) => state.createFieldMap.draw);

  const { addInteraction, removeInteraction } = useDrawUtils({
    mapInstance: map,
  });

  const props = {
    addInteraction,
    removeInteraction,
  };

  const handleDrawClick = (value) => {
    dispatch(toggleDraw(value));
  };

  return (
    <DrawPlotBoundaries
      enable={draw}
      handleDrawClick={handleDrawClick}
      type="Polygon"
      {...props}
    ></DrawPlotBoundaries>
  );
}

DrawTool.defaultProps = {
  zIndex: 0,
};

DrawTool.propTypes = {
  zIndex: PropTypes.number,
};
