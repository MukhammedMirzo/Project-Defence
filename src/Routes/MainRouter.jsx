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
import FormView from "../Pages/FormView";
import Questions from "../Components/Questions";
import Answers from "../Components/Answers";
import Settings from "../Components/Settings";

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
      <Route
        path="/form-view"
        element={
          <PrivateRoute>
            <FormView />
          </PrivateRoute>
        }
      />
      <Route
        path="/questions"
        element={
          <PrivateRoute>
            <Questions />
          </PrivateRoute>
        }
      />
      <Route
        path="/answers"
        element={
          <PrivateRoute>
            <Answers />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
