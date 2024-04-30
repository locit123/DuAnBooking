import React from "react";
import "./UserRedux.scss";
import { HeaderComponents } from "../header/HeaderComponents";

const UserRedux = () => {
  return (
    <div className="box-all">
      <div className="header">
        <HeaderComponents />
      </div>
      <div className="body"></div>
    </div>
  );
};

export default UserRedux;
