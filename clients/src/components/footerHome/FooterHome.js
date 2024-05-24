import React from "react";
import sieuxe from "../../images/sieu-xe.jpg";
import "./FooterHome.scss";
const FooterHome = (props) => {
  return (
    <div className="footer">
      <div className="bien-so"></div>
      <div className="h1">
        <h1>@_FOOTER-LOCFUHO</h1>
      </div>
      <div className="img">
        <img src={sieuxe} alt="sieu-xe" />
      </div>
    </div>
  );
};

export default FooterHome;
