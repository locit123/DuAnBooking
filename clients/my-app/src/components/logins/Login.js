import React, { useState } from "react";
import "./Login.scss";
import { Form, Select } from "../form/Form";
const Login = () => {
  const [emailAndPhone, setEmailAndPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checkEye, setCheckEye] = useState(false);

  const handleClick = () => {
    console.log(emailAndPhone, password);
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
        value={emailAndPhone}
        type={"email"}
      />
      <Form
        onChange={(e) => setPassword(e.target.value)}
        label={"Password:"}
        placeholder={"Vui Lòng nhập password"}
        name={"password"}
        value={password}
        eye={checkEye ? "Mở Mắt" : "Nhắm Mắt"}
        type={checkEye ? "text" : "password"}
        onClick={() => handleClickEye()}
      />
      <button className="button" onClick={() => handleClick()}>
        Đăng Nhập
      </button>
    </div>
  );
};

export default Login;
