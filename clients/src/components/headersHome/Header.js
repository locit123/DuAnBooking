import React, { useCallback, useEffect, useState } from "react";
import { FloatButton } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";
import "./Header.scss";
import {
  MenuOutlined,
  PlusCircleOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/languages/actions";
import { useTranslation } from "react-i18next";
import { getLanguageState } from "../../store/selector";
const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);

  console.log("scroll", scroll);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(getLanguageState);

  const handleClickLanguage = useCallback(
    (value) => {
      dispatch(setLanguage(value));
    },
    [dispatch]
  );
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  //xu li header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      if (window.scrollY > 200) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClickToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={scroll ? "content-header2" : "content-header"}>
      <div className="box-1">
        <MenuOutlined className="icon-menu" />
        <PlusCircleOutlined className="icon-plus" />
        <span>BookingCare</span>
      </div>
      <div className="box-2">
        <ul className="text-1">
          <li>{t("Specialist")}</li>
          <li>{t("FindDoctorsBySpecialty")}</li>
        </ul>
        <ul className="text-1 text-2">
          <li>{t("HealthFacilities")}</li>
          <li>{t("ChooseAHospitalOrClinic")}</li>
        </ul>
        <ul className="text-1 text-3">
          <li>{t("Doctor")}</li>
          <li>{t("ChooseAGoodDoctor")}</li>
        </ul>
        <ul className="text-1 text-4">
          <li>{t("ExaminationPackage")}</li>
          <li>{t("GeneralHealthCheck")}</li>
        </ul>
      </div>
      <div className="box-3">
        <div className="text-1">
          <QuestionCircleFilled className="icon-support" />
          <span>{t("Support")}</span>
        </div>
        <div className="text-2">
          <span
            className={language === "vn" ? "clickVn" : "noneClick"}
            onClick={() => handleClickLanguage("vn")}
          >
            VN
          </span>
          <span
            className={language === "en" ? "clickEn" : "noneClick"}
            onClick={() => handleClickLanguage("en")}
          >
            EN
          </span>
        </div>
      </div>
      <div hidden={scrollToTop ? false : true}>
        <FloatButton
          onClick={handleClickToTop}
          icon={<CaretUpOutlined className="icon" />}
        />
      </div>
    </div>
  );
};

export default Header;
