import React from "react";
import PopUpApprove from "./AreaDetails/PopUpApprove";
import AddPlotsName from "./AreaDetails/AddPlotsName";
import CropGeometry from "./AreaDetails/CropGeometry";
import CropType from "./AreaDetails/CropType";
import TimerCounter from "./AreaDetails/TimerCouter";
import AreaDetailHeader from "./AreaDetails/AreaDetailHeader";
import AreaDetailTitle from "./AreaDetails/AreaDetailTitle";
import CalculatedPlotAcreage from "./AreaDetails/CalculatedPlotAcreage";
import CustomizeModelName from "./AreaDetails/CustomizeModelName";
import PlotDetailTitle from "./AreaDetails/PlotDetailTitle";
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
