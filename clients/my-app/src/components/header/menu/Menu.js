import React, { useEffect, useState } from "react";
import "./Menu.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Menu = (props) => {
  const { t } = useTranslation();
  const navigates = useNavigate();
  const { classNameMenu1 } = props;
  const [checkColor, setCheckColor] = useState(0);
  const handleClickToCRUDRedux = (navigate, index) => {
    navigates(navigate);
    localStorage.setItem("index", index);
  };
  useEffect(() => {
    const getIndex = () => {
      let getNumber = localStorage.getItem("index");
      if (getNumber) {
        return setCheckColor(JSON.parse(getNumber));
      }
      return checkColor;
    };
    getIndex();
  }, [checkColor]);

  return (
    <div className="box-menu">
      <ul className={classNameMenu1}>
        <li
          className={checkColor === 0 ? "textColor" : "textColor2"}
          onClick={() => handleClickToCRUDRedux("/user", 0)}
        >
          {t("homeHeader.crudUser")}
        </li>
        <li
          className={checkColor === 1 ? "textColor" : "textColor2"}
          onClick={() => handleClickToCRUDRedux("/user-redux", 1)}
        >
          {t("homeHeader.crudRedux")}
        </li>
        <li>{t("homeHeader.managerDoctor")}</li>
        <li>{t("homeHeader.managerAdmin")}</li>
      </ul>
    </div>
  );
};

export default Menu;
