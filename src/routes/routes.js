import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "../component/main/forgotPasswords/ForgotPassword";
import ChangePassword from "../component/main/forgotPasswords/ChangePassword";

import Login from "../component/main/Login";
import Register from "../component/main/Register";
import RegisterWithGoogle from "../component/main/RegisterWithGoogle";
import PlotSelectionStepOne  from "../component/main/sessionStarted/PlotSelectionStepOne";
import PlotsForSpray from "../component/main/sessionStarted/PlotsForSpray";

import OnbordingFirstStart from "../component/container/OnbordingStart";
const NotFound = () => {
  return <div>Page Not found</div>;
};
 


export default function RoutesDriftSense() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/registerwithgoogle" element={<RegisterWithGoogle/>} />
        <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        <Route exact path="/passwordchange" element={<ChangePassword/>} />
        <Route exact path="/afterregistration" element={<OnbordingFirstStart/>} />
        <Route exact path="/plotselectionstepone" element={<PlotSelectionStepOne/>} />
        <Route exact path="/plotforspray" element={<PlotsForSpray/>} />
        
        {/*   */}
         
         
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
