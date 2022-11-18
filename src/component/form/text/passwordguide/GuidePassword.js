import React from "react";
import Sheld from "./assets/shield-check-white.svg";
import SheldColor from "./assets/shield-check.svg";
export default function GuidePassword() {
  return (
   <>
        <table className="text-xs text-white" >
            <tbody>
                <tr>
                    <td><img src={Sheld} alt=""></img></td>
                    <td>Password must contain atleast one special character i.e ./-</td>
                </tr>
                <tr>
                    <td><img src={Sheld} alt=""></img></td>
                    <td>Password must contain one uppercase letter i.e ABC</td>
                </tr>
                <tr>
                    <td><img src={Sheld} alt=""></img></td>
                    <td>Password must contain one lowercase letter i.e abc</td>
                </tr>
                <tr>
                    <td><img src={Sheld} alt=""></img></td>
                    <td>Password must contain one number i.e 123456</td>
                </tr>
            </tbody>
        </table>
   </>
  );
}
