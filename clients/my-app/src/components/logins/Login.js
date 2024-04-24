import React, { useState } from "react";
import "./Login.scss";
import { Form, Error } from "../form/Form";
import { userLoginService } from "../../servers/auth/serviceUser";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const { setData } = props;
  const [emailAndPhone, setEmailAndPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checkEye, setCheckEye] = useState(false);
  const [textError, setTextError] = useState("");
  let navigation = useNavigate();
  const handleClick = async () => {
    try {
      if (!emailAndPhone && !password) {
        setTextError("vui lòng nhập dữ liệu?");
      } else {
        let result = await userLoginService(emailAndPhone, password);
        console.log(result);
        if (result && result.data && result.data.EC === 0) {
          console.log(result.data);
          let isLoginSuccess = setData(result.data);
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
      <Form
        onChange={(e) => setEmailAndPhone(e.target.value)}
        label={"Email And PhoneNumber:"}
        placeholder={"Vui Lòng nhập email or phone"}
        name={"email"}
        className={"form-control"}
        value={emailAndPhone}
        type={"email"}
      />
      <Form
        onChange={(e) => setPassword(e.target.value)}
        label={"Password:"}
        placeholder={"Vui Lòng nhập password"}
        name={"password"}
        value={password}
        className={"form-control"}
        eye={checkEye ? "Mở Mắt" : "Nhắm Mắt"}
        type={checkEye ? "text" : "password"}
        onClick={() => handleClickEye()}
      />
      <Error messError={textError} className="p" />
      <button className="button" onClick={() => handleClick()}>
        Đăng Nhập
      </button>
    </div>
  );
};

export default Login;
