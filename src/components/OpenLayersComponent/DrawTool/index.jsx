import { useState } from "react";
import PropTypes from "prop-types";
import useDrawUtils from "../helpers/useDrawUtils";
import { useMapInstance } from "../MapContainer";
import DrawPlotBoundaries from "../../onboardfield/CreateField/DrawPlotBoundaries";
import { useSelector, useDispatch } from "react-redux";
import { toggleDraw } from "../../../reducers/createFieldMapSlice";
import Select from "./Select";
import EditIcon from "./edit.svg";

export default function DrawTool(prop) {
  const dispatch = useDispatch();
  const { map } = useMapInstance();
  const draw = useSelector((state) => state.createFieldMap.draw);

  const [drawType, setDrawType] = useState("");

  const { select, modify, overlay, addInteraction, removeInteraction } =
    useDrawUtils({
      mapInstance: map,
      popupRef: prop.popupRef,
    });

  const props = {
    select,
    modify,
    overlay,
    addInteraction,
    removeInteraction,
  };

  const handleDrawClick = (value) => {
    dispatch(toggleDraw(value));
  };

  return (
    <>
      <DrawPlotBoundaries
        enable={draw}
        handleDrawClick={handleDrawClick}
        type="Polygon"
        {...props}
      ></DrawPlotBoundaries>
      <Select enable={true} {...props} />
    </>
  );
}

DrawTool.defaultProps = {
  zIndex: 0,
};

DrawTool.propTypes = {
  zIndex: PropTypes.number,
};
