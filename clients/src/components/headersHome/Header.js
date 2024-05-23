import React from "react";
import "./Header.scss";
import {
  MenuOutlined,
  PlusCircleOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
const Header = (props) => {
  return (
    <div className="content-header">
      <div className="box-1">
        <MenuOutlined className="icon-menu" />
        <PlusCircleOutlined className="icon-plus" />
        <span>BookingCare</span>
      </div>
      <div className="box-2">
        <ul className="text-1">
          <li>Chuyên khoa</li>
          <li>Tìm bác sĩ theo chuyên khoa</li>
        </ul>
        <ul className="text-1 text-2">
          <li>Cơ sở y tế</li>
          <li>Chọn bệnh viện phòng khám</li>
        </ul>
        <ul className="text-1 text-3">
          <li>Bác sĩ</li>
          <li>Chọn bác sĩ giỏi</li>
        </ul>
        <ul className="text-1 text-4">
          <li>Gói khám</li>
          <li>khám sức khỏe tổng quát</li>
        </ul>
      </div>
      <div className="box-3">
        <div className="text-1">
          <QuestionCircleFilled className="icon-support" />
          <span>Hỗ trợ</span>
        </div>
        <div className="text-2">
          <span>VN</span>
          <span>EN</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
