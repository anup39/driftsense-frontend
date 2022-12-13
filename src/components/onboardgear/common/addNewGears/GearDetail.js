import React from "react";

export default function GearDetail() {
  return (
    <>
      <div className="space-y-5">
        <div className="text-4xl font-semibold text-white">Gear Detail</div>
        <form className=" grid ftdc:grid-cols-2 rounded-md gap-4 gap-y-8">
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Name*</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Add general gear name"/>
            </div>
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Model*</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Add model name"/>
            </div>
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Manufacturer*</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Add manufacturer name"/>
            </div>
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Nozzles No*</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Add number of nozzles"/>
            </div>
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Nozzle Type*</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Add nozzle type"/>
            </div>
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Tank Size ( Capacity in liter)</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Add number in liters"/>
            </div>
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Boom Pressure ( bar )*</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Boom Pressure"/>
            </div>
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Boom Width ( meters )*</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Indicate Width in Meters"/>
            </div>
            <div className="space-y-1">
                <div className="text-[#F2994A] text-sm">Nozzle Height Above Canopy ( meters  )</div>
                <input type="text" className="outline-none border-b-2 border-[#F2994A] bg-transparent text-[#929292] w-full" placeholder="Nozzle Height"/>
            </div>
        </form>
      </div>
    </>
  );
}
