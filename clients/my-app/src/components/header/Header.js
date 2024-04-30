import React from "react";
import "./Header.scss";
import Menu from "./menu/Menu";
const Header = (props) => {
  const {
    li1,
    li2,
    li3,
    onClick,
    li4,
    li5,
    li6,
    onClick2,
    onClick3,
    className1,
    className2,
  } = props;
  return (
    <div className="box-ul">
      <ul className="box-1">
        <li>{li1}</li>
        <li>{li2}</li>
        <Menu classNameMenu1={"menu-1"} classNameMenu2={"menu-2"} />
      </ul>
      <ul className="box-2">
        <li className={className1} onClick={onClick3}>
          {li6}
        </li>
        <li className={className2} onClick={onClick2}>
          {li5}
        </li>
        <li>{li4}</li>
        <li title="logOut" onClick={onClick}>
          {li3}
        </li>
      </ul>
    </div>
  );
};

export default Header;
