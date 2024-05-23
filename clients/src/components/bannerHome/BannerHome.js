import React from "react";
import "./BannerHome.scss";
import a1 from "../../images/a1.png";
import {
  SearchOutlined,
  BankFilled,
  MobileFilled,
  BookFilled,
  MedicineBoxFilled,
  UserAddOutlined,
  HeartFilled,
} from "@ant-design/icons";
const BannerHome = (props) => {
  return (
    <div className="content-banner">
      <div className="img">
        <img src={a1} alt="hinh anh" />
      </div>
      <div>
        <div className="content-box">
          <div className="box-1">
            <span>NỀN TẢNG Y TẾ</span>
            <span>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</span>
          </div>
          <div className="box-2">
            <SearchOutlined className="icon-search" />
            <input placeholder="Tìm lý do khám" />
          </div>
        </div>
        <div className="box-footer">
          <div className="box-1">
            <div className="icon">
              <BankFilled className="icon-bank" />
            </div>
            <span>Khám</span>
            <span>Chuyên Khoa</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <MobileFilled className="icon-bank" />
            </div>
            <span>Khám</span>
            <span>từ xa</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <BookFilled className="icon-bank" />
            </div>
            <span>Khám</span>
            <span>tổng quát</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <MedicineBoxFilled className="icon-bank" />
            </div>
            <span>Xét nghiệm</span>
            <span>y học</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <UserAddOutlined className="icon-bank" />
            </div>
            <span>Sức khỏe</span>
            <span>tinh thần</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <HeartFilled className="icon-bank" />
            </div>
            <span>Khám</span>
            <span>nha Khoa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
