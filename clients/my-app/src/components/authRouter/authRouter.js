import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useProvider } from "../useProvider/UseProvider";
const PublicRoute = () => {
  const providerItems = useContext(useProvider);
  if (providerItems.user) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};
const PrivateRoute = () => {
  const providerItems = useContext(useProvider);
  if (!providerItems.user) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export { PublicRoute, PrivateRoute };
