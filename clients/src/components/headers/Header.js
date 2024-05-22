import "./Header.scss";
import React from "react";
import { LoginOutlined } from "@ant-design/icons";
function HeaderComponent(props) {
  return (
    <header className="header">
      <div className="content-box">
        <p className="p">Hệ Thống</p>
        <span className="span"></span>
      </div>
      <LoginOutlined className="icon" />
    </header>
  );
}

export default HeaderComponent;
