import React, { useEffect } from "react";
import Slider from "react-slick";
import "./BacSiNoiBatTuanQua.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  getDoctorState,
  isErrorDoctorState,
  isLoadingDoctorState,
} from "../../../store/selector";
import { getTypeActionDoctor } from "../../../store/fetchApiDoctor/actions";
import LoadingBacSiNoiBat from "./loadingBacsiNoiBat/LoadingBacSiNoiBat";
const BacSiNoiBatTuanQua = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const dataDoctor = useSelector(getDoctorState);
  const isLoading = useSelector(isLoadingDoctorState);
  const isError = useSelector(isErrorDoctorState);

  useEffect(() => {
    dispatch(getTypeActionDoctor.getDoctorRequest(""));
  }, [dispatch]);

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
    <div className="slider-container3 container">
      <div className="content-box">
        <h3>{t("DoctorFeaturedLastWeek")}</h3>
        <button>{t("SEE_MORE")}</button>
      </div>
      <Slider className="test" {...settings}>
        {isLoading === false &&
        isError === false &&
        dataDoctor.EC === 0 &&
        dataDoctor.DT.length > 0 ? (
          dataDoctor.DT.map((item, index) => (
            <LoadingBacSiNoiBat key={index} item={item} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Slider>
    </div>
  );
};

export default BacSiNoiBatTuanQua;
