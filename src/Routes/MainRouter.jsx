import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Profile from "../Pages/Profile";
import AdminDashboard from "../Pages/AdminDashboard";
import CreateTemplate from "../Pages/CreateTemplate";
import TempDetail from "../Pages/TemplateDetail";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "../Components/PrivateRoute";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/progile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/create-template" element={<CreateTemplate />} />
        <Route path="/template-detail" element={<TempDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
