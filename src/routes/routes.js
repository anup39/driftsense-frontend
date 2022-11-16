import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";
import Forgot from "../component/Forgot";

const NotFound = () => {
  return <div>Page Not found</div>;
};

export default function RoutesDriftSense() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot-password" element={<Forgot />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
