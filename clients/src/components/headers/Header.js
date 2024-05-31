import "./Header.scss";
import React, { useEffect } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getDataLoginState, getLanguageState } from "../../store/selector";
import { setLanguage } from "../../store/languages/actions";
import { LANGUAGE } from "../../store/languages/contants";
import { setLogOut } from "../../store/FetchApiLogin/actions";
function HeaderComponent(props) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(getLanguageState);
  console.log("LANGUAGE", language);
  const user = useSelector(getDataLoginState);

  useEffect(() => {
    i18n.changeLanguage(language);

    return () => {
      i18n.changeLanguage(language);
    };
  }, [language, i18n]);

  const handleClickLanguage = (value) => {
    dispatch(setLanguage(value));
  };

  const handleClickLogout = () => {
    let data = {};
    dispatch(setLogOut(data));
  };
  return (
    <header className="header">
      <div className="content-box">
        <p className="p">{t("UsersSystem")}</p>
        <span className="span"></span>
        <p className="p">{t("Clinics")}</p>
        <span className="span"></span>
        <p className="p">{t("Specialties")}</p>
        <span className="span"></span>
        <p className="p">{t("Handbook")}</p>
        <span className="span"></span>
      </div>
      <div className="content-box-2">
        <span>
          {t("Welcome")} {user.DT.email}
        </span>
        <span
          className={language === LANGUAGE.VI ? "clickLanguageVN" : "noneClick"}
          onClick={() => handleClickLanguage(LANGUAGE.VI)}
        >
          VN
        </span>
        <span
          className={language === LANGUAGE.EN ? "clickLanguageEN" : "noneClick"}
          onClick={() => handleClickLanguage(LANGUAGE.EN)}
        >
          EN
        </span>
        <LoginOutlined
          className="icon"
          title="logout"
          onClick={handleClickLogout}
        />
      </div>
    </header>
  );
}

export default HeaderComponent;
