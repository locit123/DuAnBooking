import React from "react";
import "./UserRedux.scss";
import { HeaderComponents } from "../header/HeaderComponents";
import FormElement from "./formCreateUserRedux/FormElement";

const UserRedux = () => {
  return (
    <div className="box-all">
      <div className="header">
        <HeaderComponents />
      </div>
      <div className="body">
        <h1 className="text-center mt-2 mb-2 textColor">User Redux</h1>
        <FormElement />
      </div>
    </div>
  );
};

export default UserRedux;
