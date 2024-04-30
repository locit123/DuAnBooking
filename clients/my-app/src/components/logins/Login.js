import React, { useState, useContext } from "react";
import "./Login.scss";
import { userLoginService } from "../../servers/auth/serviceUser";
import { useNavigate } from "react-router-dom";
import ModelLogin from "./ModelLogin";
import { useProvider } from "../useProvider/UseProvider";
const Login = () => {
  const providerItems = useContext(useProvider);
  const [emailAndPhone, setEmailAndPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checkEye, setCheckEye] = useState(false);
  const [textError, setTextError] = useState("");
  let navigation = useNavigate();
  const handleClick = async () => {
    try {
      if (!(emailAndPhone && password)) {
        setTextError("vui lòng nhập dữ liệu?");
      } else {
        let result = await userLoginService(emailAndPhone, password);
        console.log(result);
        if (result && result.data && result.data.EC === 0) {
          console.log(result.data);
          let isLoginSuccess = providerItems.setSaveDataUser(result.data);
          if (isLoginSuccess) {
            setTextError("đã lưu giá trị");
            navigation("/");
          } else {
            setTextError("lấy ko đc giá trị");
          }
          setTextError("");
        } else {
          setTextError(result.data.EM);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleClickEye = () => {
    setCheckEye(!checkEye);
  };
  return (
    <div className="content-box">
      <div className="text-center">
        <h1>Login</h1>
      </div>
      <ModelLogin
        onChange1={(e) => setEmailAndPhone(e.target.value)}
        value1={emailAndPhone}
        onChange2={(e) => setPassword(e.target.value)}
        value2={password}
        eye={checkEye ? "mở mắt" : "nhắm mắt"}
        type={checkEye ? "text" : "password"}
        onClick={() => handleClickEye()}
        messError={textError}
        className={"p"}
      />
      <button className="button" onClick={() => handleClick()}>
        Đăng Nhập
      </button>
    </div>
  );
};

export default Login;
