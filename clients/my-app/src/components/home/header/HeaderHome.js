import React, { useEffect, useState } from "react";
import "./Header.scss";
import a1 from "../../images/a1.png";
import { useTranslation } from "react-i18next";

const HeaderHome = () => {
  const { t, i18n } = useTranslation();

  const getItemLanguage = () => {
    const itemLanguage = localStorage.getItem("language");
    if (itemLanguage) {
      return i18n.changeLanguage(itemLanguage);
    }
    return null;
  };
  useEffect(() => {
    getItemLanguage();
  }, [i18n.language]);
  const handleClickLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

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
                {t("homeHeader.speciality")} <br />{" "}
                {t("homeHeader.searchDoctor")}
              </a>
            </li>
            <li>
              <a href="#">
                {t("homeHeader.healthFacility")} <br />{" "}
                {t("homeHeader.selectRoom")}
              </a>
            </li>
            <li>
              <a href="#">
                {t("homeHeader.doctor")} <br /> {t("homeHeader.selectDoctor")}
              </a>
            </li>
            <li>
              <a href="#">
                {t("homeHeader.fee")} <br /> {t("homeHeader.checkHealth")}
              </a>
            </li>
          </ul>
          <ul className="box-3">
            <li>
              <a href="#">{t("support")}</a>
            </li>
            <li>
              <div>
                <span
                  className={i18n.language === "vn" ? "vn" : "vn2"}
                  onClick={() => handleClickLanguage("vn")}
                >
                  VN
                </span>
              </div>
            </li>
            <li>
              <div>
                <span
                  className={i18n.language === "en" ? "vn" : "vn2"}
                  onClick={() => handleClickLanguage("en")}
                >
                  ENG
                </span>
              </div>
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
                <h1>{t("banner.title1")}</h1>
                <h1>{t("banner.title2")}</h1>
              </div>
              <div className="box-text_input text-center">
                <input placeholder="Tìm lí do bệnh" type="text" />
              </div>
              <div className="box-text_app text-center">
                <h4>{t("banner.title3")}</h4>
                <h4>{t("banner.title4")}</h4>
              </div>
            </div>
            <div>
              <ul className="box-text_ul">
                <li className="text-center">
                  <a href="#">
                    {i18n.language === "en" ? (
                      <div>
                        {t("banner.child1")} <br />
                        {t("banner.child0")}{" "}
                      </div>
                    ) : (
                      <div>
                        {t("banner.child0")} <br />
                        {t("banner.child1")}{" "}
                      </div>
                    )}
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    {i18n.language === "en" ? (
                      <div>
                        {t("banner.child2")} <br />
                        {t("banner.child0")}{" "}
                      </div>
                    ) : (
                      <div>
                        {t("banner.child0")} <br />
                        {t("banner.child2")}{" "}
                      </div>
                    )}
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    {i18n.language === "en" ? (
                      <div>
                        {t("banner.child3")} <br />
                        {t("banner.child0")}{" "}
                      </div>
                    ) : (
                      <div>
                        {t("banner.child0")} <br />
                        {t("banner.child3")}{" "}
                      </div>
                    )}
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    {i18n.language === "en" ? (
                      <div>
                        {t("banner.child5")} <br />
                        {t("banner.child4")}{" "}
                      </div>
                    ) : (
                      <div>
                        {t("banner.child4")} <br />
                        {t("banner.child5")}{" "}
                      </div>
                    )}
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    {i18n.language === "en" ? (
                      <div>
                        {t("banner.child7")} <br />
                        {t("banner.child6")}{" "}
                      </div>
                    ) : (
                      <div>
                        {t("banner.child6")} <br />
                        {t("banner.child7")}{" "}
                      </div>
                    )}
                  </a>
                </li>
                <li className="text-center">
                  <a href="#">
                    {i18n.language === "en" ? (
                      <div>
                        {t("banner.child8")} <br />
                        {t("banner.child0")}{" "}
                      </div>
                    ) : (
                      <div>
                        {t("banner.child0")} <br />
                        {t("banner.child8")}{" "}
                      </div>
                    )}
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

export default HeaderHome;
