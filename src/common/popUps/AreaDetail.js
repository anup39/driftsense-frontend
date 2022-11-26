import React from "react";
import PopUpApprove from "../button/popUpModel/PopUpApprove";
import AddPlotsName from "../form/popUpModel/AddPlotsName";
import CropGeometry from "../form/popUpModel/dropdowns/CropGeometry";
import CropType from "../form/popUpModel/dropdowns/CropType";
import TimerCounter from "../form/popUpModel/forDuration/TimerCouter";
import AreaDetailHeader from "../header/popUpModel/AreaDetailHeader";
import AreaDetailTitle from "../title/popUpModel/AreaDetailTitle";
import CalculatedPlotAcreage from "../title/popUpModel/CalculatedPlotAcreage";
import CustomizeModelName from "../title/popUpModel/CustomizeModelName";
import PlotDetailTitle from "../title/popUpModel/PlotDetailTitle";
export default function AreaDetail() {
  return (
    <>
      <div className="w-full absolute z-50 h-[90vh]">
        <div className="flex justify-center items-center h-screen">
          <div className="ftdc:w-3/4 mx-auto bg-slate-800 border-2 border-orange-500 opacity-[0.95] rounded-lg space-y-2">
            <div className="border-b border-[#71C1C7] p-4">
              <AreaDetailHeader />
            </div>
            <div className="tdc:flex grid p-4 space-y-5 tdc:space-y-0">
              <div className="basis-4/12">
                <CustomizeModelName />
              </div>
              <div className="basis-8/12 space-y-3">
                <PlotDetailTitle />
                <AddPlotsName />
                <AreaDetailTitle />
                <div className="grid tdc:grid-cols-2 gap-3">
                  <div>
                    <CropType />
                  </div>
                  <div>
                    <CropGeometry />
                  </div>
                </div>
                <div className="grid tdc:grid-cols-2">
                  <div>
                    <CalculatedPlotAcreage />
                  </div>
                  <div>
                    <TimerCounter />
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-5 grid justify-items-center">
              <PopUpApprove />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
