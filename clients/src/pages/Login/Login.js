import React, { useCallback, useEffect, useState } from "react";
import "./Login.scss";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getTypeLoginFetch } from "../../store/FetchApiLogin/actions";
import { toast } from "react-toastify";
import {
  getDataLoginState,
  getIsErrorLoginState,
  getIsLoadingLoginState,
} from "../../store/selector";
import { useNavigate } from "react-router-dom";
function Login(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEye, setCheckEye] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(getDataLoginState);
  console.log(data, "<<<<<<<<");
  const isLoading = useSelector(getIsLoadingLoginState);

  const isError = useSelector(getIsErrorLoginState);
  console.log(data.EM);
  const handleClickEye = useCallback(() => {
    setCheckEye(!checkEye);
  }, [setCheckEye, checkEye]);
  const handleClickLogin = useCallback(() => {
    const payload = { email, password };
    dispatch(getTypeLoginFetch.postLoginRequest(payload));
  }, [dispatch, email, password]);

  useEffect(() => {
    if (isLoading === false && isError === false) {
      if (data.EC === 0) {
        toast.success(data.EM);
        navigate("/home");
      } else {
        toast.error(data.EM);
      }
    }
  }, [data, isLoading, isError, navigate]);
  return (
    <div className="content-login">
      <div>
        <h1 className="text-center">Login</h1>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="form-control"
          type="email"
        />
      </div>
      <div className="form-group mt-3 ">
        <label>Password</label>
        <input
          placeholder="Enter Password"
          value={password}
          type={checkEye ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        {checkEye ? (
          <EyeOutlined className="icon-eye" onClick={handleClickEye} />
        ) : (
          <EyeInvisibleOutlined className="icon-eye" onClick={handleClickEye} />
        )}
      </div>
      <div className="text-center mt-3 mb-3">
        <button className="btn btn-primary" onClick={handleClickLogin}>
          {isLoading ? "loading..." : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Login;
