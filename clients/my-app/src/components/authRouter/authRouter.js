import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = ({ user }) => {
  if (user) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};
const PrivateRoute = ({ user }) => {
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export { PublicRoute, PrivateRoute };
