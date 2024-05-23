import React from "react";

const LoadingRole = ({ item }) => {
  return <option value={item.key}>{item.valueEn}</option>;
};

export default LoadingRole;
