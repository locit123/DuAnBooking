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
    li7,
    li8,
    li9,
    li10,
    li11,
    li12,
    onClick2,
    onClick3,
    className1,
    className2,
  } = props;
  return (
    <div className="box-ul">
      <ul className="box-1">
        <li className="li1">
          {li1}
          <Menu classNameMenu1={"menu-1"} />
        </li>
        <li>{li2}</li>
        <li>{li7}</li>
        <li>{li8}</li>
        <li>{li9}</li>
        <li>{li10}</li>
        <li>{li11}</li>
        <li>{li12}</li>
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
