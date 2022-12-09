import React from "react";
import { useDispatch } from "react-redux";
import EditIcon from "./edit.svg";
import MapIcon from "./map.svg";
import { toggleFieldGeomEdit } from "../../reducers/createFieldMapSlice";

export default function EditPlot(props) {
  const dispatch = useDispatch();
  const handelEditClicked = () => {
    console.log("Edit is clicked");
  };
  const handelDetailsEditClicked = () => {
    console.log("Details is clicked");
    dispatch(toggleFieldGeomEdit(true));
  };
  return (
    <>
      <div ref={props.popupRef} style={{ display: "flex" }}>
        <button
          onClick={handelEditClicked}
          className="flex  cursor-pointer   justify-center items-center overflow-hidden h-[60px] w-[60px] bg-[white] rounded-full"
        >
          <img src={EditIcon} alt="" />
          {/* #1BB66E onactive*/}
        </button>
        <button
          onClick={handelDetailsEditClicked}
          className="flex  cursor-pointer   justify-center items-center overflow-hidden h-[60px] w-[60px] bg-white rounded-full"
        >
          <img src={MapIcon} alt="" />
          {/* #1BB66E onactive*/}
        </button>
      </div>
    </>
  );
}
