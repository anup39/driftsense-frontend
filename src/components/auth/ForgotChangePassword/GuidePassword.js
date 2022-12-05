import React from "react";
import Sheld from "./shield-check-white.svg";
import SheldBlack from "./shield-black.svg";
export default function GuidePassword() {
  return (
    <>
      <table className="text-xs tdc:text-white">
        <tbody>
          <tr>
            <td>
              <img src={Sheld} alt="" className="hidden tdc:block"></img>
              <img src={SheldBlack} alt="" className="block tdc:hidden"></img>
            </td>
            <td>Password must contain atleast one special character i.e ./-</td>
          </tr>
          <tr>
            <td>
              <img src={Sheld} alt="" className="hidden tdc:block"></img>
              <img src={SheldBlack} alt="" className="block tdc:hidden"></img>
            </td>
            <td>Password must contain one uppercase letter i.e ABC</td>
          </tr>
          <tr>
            <td>
              <img src={Sheld} alt="" className="hidden tdc:block"></img>
              <img src={SheldBlack} alt="" className="block tdc:hidden"></img>
            </td>
            <td>Password must contain one lowercase letter i.e abc</td>
          </tr>
          <tr>
            <td>
              <img src={Sheld} alt="" className="hidden tdc:block"></img>
              <img src={SheldBlack} alt="" className="block tdc:hidden"></img>
            </td>
            <td>Password must contain one number i.e 123456</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
