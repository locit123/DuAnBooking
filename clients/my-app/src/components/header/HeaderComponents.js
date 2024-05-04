import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import { useProvider } from "../useProvider/UseProvider";

const HeaderComponents = () => {
  const { t, i18n } = useTranslation();
  const [emailName, setEmailName] = useState("");
  const providerItems = useContext(useProvider);
  //----------------GET DATA
  const getData = useCallback(() => {
    let users = providerItems.user;
    setEmailName(users.DT.email);
  }, [providerItems.user]);
  useEffect(() => {
    getData();
  }, [getData]);
  //---------------get LANGUAGE--------------
  const getLanguage = useCallback(() => {
    let languageUser = localStorage.getItem("language");
    if (languageUser) {
      return i18n.changeLanguage(languageUser);
    }
    return i18n.language;
  }, [i18n]);
  useEffect(() => {
    getLanguage();
  }, [getLanguage]);
  //----------------------set language -------------------
  const handleClickVN = (languages) => {
    i18n.changeLanguage(languages);
    localStorage.setItem("language", languages);
  };

  const handleClick = () => {
    providerItems.setSaveDataUser(null);
    localStorage.removeItem("index");
  };
  return (
    <div>
      <Header
        li1={t("userManage.system")}
        li2={"|"}
        li3={"Logout"}
        li4={`${t("homeHeader.Welcome")}: ${emailName}`}
        li5={"VN"}
        li6={"EN"}
        li7={t("homeHeader.clinic")}
        li8={"|"}
        li9={t("homeHeader.Specialist")}
        li10={"|"}
        li11={t("homeHeader.Handbook")}
        li12={"|"}
        onClick2={() => handleClickVN("vn")}
        onClick3={() => handleClickVN("en")}
        onClick={() => handleClick()}
        className2={i18n.language === "vn" ? "textColor" : "textColor2"}
        className1={i18n.language === "en" ? "textColor" : "textColor2"}
      />
    </div>
  );
};

export { HeaderComponents };
