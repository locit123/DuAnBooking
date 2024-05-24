import React from "react";
import Slider from "react-slick";
import "./ChuyenKhoaPhoBien.scss";
import anh from "../../../images/anh-dep-hinh-nen-thien-nhien-20.jpg";
import { useTranslation } from "react-i18next";
function ChuyenKhoaPhoBien(props) {
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
    <div className="slider-container container">
      <div className="content-box">
        <h3>{t("PopularizeExpertise")}</h3>
        <button>{t("SEE_MORE")}</button>
      </div>
      <Slider {...settings}>
        <div className="img-1">
          <img src={anh} alt="a1" width={`100%`} height={`200px`} />
          <h5>Cơ xương khớp</h5>
        </div>
        <div className="img-1">
          <img src={anh} alt="a1" width={`100%`} height={`200px`} />
          <h5>Thần kinh</h5>
        </div>
        <div className="img-1">
          <img src={anh} alt="a1" width={`100%`} height={`200px`} />
          <h5>Tiêu hóa</h5>
        </div>
        <div className="img-1 img-2">
          <img src={anh} alt="a1" width={`100%`} height={`200px`} />
          <h5>Tim mạch</h5>
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
  );
}

export default ChuyenKhoaPhoBien;
