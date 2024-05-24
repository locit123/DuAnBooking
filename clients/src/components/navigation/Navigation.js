import { Navigate, Outlet } from "react-router-dom";

export const PrivateUser = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export const PublicUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to={"/home"} />;
  }
  return <Outlet />;
};

export const Error = () => {
  return <div>*404*</div>;
};
