import React from "react";
import "./Menu.scss";
import { useTranslation } from "react-i18next";

const Menu = (props) => {
  const { t } = useTranslation();
  const { classNameMenu1, classNameMenu2 } = props;
  return (
    <div className="box-menu">
      <ul className={classNameMenu1}>
        <li>{t("systemManagement")}</li>
        <ul className={classNameMenu2}>
          <li>
            <a href="/user">{t("manageUsers")}</a>
          </li>
          <li>
            <a href="/user-redux">{t("ManageReduxUsers")}</a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Menu;
