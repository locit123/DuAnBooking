import React, { useState } from "react";
import { Form, Select } from "../form/Form";

const Register = (props) => {
  return (
    <div className="content-box">
      <div className="text-center">
        <h1>Register</h1>
      </div>
      <Form
        label={"Email:"}
        placeholder={"Vui Lòng nhập email"}
        name={"email"}
      />
      <Form
        label={"Password:"}
        placeholder={"Vui Lòng nhập password"}
        name={"password"}
      />
      <Form
        label={"FirstName:"}
        placeholder={"Vui Lòng nhập firstName"}
        name={"firstName"}
      />
      <Form
        label={"LastName:"}
        placeholder={"Vui Lòng nhập lastName"}
        name={"lastName"}
      />
      <Form
        label={"Address:"}
        placeholder={"Vui Lòng nhập address"}
        name={"address"}
      />
      <Form
        label={"PhoneNumber:"}
        placeholder={"Vui Lòng nhập phoneNumber"}
        name={"phoneNumber"}
      />
      <Select
        label={"Gender:"}
        name={"gender"}
        v1={"1"}
        v2={"2"}
        v3={"3"}
        gt1={"Female"}
        gt2={"Male"}
        gt3={"Other"}
      />
      <Select
        label={"RoleId:"}
        name={"roleId"}
        v1={"1"}
        v2={"2"}
        v3={"3"}
        gt1={"Admin"}
        gt2={"Doctor"}
        gt3={"Patient"}
      />
      <button className="button">Đăng Ký</button>
    </div>
  );
};

export default Register;
