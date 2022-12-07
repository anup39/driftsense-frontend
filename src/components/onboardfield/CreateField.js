import React from "react";
import OnbordingHeader from "./headerOnbording/OnbordingHeader";
import Search from "./CreateField/Search";
import OnbordingFooterLoader from "./CreateField/LoaderFooter";
import BlackRight from "./CreateField/images/Iconrightblack.svg";
import LeftBlack from "./CreateField/images/leftblack.svg";
import ModelConfirm from "./ModelConfirm";
import AreaDetail from "./AreaDetail";
import MapSection from "./CreateField/MapSection";
import { useSelector } from "react-redux";

export default function OnboardingProcess() {
  const areaDetials = useSelector((state) => state.areaDetails);

  const openFieldSelection = useSelector(
    (state) => state.createFieldMap.showPopup
  );
  const showDetailsForm = useSelector(
    (state) => state.createFieldMap.showDetailsForm
  );

  const handleFieldSelectionPopup = () => {
    console.log("Next Button is clicked");
  };

  return (
    <>
      <div className="bg-[#E9E9E9] grid space-y-3 relative">
        <div className="">
          <OnbordingHeader />
        </div>
        <div className="grid">
          <div className="space-y-2">
            <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-3 ">
              <div className="relative">
                <div className="absolute w-full grid   px-2 fdc:px-16 py-3 tdc:grid-cols-2 tdc:px-10 tdc:py-4 tdc:space-y-0 space-y-5">
                  <div className="justify-self-start z-10 ">
                    <Search />
                  </div>
                  <div className="tdc:justify-self-end z-10"></div>
                </div>
              </div>
              <MapSection />
            </div>
          </div>
        </div>
        {openFieldSelection ? <ModelConfirm /> : null}
        {showDetailsForm ? (
          <AreaDetail areaDetails={areaDetials} create={true} />
        ) : null}
        <div className="fixed bottom-0 w-full">
          <div className="px-2 sdc:px-4 tdc:px-6 fdc:px-10 py-2  bg-[#212B36] flex space-x-4  justify-end">
            <button
              // onClick={handleFieldSelectionPopup}
              className=" flex ring-2 ring-orange-500 space-x-2 bg-white p-2 rounded-md  text-lg "
            >
              <img src={LeftBlack} alt="" className="h-3 mt-2"></img>
              <span>Back</span>
            </button>
            <button
              onClick={handleFieldSelectionPopup}
              className="flex ring-2 ring-orange-500 space-x-2  bg-white p-2 rounded-md text-black text-lg "
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
