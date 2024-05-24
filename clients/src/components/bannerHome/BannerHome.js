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
import { useTranslation } from "react-i18next";
const BannerHome = (props) => {
  const { t } = useTranslation();
  return (
    <div className="content-banner">
      <div className="img">
        <img src={a1} alt="hinh anh" />
      </div>
      <div>
        <div className="content-box">
          <div className="box-1">
            <span>{t("MEDICAL_FOUNDATION")}</span>
            <span>{t("COMPREHENSIVE_HEALTH_CARE")}</span>
          </div>
          <div className="box-2">
            <SearchOutlined className="icon-search" />
            <input placeholder={t("FindAReasonToTest")} />
          </div>
        </div>
        <div className="box-footer">
          <div className="box-1">
            <div className="icon">
              <BankFilled className="icon-bank" />
            </div>
            <span>{t("Examination")}</span>
            <span>{t("Specialist")}</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <MobileFilled className="icon-bank" />
            </div>
            <span>{t("Examination")}</span>
            <span>{t("fromFarAway")}</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <BookFilled className="icon-bank" />
            </div>
            <span>{t("Examination")}</span>
            <span>{t("generality")}</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <MedicineBoxFilled className="icon-bank" />
            </div>
            <span>{t("Test")}</span>
            <span>{t("medicine")}</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <UserAddOutlined className="icon-bank" />
            </div>
            <span>{t("Health")}</span>
            <span>{t("spirit")}</span>
          </div>
          <div className="box-1">
            <div className="icon">
              <HeartFilled className="icon-bank" />
            </div>
            <span>{t("Examination")}</span>
            <span>{t("dentistry")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
