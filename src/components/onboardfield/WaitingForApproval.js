import React from "react";
import LoaderCirclePNG from "./CreateField/images/loader.png";
export default function WaitingForApproval() {
  return (
    <>
      <div className="bg-[#161C24]/70 w-full absolute z-50">
        <div className="flex justify-center items-center h-screen">
          <div className="mx-auto min-w-[263px] min-h-[180px] py-3  bg-slate-800 border-orange-400 border rounded-lg">
            <div>
              <div className="flex justify-center">
                <p className="block text-center text-xl text-white  font-bold">
                  Waiting for Approval
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
              <img src={LoaderCirclePNG} className="animate-spin" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
