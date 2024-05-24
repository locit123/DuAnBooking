import React from "react";
import "./TruyenThong.scss";
import a2 from "../../../images/a2.jpg";
const TruyenThong = (props) => {
  return (
    <div className="content-truyen-thong">
      <div className="content-box-h1 container">
        <div className="h1">
          <h1>Truyền Thông nói về LOC-FUHO</h1>
        </div>
        <div className="content-box-2">
          <div className="item-1">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xtWIDRFunuA"
              title="Lộc Fuho - Nhà Bố Vợ Đã Xong"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="item-1 item-2">
            <img src={a2} alt="a2" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TruyenThong;