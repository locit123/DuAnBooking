import React from "react";

const LoadingGender = ({ item }) => {
  return <option value={item.key}>{item.valueEn}</option>;
};

export default LoadingGender;
