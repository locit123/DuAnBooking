import React from "react";
import Header from "../../components/headersHome/Header";
import BannerHome from "../../components/bannerHome/BannerHome";
import BodyHome from "../../components/bodyHome/BodyHome";

const Home = (props) => {
  return (
    <div>
      <Header />
      <BannerHome />
      <BodyHome />
    </div>
  );
};

export default Home;
