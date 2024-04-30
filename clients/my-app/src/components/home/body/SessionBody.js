import React from "react";

import Slider from "react-slick";
import "./SessionBody.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SessionBody = (props) => {
  const { title, body } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>{body}</Slider>
      </div>
    </div>
  );
};

export default SessionBody;
