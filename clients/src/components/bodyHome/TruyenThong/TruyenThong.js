import React from "react";
import "./TruyenThong.scss";
import a2 from "../../../images/a2.jpg";
import { useTranslation } from "react-i18next";

const TruyenThong = (props) => {
  const { t } = useTranslation();
  return (
    <div className="content-truyen-thong">
      <div className="content-box-h1 container">
        <div className="h1">
          <h1>{t("MediaTalksAboutLOC_FUHO")}</h1>
        </div>
        <div className="content-box-2">
          <div className="item-1">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xtWIDRFunuA"
              title="Lộc Fuho - Nhà Bố Vợ Đã Xong"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
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
