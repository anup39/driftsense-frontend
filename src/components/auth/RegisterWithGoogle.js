import React, { useRef, useEffect, useState } from "react";
import RegisterWithGoogleHead from "./LoginRegister/TitleRegisterWithGoogle";
import HeaderRegister from "./LoginRegister/HeaderRegister";
import FirstHeading from "./LoginRegister/FirstHeading";
import Down from "./LoginRegister/images/down.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  useGetConsultantQuery,
  useUpdateFarmerMutation,
} from "../../api/authApi";
import LoaderPng from "./common/loader.png";
import PhoneInput from "new-ph-phone-input-react";
import "new-ph-phone-input-react/lib/style.css";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useGetProfileViaTokenQuery } from "../../api/userInfoApi";
import { useSelector, useDispatch } from "react-redux";
import { addFullName } from "../../reducers/authSlice";

export default function RegisterWithGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropDownRef = useRef();
  const [phone, setPhone] = useState("");
  const [consultant, setConsultant] = useState("");
  const [consultantID, setConsultantID] = useState(null);
  const [termsCondition, setTermsCondition] = useState(false);
  const [hideConsultant, setHideConsultant] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [registerDisabled, setRegisterDisabled] = useState(true);
  const [registerColor, setRegisterColor] = useState("#929292");
  const [errorText, setErrorText] = useState("invisible");
  const [successText, setSuccessText] = useState("invisible");

  const auth_token = useSelector((state) => state.auth.token);

  console.log(auth_token);

  const { data } = useGetConsultantQuery();
  const { isSuccess: is_success_profile, data: data_profile } =
    useGetProfileViaTokenQuery(auth_token);

  console.log(is_success_profile, data_profile);
  const [updateFarmer, { isLoading, error, isSuccess }] =
    useUpdateFarmerMutation();

  const handleConsultantDivClicked = (event) => {
    if (disabled) {
      setHideConsultant(true);
      setDisabled(false);
    } else {
      setHideConsultant(false);
      setDisabled(true);
    }
  };

  const handleConsultantClicked = (event) => {
    setConsultant(event.target.title);
    setConsultantID(event.target.value);
    setHideConsultant(true);
    setDisabled(false);
  };

  const handleTermsAndConditionTicked = (event) => {
    setTermsCondition(event.target.checked);
    if (event.target.checked) {
      setRegisterDisabled(false);
      setRegisterColor("#F2994A");
    } else {
      setRegisterDisabled(true);
      setRegisterColor("#929292");
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const farmer_id = data_profile[0].id;
    console.log(farmer_id, "farmer_id");
    const consultant = consultantID;
    const register_data = { consultant, phone };
    updateFarmer({ id: farmer_id, body: register_data });
  };

  useEffect(() => {
    if (is_success_profile && data_profile[0].full_name) {
      dispatch(addFullName(data_profile[0].full_name));
    }
  }, [is_success_profile, data_profile, dispatch]);

  useEffect(() => {
    if (error) {
      setErrorText("visible");
    } else {
      setErrorText("invisible");
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      setSuccessText("visible");
    } else {
      setSuccessText("invisible");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      return navigate("/registration-complete");
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <div className="tdc:bg-[#161C24] bg-transparent grid tdc:grid-cols-2 space-y-2  fdc:space-y-5 tdc:space-y-2">
        <HeaderRegister />
        <div className="p-2 space-y-2 fdc:place-self-center fdc:min-w-[320px] tdc:min-w-[300px] ftdc:min-w-[330px] fvdc:min-w-[420px]">
          <div className="grid space-y-1  ftdc:space-y-3">
            <FirstHeading />
            <RegisterWithGoogleHead />
          </div>
          <form onSubmit={handleRegisterSubmit} className=" space-y-4 ">
            <p
              className={`mt-2 ${errorText} peer-invalid:visible text-pink-600 text-sm`}
            >
              Farmer with that Email Already Exists.
            </p>
            <p
              className={`mt-2 ${successText} peer-invalid:visible text-green-600 text-sm`}
            >
              Sucessfully Created Account.
            </p>
            <div className="">
              <label
                className="
              text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2]
              "
              >
                Consultant <span className="text-[#D44453]">*</span>
              </label>
              {/* <br /> */}
              <div className="  outline-2 text-white w-full     ">
                <div className="relative ">
                  <div
                    className="relative"
                    onClick={handleConsultantDivClicked}
                  >
                    <input
                      disabled={disabled}
                      required
                      type="select"
                      value={consultant}
                      onChange={(consultant) => setConsultant(consultant)}
                      placeholder="Select Consultant"
                      className="pointer-events-none bg-[#384063] block  w-full py-1 fdc:p-2   fvdc:p-2 rounded-md outline-none border-2  border-[#F2994A]"
                    />
                    <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                      <img
                        alt=""
                        src={Down}
                        className="h-4 text-gray-700 cursor-pointer hover:"
                      ></img>
                    </div>
                  </div>
                  <ul
                    ref={dropDownRef}
                    className={
                      hideConsultant
                        ? "z-50  mt-[0.5px] hidden absolute text-center w-full border-2 border-orange-400 rounded-md"
                        : "z-50  mt-[0.5px]  absolute text-center w-full   border-2 border-orange-400 rounded-md"
                    }
                  >
                    {data
                      ? data.map((consultant_) => {
                          return (
                            <li
                              key={consultant_.id}
                              onClick={handleConsultantClicked}
                              value={consultant_.id}
                              title={consultant_.full_name}
                              className="bg-[#1F2937] hover:bg-[#161C24] cursor-pointer  py-1 fdc:p-2 tdc:py-1  fvdc:p-2"
                            >
                              {consultant_.full_name}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </div>
              </div>
            </div>
            <div className=" ">
              <label className="text-sm fdc:text-md tdc:text-sm tdc:text-[#E4E6F2] grid grid-cols-2">
                <span>
                  {" "}
                  Phone <span className="text-[#D44453]"></span>{" "}
                </span>
                <span className="justify-self-end">(Optional)</span>
              </label>
              <div className="rounded-md">
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
            </div>
            <div className="flex  space-x-2 font-semibold">
              <div className="">
                <label
                  htmlFor="check-box-1"
                  className="relative cursor-pointer"
                >
                  <input
                    checked={termsCondition}
                    onChange={handleTermsAndConditionTicked}
                    type="checkbox"
                    id="check-box-1"
                    className=" appearance-none	h-6 w-6 border border-[#F2994A] rounded-lg"
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 absolute  text-xl check-1 transition text-[#F2994A] -ml-6 text-opacity-0"
                  />
                </label>
              </div>
              <span className="text-[#B4B5BF]">I accept</span>
              <a href="/" className="text-[#F2994A] font-bold">
                terms of service
              </a>
            </div>
            <div className="space-y-2 ">
              <button
                disabled={registerDisabled}
                className={
                  isLoading
                    ? `border border-[#F2994A] grid w-full p-1  fdc:p-2 tdc:p-1 fvdc:p-2 bg-[""] text-white rounded-md text-center`
                    : `w-full p-1  fdc:p-2 tdc:p-1 fvdc:p-2 bg-change bg-[${registerColor}] text-white rounded-md text-center`
                }
              >
                {isLoading ? (
                  <img
                    src={LoaderPng}
                    className="h-fit place-self-center animate-spin"
                    alt=""
                  ></img>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
