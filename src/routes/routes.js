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
import LoaderCircle from "../common/loader/LoaderCircle";
import ModelConfirm from "../common/popUps/ModelConfirm";
import AreaDetail from "../common/popUps/AreaDetail";

import SavedSuccessfully from "../common/loader/SavedSuccessfully";
import WaitingForApproval from "../common/loader/WaitingForApproval"
import EditPlot from "../common/button/edit/EditPlot";
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
        <Route
          exact
          path="/register-with-google"
          element={<RegisterWithGoogle />}
        />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/change-password" element={<ChangePassword />} />
        <Route
          exact
          path="/registration-complete"
          element={<RegistrationComplete />}
        />
        <Route exact path="/get-started-field" element={<GetStarted />} />

        <Route exact path="/create-field" element={<CreateField />} />

        <Route exact path="/loader-submit" element={<LoaderCircle />} />
        <Route exact path="/confirm-popup" element={<ModelConfirm />} />
        <Route exact path="/area" element={<AreaDetail />} />
        <Route exact path="/edit" element={<EditPlot />} />
        <Route
          exact
          path="/saved-sucessfully"
          element={<SavedSuccessfully />}
        />
        <Route exact path="/wait-approval" element={<WaitingForApproval />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
