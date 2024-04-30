import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import { useProvider } from "../useProvider/UseProvider";

const HeaderComponents = () => {
  const { t, i18n } = useTranslation();
  const [emailName, setEmailName] = useState("");
  const providerItems = useContext(useProvider);
  //----------------GET DATA
  const getData = () => {
    let users = providerItems.user;
    setEmailName(users.DT.email);
  };
  useEffect(() => {
    getData();
  }, []);
  //---------------check color language -------------------
  const [checkColor, setCheckColor] = useState("");
  console.log(checkColor);
  //---------------get LANGUAGE--------------
  const getLanguage = () => {
    let languageUser = localStorage.getItem("language");
    if (languageUser) {
      setCheckColor(languageUser);
      return i18n.changeLanguage(languageUser);
    }
    return i18n.language;
  };
  useEffect(() => {
    getLanguage();
  }, [i18n.language]);
  //----------------------set language -------------------
  const handleClickVN = (languages) => {
    i18n.changeLanguage(languages);
    localStorage.setItem("language", languages);
  };

  const handleClick = () => {
    providerItems.setSaveDataUser(null);
  };
  return (
    <div>
      <Header
        li1={t("userManage.system")}
        li2={"|"}
        li3={"Logout"}
        li4={`Xin Chào:${emailName}`}
        li5={"VN"}
        li6={"EN"}
        onClick2={() => handleClickVN("vn")}
        onClick3={() => handleClickVN("en")}
        onClick={() => handleClick()}
        className2={checkColor === "vn" ? "textColor" : "textColor2"}
        className1={checkColor === "en" ? "textColor" : "textColor2"}
      />
    </div>
  );
};

export { HeaderComponents };
