import React from "react";
import Slider from "react-slick";
import "./CoSoYTeNoiBat.scss";
import anh from "../../../images/a2.jpg";
import { useTranslation } from "react-i18next";
const CoSoYTeNoiBat = (props) => {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className="content-box-csyt">
      <div className="slider-container2 container">
        <div className="content-box">
          <h3>{t("OutstandingMedicalFacilities")}</h3>
          <button>{t("SEE_MORE")}</button>
        </div>
        <Slider {...settings}>
          <div className="img-1">
            <img src={anh} alt="a1" width={`100%`} height={`200px`} />
            <h5>Bệnh viện ưng bứu Hưng Việt</h5>
          </div>
          <div className="img-1">
            <img src={anh} alt="a1" width={`100%`} height={`200px`} />
            <h5>Hệ thống Y tế Thuc Cúc</h5>
          </div>
          <div className="img-1">
            <img src={anh} alt="a1" width={`100%`} height={`200px`} />
            <h5>Bệnh viện Nam học và Hiếm muốn Hà Nội </h5>
          </div>
          <div className="img-1 img-2">
            <img src={anh} alt="a1" width={`100%`} height={`200px`} />
            <h5>Bệnh viện đa khoa An Việt</h5>
          </div>
          <div className="img-1">
            <img src={anh} alt="a1" width={`100%`} height={`200px`} />
            <h5>Cơ xương khớp 1</h5>
          </div>
          <div className="img-1">
            <img src={anh} alt="a1" width={`100%`} height={`200px`} />
            <h5>Cơ xương khớp 1</h5>
          </div>
          <div className="img-1">
            <img src={anh} alt="a1" width={`100%`} height={`200px`} />
            <h5>Cơ xương khớp 1</h5>
          </div>
          <div className="img-1 img-2">
            <img src={anh} alt="a1" width={`100%`} height={`200px`} />
            <h5>Cơ xương khớp 1</h5>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CoSoYTeNoiBat;
