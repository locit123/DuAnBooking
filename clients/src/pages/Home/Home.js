import React from "react";
import Header from "../../components/headersHome/Header";
import BannerHome from "../../components/bannerHome/BannerHome";
import BodyHome from "../../components/bodyHome/BodyHome";
import FooterHome from "../../components/footerHome/FooterHome";

const Home = (props) => {
  return (
    <div>
      <Header />
      <BannerHome />
      <BodyHome />
      <FooterHome />
    </div>
  );
};

export default Home;
