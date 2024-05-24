import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Error,
  PrivateUser,
  PublicUser,
} from "./components/navigation/Navigation";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicUser />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<PrivateUser />}>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
