import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "../components/auth/ForgotPassword";
import ChangePassword from "../components/auth/ChangePassword";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import RegisterWithGoogle from "../components/auth/RegisterWithGoogle";
import GetStarted from "../components/onboardfield/GetStartedField";
import CreateField from "../components/onboardfield/CreateField";
import RegistrationComplete from "../components/auth/RegistrationComplete";
import VerifyEmail from "../components/auth/VerifyEmail";
import Dasboard from "../components/dasboard/Dasboard";
import GetStartedGear from "../components/onboardgear/GearStartedGear";

export default function RoutesDriftSense() {
  // const token = useSelector((state) => state.auth.token);
  // console.log(token, "token route");
  // const token = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/verify/:token" element={<VerifyEmail />} />
        <Route
          exact
          path="/register-with-google"
          element={<RegisterWithGoogle />}
        />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route
          exact
          path="/change-password/:token"
          element={<ChangePassword />}
        />
        <Route
          exact
          path="/registration-complete"
          element={<RegistrationComplete />}
        />

        <Route exact path="/get-started-field" element={<GetStarted />} />

        <Route exact path="/create-field" element={<CreateField />} />
        <Route exact path="/get-started-gear" element={<GetStartedGear />} />

        <Route exact path="/dashboard" element={<Dasboard />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}
