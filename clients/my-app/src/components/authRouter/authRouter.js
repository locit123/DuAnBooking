import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = ({ user }) => {
  console.log(user);
  if (user) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};
const PrivateRoute = ({ user }) => {
  console.log(user);
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export { PublicRoute, PrivateRoute };
