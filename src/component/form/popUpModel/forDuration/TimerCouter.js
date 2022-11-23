import React from "react";

export default function TimerCounter() {
    return (
        <>
            <div class="flex flex-col justify-start items-start">
                <div class="flex flex-col gap-2 justify-start items-start w-full h-[6.81rem]">
                    <div class="flex flex-row gap-1 justify-start items-start w-full h-[0.94rem]">
                        <p class="block text-white ">Spray Duration</p>
                    </div>
                    <div class="flex flex-row gap-3 justify-start items-center w-[14.38rem] px-4 py-[1.94rem]">
                            <div>Hours</div>
                            <div>Minutes</div>
                    </div>
                </div>
            </div>

        </>
    );
}
