import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "./edit.svg";
import MapIcon from "./map.svg";
import {
  toggleFieldGeomEdit,
  toggleshowDetailsForm,
  toggleFormCreate,
} from "../../reducers/createFieldMapSlice";
import { changeAreaDetials } from "../../reducers/areaDetailsSlice";
import { useGetFieldByIdQuery } from "../../api/fieldApi";

export default function EditPlot(props) {
  const field_id = useSelector((state) => state.createFieldMap.field_id);

  const {
    data: data_field,
    isSuccess: is_success,
    isLoading: is_loading,
  } = useGetFieldByIdQuery(field_id);

  console.log(data_field, "data field");

  const dispatch = useDispatch();
  const handelEditClicked = () => {
    dispatch(toggleFormCreate(false));
    dispatch(toggleshowDetailsForm(true));

    const splitted_hour_min_arr = data_field.duration.split(".");
    console.log(splitted_hour_min_arr);
    dispatch(
      changeAreaDetials({
        plot_name: data_field.field_tag,
        crop_type_id: data_field.crop_name,
        crop_geometry_id: data_field.crop_type,
        selected_location: data_field.address_name,
        acerage: data_field.acreage,
        spray_duration_hour: splitted_hour_min_arr[0],
        spray_duration_minutes: splitted_hour_min_arr[1],
      })
    );
  };
  const handelDetailsEditClicked = () => {
    console.log("Details is clicked");
    dispatch(toggleFieldGeomEdit(true));
  };

  const handleSaveClicked = () => {
    console.log("Saved is clicked");
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
        </button>
      </div>
      <div
        onClick={handleSaveClicked}
        className={`p-3 rounded-md  cursor-pointer bg-[green] text-white absolute top-15 right-0 ${"invisible"} `}
      >
        Save
      </div>
    </>
  );
}
