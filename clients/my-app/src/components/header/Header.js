import React from "react";
import "./Header.scss";
const Header = (props) => {
  const { li1, li2, li3, onClick } = props;
  return (
    <div className="box-ul">
      <ul className="box-1">
        <li>{li1}</li>
        <li>{li2}</li>
      </ul>
      <ul className="box-2">
        <li onClick={onClick}>{li3}</li>
      </ul>
    </div>
  );
};

export default Header;
