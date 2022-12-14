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
import "./hideshow.css";
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

  const navRef = React.useRef(null);

  const onToggleClick = (e) => {
    navRef.current.classList.toggle("show");
  };
  return (
    <>
      <div className="flex space-x-1">
        <div className="h-[8vh] grid content-center">
          <div className="border-l-2 border-orange h-[8vh] grid content-center"></div>
        </div>
        <div className=" justify-self-center tdc:justify-self-end flex space-x-5 relative">
          <div className="">
            <div className=" grid mt-3 ml-1 ">
              {full_name ? <p>{full_name}</p> : null}
            </div>
          </div>
          <img
            src={ProfileImg}
            alt=""
            className="h-[36px] mt-2 rounded-full border border-[#F2994A]"
            onClick={onToggleClick}
          ></img>
          <div className="absolute  hidenav mt-12 z-50 left-0" ref={navRef}>
            <div className=" bg-orangearea w-[350px] h-[50px]">
              <button
                onClick={handleLogout}
                className=" h-[36px] mt-3 px-16 rounded-full border border-[#F2994A]"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
