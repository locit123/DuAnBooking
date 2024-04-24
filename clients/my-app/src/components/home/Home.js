import React from "react";
import "./Home.scss";
import Header from "./header/Header";
const Home = (props) => {
  return (
    <div className="box-container">
      <div className="box-header">
        <Header />
      </div>
    </div>
  );
};

export default Home;
