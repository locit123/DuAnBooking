import "./App.css";
import Login from "./components/logins/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import UserManages from "./components/users/UserManages";
import { PublicRoute, PrivateRoute } from "./components/authRouter/authRouter";
import UserRedux from "./components/users/UserRedux";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/user" element={<UserManages />} />
        <Route path="/" element={<Home />} />
        <Route path="/user-redux" element={<UserRedux />} />
      </Route>
    </Routes>
  );
}

export default App;
