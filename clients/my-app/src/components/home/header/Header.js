import React from "react";
import "./Header.scss";
import a1 from "../../images/a1.png";
const Header = (props) => {
  return (
    <div className="header-content">
      <div className="header-content_box-1">
        <div className="content">
          <ul className="box-1">
            <li>MENU</li>
            <li>BookingCare</li>
          </ul>
          <ul className="box-2">
            <li>
              <a href="#">
                Chuyên khoa <br /> Tìm bác sĩ theo chuyên khoa
              </a>
            </li>
            <li>
              <a href="#">
                Cơ sở y tế <br /> Chọn bệnh viện phòng khám
              </a>
            </li>
            <li>
              <a href="#">
                Bác sĩ <br /> Chọn bác sĩ giỏi
              </a>
            </li>
            <li>
              <a href="#">
                Giói khám <br /> sức khỏe tổng quát
              </a>
            </li>
          </ul>
          <ul className="box-3">
            <li>
              <a>Hỗ trợ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-content_box-2">
        <div className="box-img">
          <img src={a1} />
          <div className="box-text">
            <div>
              <div className="box-text_h1 text-center">
                <h1>NỀN TẢNG Y TẾ</h1>
                <h1>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</h1>
              </div>
              <div className="box-text_input text-center">
                <input placeholder="Tìm lí do bệnh" type="text" />
              </div>
              <div className="box-text_app text-center">
                <h4>Google Play</h4>
                <h4>App Store</h4>
              </div>
            </div>
            <div>
              <ul className="box-text_ul">
                <li className="text-center">
                  <a href="#">
                    Khám <br />
                    Chuyên Khoa
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    Khám <br />
                    Từ Xa
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    Khám <br />
                    Tổng quát
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    Xét nghiệm <br />y học
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    Sức khỏe <br />
                    tinh thần
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    Khám <br />
                    nha Khoa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
