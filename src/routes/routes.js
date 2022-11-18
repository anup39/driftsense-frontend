import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginHeader from "../component/include/HeaderLogin";
import RegisterHeader from "../component/include/HeaderRegister";
import Login from "../component/Login"
import Loader from "../component/required/Loader"
import Register from "../component/Register"
import Forgot from "../component/ForgotPassword"
import Change from "../component/ChangePassword"
import GuidePassword from "../component/form/text/passwordguide/GuidePassword"
import RegisterWithGoogleHead from "../component/form/title/RegisterWithGoogleHead"
import RegisterWithGoogle  from "../component/RegisterWithGoogle"
const NotFound = () => {
  return <div>Page Not found</div>;
};

export default function RoutesDriftSense() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/loader" element={<Loader />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/change" element={<Change />} />
        <Route exact path="/loginhead" element={<LoginHeader />} />
        <Route exact path="/registerhead" element={<RegisterHeader />} />
        <Route exact path="/registerwithgooglehead" element={<RegisterWithGoogleHead />} />
        
        
        <Route exact path="/passwordguide" element={<GuidePassword />} />
        <Route exact path="/registerwithgoogle" element={<RegisterWithGoogle />} />
         
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
