import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Profile from "../Pages/Profile";
import AdminDashboard from "../Pages/AdminDashboard";
import Tables from "../Pages/Tables";
import Presentations from "../Pages/Presentations";
import Documents from "../Pages/Documents";
import CreateTemplate from "../Pages/CreateTemplate";
import Questions from "../Components/Questions";
import Answers from "../Components/Answers";
import Settings from "../Components/Settings";

import PrivateRoute from "../Components/PrivateRoute";
import NotFound from "../Pages/NotFound";
import EditTemplate from "../Pages/EditTemplate";
import FillForm from "../Pages/FillForm";

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
        path="/edit-template/:id"
        element={
          <PrivateRoute>
            <EditTemplate />
          </PrivateRoute>
        }
      />
      <Route
        path="/fill-form/:id"
        element={
          <PrivateRoute>
            <FillForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/tables"
        element={
          <PrivateRoute>
            <Tables />
          </PrivateRoute>
        }
      />
      <Route
        path="/presentations"
        element={
          <PrivateRoute>
            <Presentations />
          </PrivateRoute>
        }
      />
      <Route
        path="/documents"
        element={
          <PrivateRoute>
            <Documents />
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
