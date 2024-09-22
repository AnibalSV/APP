import React from "react";

import NewLogin from "./pages/NewLogin";
import OuterLayout from "./layouts/Outer.layout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Register from "./pages/Register/Register";
import ForgotPassConfirm from "./pages/ForgotPass/ForgotPassConfirm";
import DashboardLayout from "./layouts/Dashboard.layout";
import { Login } from "./pages/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <OuterLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "new-login",
          element: <NewLogin />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassConfirm />,
        }
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: []
    },
    {
      path: "*",
      element: <Navigate to="/login" />
    }
  ]);

  export default router;