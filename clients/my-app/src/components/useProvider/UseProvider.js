import { createContext, useState } from "react";

const useProvider = createContext();

const ProviderElement = ({ children }) => {
  const getDataUserInfo = () => {
    let userData = localStorage.getItem("user");
    if (userData) {
      return JSON.parse(userData);
    }

    return null;
  };

  const [user, setUser] = useState(getDataUserInfo);
  const setSaveDataUser = (userInfo) => {
    if (!userInfo) {
      localStorage.removeItem("user");
      setUser(null);
    } else {
      localStorage.setItem("user", JSON.stringify(userInfo));
      setUser(userInfo);
    }
  };

  //----------------------------ADD DATA--------------------------
  const values = {
    getDataUserInfo,
    user,
    setUser,
    setSaveDataUser,
  };
  return <useProvider.Provider value={values}>{children}</useProvider.Provider>;
};

export { ProviderElement, useProvider };
