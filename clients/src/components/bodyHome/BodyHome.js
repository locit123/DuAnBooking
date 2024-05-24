import React from "react";

import "./BodyHome.scss";
import ChuyenKhoaPhoBien from "./ChuyenKhoaPhoBien/ChuyenKhoaPhoBien";
import CoSoYTeNoiBat from "./CoSoYTeNoiBat/CoSoYTeNoiBat";
import BacSiNoiBatTuanQua from "./BacSiNoiBatTuanQua/BacSiNoiBatTuanQua";
import CamNang from "./CamNang/CamNang";
import TruyenThong from "./TruyenThong/TruyenThong";

const BodyHome = (props) => {
  return (
    <div>
      <ChuyenKhoaPhoBien />
      <CoSoYTeNoiBat />
      <BacSiNoiBatTuanQua />
      <CamNang />
      <TruyenThong />
    </div>
  );
};

export default BodyHome;
