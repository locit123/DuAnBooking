import React from "react";
import { useSelector } from "react-redux";
import { getLanguageState } from "../../../../../store/selector";
const LoadingPosition = ({ item }) => {
  const language = useSelector(getLanguageState);

  return (
    <option value={item.key}>
      {language === "en" ? item.valueEn : item.valueVi}
    </option>
  );
};

export default LoadingPosition;
