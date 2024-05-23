import React from "react";

const LoadingPosition = ({ item }) => {
  return <option value={item.key}>{item.valueEn}</option>;
};

export default LoadingPosition;
