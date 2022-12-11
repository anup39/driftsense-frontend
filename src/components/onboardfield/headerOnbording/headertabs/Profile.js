import React from "react";
import ProfileImg from "../images/profile.png";
import {
  clearToken,
  clearFullName,
  clearFarmerId,
  clearFieldOnboard,
} from "../../../../reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const full_name = useSelector((state) => state.auth.full_name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("full_name");
    localStorage.removeItem("farmer_id");
    localStorage.removeItem("field_onboard_complete");
    dispatch(clearToken());
    dispatch(clearFullName());
    dispatch(clearFarmerId());
    dispatch(clearFieldOnboard());
    navigate("/");
    window.location.reload(true);
  };

  return (
    <>
      <div className=" justify-self-center tdc:justify-self-end flex space-x-5">
        <div className="">
          <div className=" grid mt-5 ml-1">
            {full_name ? <p>{full_name}</p> : null}
          </div>
        </div>
        <img
          src={ProfileImg}
          alt=""
          className="h-[36px] mt-3 rounded-full border border-[#F2994A]"
        ></img>
        <button
          onClick={handleLogout}
          className="h-[36px] mt-3 rounded-full border border-[#F2994A]"
        >
          Logout
        </button>
      </div>
    </>
  );
}
