import React from "react";
import Slider from "react-slick";
import "./BacSiNoiBatTuanQua.scss";
import anh from "../../../images/anh-anime.jpg";
import { useTranslation } from "react-i18next";
const BacSiNoiBatTuanQua = (props) => {
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
    <div className="slider-container3 container">
      <div className="content-box">
        <h3>{t("DoctorFeaturedLastWeek")}</h3>
        <button>{t("SEE_MORE")}</button>
      </div>
      <Slider {...settings} className="test">
        <div className="box-1">
          <div className="item-1">
            <div className="img">
              <img src={anh} alt="a2" />
            </div>
            <div className="p-s">
              <p>Giáo Sư Tiến Sĩ Trần Ngọc Ân</p>
              <span>Cơ Xương Khớp</span>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="item-1">
            <div className="img">
              <img src={anh} alt="a2" />
            </div>
            <div className="p-s">
              <p>Giáo Sư Tiến Sĩ Trần Ngọc Ân</p>
              <span>Cơ Xương Khớp</span>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="item-1">
            <div className="img">
              <img src={anh} alt="a2" />
            </div>
            <div className="p-s">
              <p>Giáo Sư Tiến Sĩ Trần Ngọc Ân</p>
              <span>Cơ Xương Khớp</span>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="item-1 item-2">
            <div className="img">
              <img src={anh} alt="a2" />
            </div>
            <div className="p-s">
              <p>Giáo Sư Tiến Sĩ Trần Ngọc Ân</p>
              <span>Cơ Xương Khớp</span>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="item-1">
            <div className="img">
              <img src={anh} alt="a2" />
            </div>
            <div className="p-s">
              <p>Giáo Sư Tiến Sĩ Trần Ngọc Ân</p>
              <span>Cơ Xương Khớp</span>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="item-1">
            <div className="img">
              <img src={anh} alt="a2" />
            </div>
            <div className="p-s">
              <p>Giáo Sư Tiến Sĩ Trần Ngọc Ân</p>
              <span>Cơ Xương Khớp</span>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="item-1">
            <div className="img">
              <img src={anh} alt="a2" />
            </div>
            <div className="p-s">
              <p>Giáo Sư Tiến Sĩ Trần Ngọc Ân</p>
              <span>Cơ Xương Khớp</span>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="item-1 item-2">
            <div className="img">
              <img src={anh} alt="a2" />
            </div>
            <div className="p-s">
              <p>Giáo Sư Tiến Sĩ Trần Ngọc Ân</p>
              <span>Cơ Xương Khớp</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BacSiNoiBatTuanQua;
