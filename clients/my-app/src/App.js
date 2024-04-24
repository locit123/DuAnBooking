import "./App.css";
import Login from "./components/logins/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import UserManages from "./components/users/UserManages";
import { PublicRoute, PrivateRoute } from "./components/authRouter/authRouter";
import { useState } from "react";
function App() {
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

  return (
    <Routes>
      <Route element={<PublicRoute user={user} />}>
        <Route path="/login" element={<Login setData={setSaveDataUser} />} />
      </Route>
      <Route element={<PrivateRoute user={user} />}>
        <Route
          path="/"
          element={<UserManages getData={user} setUser={setSaveDataUser} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
