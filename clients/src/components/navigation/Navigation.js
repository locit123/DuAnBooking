import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getDataLoginState } from "../../store/selector";
export const PrivateUser = () => {
  const user = useSelector(getDataLoginState);

  if (!user.DT) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export const PublicUser = () => {
  const user = useSelector(getDataLoginState);

  if (user.DT) {
    return <Navigate to={"/home"} />;
  }
  return <Outlet />;
};

export const Error = () => {
  return <div>*404*</div>;
};
