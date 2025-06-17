import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Profile from "../Pages/Profile";
import AdminDashboard from "../Pages/AdminDashboard";
import CreateTemplate from "../Pages/CreateTemplate";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "../Components/PrivateRoute";
import TemplateDetail from "../Pages/TemplateDetail";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-template"
        element={
          <PrivateRoute>
            <CreateTemplate />
          </PrivateRoute>
        }
      />
      <Route
        path="/template-detail"
        element={
          <PrivateRoute>
            <TemplateDetail />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
