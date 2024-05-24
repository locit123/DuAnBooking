import React, { useCallback, useEffect } from "react";
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
  return (
    <div className="content-header">
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
    </div>
  );
};

export default Header;
