import React from "react";
import Slider from "react-slick";
import "./CamNang.scss";
import { useTranslation } from "react-i18next";
import a1 from "../../../images/a1.png";
import a2 from "../../../images/a2.jpg";
import a3 from "../../../images/a3.png";
import a4 from "../../../images/a4.png";

function CamNang() {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="content-box-camNang">
      <div className="slider-container4 container">
        <div className="content-box">
          <h3>{t("Handbook")}</h3>
          <button>{t("ALL_ARTICLES")}</button>
        </div>
        <Slider {...settings}>
          <div className="box-1">
            <div className="item-1">
              <div className="img-1">
                <img src={a1} alt="a1" />
              </div>
              <div className="p">
                <p>Cắt lợi ở đâu tốt và uy tín tại TP.HCM?</p>
              </div>
            </div>
          </div>
          <div className="box-2">
            <div className="item-2">
              <div className="img-2">
                <img src={a2} alt="a2" />
              </div>
              <div className="p2">
                <p>Trồng răng ở đâu đẹp,tốt và an toàn tại TP.HCM?</p>
              </div>
            </div>
          </div>

          <div className="box-3">
            <div className="item-3">
              <div className="img-2">
                <img src={a3} alt="a3" />
              </div>
              <div className="p2">
                <p>7 phòng khám rang uy tín tại TP.HCM - Review nha khoa</p>
              </div>
            </div>
          </div>
          <div className="box-4">
            <div className="item-4">
              <div className="img-2">
                <img src={a4} alt="a4" />
              </div>
              <div className="p2">
                <p>7 phòng khám rang uy tín tại TP.HCM - Review nha khoa</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CamNang;
