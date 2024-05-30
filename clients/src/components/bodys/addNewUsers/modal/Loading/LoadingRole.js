import React from "react";
import { useSelector } from "react-redux";
import { getLanguageState } from "../../../../../store/selector";
const LoadingRole = ({ item }) => {
  const language = useSelector(getLanguageState);
  console.log("[LANGUAGE]", language);
  return (
    <option value={item.key}>
      {language === "en" ? item.valueEn : item.valueVi}
    </option>
  );
};

export default LoadingRole;
