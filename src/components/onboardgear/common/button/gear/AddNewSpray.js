import React from "react";

import { useNavigate } from "react-router-dom";
import { toggleCreateGear } from "../../../../../reducers/createGearSlice";
import { useDispatch } from "react-redux";

export default function AddNewSpray() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddNewSpray = () => {
    dispatch(toggleCreateGear(true));
    navigate("/gear");
  };
  return (
    <>
      <button
        onClick={handleAddNewSpray}
        className="p-3 bg-[#F2994A] w-[206px] rounded-md grid justify-items-center text-white "
      >
        <h1>Add a New Spray</h1>
      </button>
    </>
  );
}
