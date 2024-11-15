import React from "react";
import OnbordingHeader from "./headerOnbording/OnbordingHeader";
import OnbordingFooterLoader from "./CreateField/LoaderFooter";
import BlackRight from "./CreateField/images/Iconrightblack.svg";
import LeftBlack from "./CreateField/images/leftblack.svg";
import ModelConfirm from "./ModelConfirm";
import AreaDetail from "./AreaDetail";
import MapSection from "./CreateField/MapSection";
import { useSelector } from "react-redux";
import WaitingForApproval from "./WaitingForApproval";
import SavedSuccessfully from "./SavedSucessfully";
import { useNavigate } from "react-router-dom";

export default function OnboardingProcess() {
  const navigate = useNavigate();
  const areaDetials = useSelector((state) => state.areaDetails);
  const field_create = useSelector(
    (state) => state.createFieldMap.field_create
  );

  const openFieldSelection = useSelector(
    (state) => state.createFieldMap.showPopup
  );
  const showDetailsForm = useSelector(
    (state) => state.createFieldMap.showDetailsForm
  );

  const showDetailsSucessLoading = useSelector(
    (state) => state.createFieldMap.showDetailsSucessLoading
  );

  const completed_create_field = useSelector(
    (state) => state.createFieldMap.completed_create_field
  );

  const field_onboard_complete = useSelector(
    (state) => state.auth.field_onboard_complete
  );

  console.log(field_onboard_complete);

  const handleFieldSelectionPopup = () => {
    console.log("Next Button is clicked");
    navigate("/get-started-gear");
  };

  return (
    <>
      <div className="bg-[#E9E9E9] grid space-y-3 max-h-[100vh] relative ">
        <div className="h-[10vh]">
          <OnbordingHeader />
        </div>
        <div className="grid h-[80vh]  relative ">
          <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3 ">
            <MapSection />
          </div>

          {openFieldSelection ? <ModelConfirm /> : null}
          {showDetailsForm ? (
            <AreaDetail areaDetails={areaDetials} create={field_create} />
          ) : null}
          {showDetailsSucessLoading ? <WaitingForApproval /> : null}
          {completed_create_field ? <SavedSuccessfully /> : null}
        </div>

        <div className=" bottom-0  w-full  h-[10vh] grid content-end">
          <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-2  bg-[#212B36] flex space-x-4  justify-end">
            <button
              disabled={true}
              // onClick={handleFieldSelectionPopup}
              className=" flex focus:ring-2 focus:ring-orange space-x-2 bg-gray p-2 rounded-md  text-lg "
            >
              <img src={LeftBlack} alt="" className="h-3 mt-2"></img>
              <span>Back</span>
            </button>
            <button
              disabled={
                field_onboard_complete === "false" ||
                field_onboard_complete === false
                  ? true
                  : false
              }
              onClick={handleFieldSelectionPopup}
              className={`flex focus:ring-2 focus:ring-orange  space-x-2  bg-${
                field_onboard_complete === "false" ||
                field_onboard_complete === false
                  ? "gray"
                  : "white"
              } p-2 rounded-md text-black text-lg`}
            >
              <span>Next</span>
              <img src={BlackRight} alt="" className="h-3 mt-2"></img>
            </button>
          </div>
          <OnbordingFooterLoader />
        </div>
      </div>
    </>
  );
}
