import React from "react";
import "./Home.scss";
import PopularizeExpertise from "./body/PopularizeExpertise";
import Footer from "./footer/HomeFooter";
import HeaderHome from "./header/HeaderHome";

const Home = () => {
  return (
    <div className="box-container">
      <div className="box-header">
        <HeaderHome />
      </div>
      <div className="box-body">
        <PopularizeExpertise />
      </div>
      <div className="box-footer text-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
