import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
export default function AreaDetailHeader() {
    return (
        <>
                <div className="grid grid-cols-2">
                    <div className="block text-2xl font-bold text-white">Area Detail</div>
                    <div className="block  justify-self-end text-white text-2xl">
                        <FontAwesomeIcon icon={faTimes} ></FontAwesomeIcon>
                    </div>
                </div>
        </>
    );
}
