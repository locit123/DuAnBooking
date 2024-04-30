import React from "react";
import ReactDOM from "react-dom/client"; // Sử dụng `react-dom` thay vì `react-dom/client`
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./components/config/Language";
import { ProviderElement } from "./components/useProvider/UseProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderElement>
      <Router>
        <App />
      </Router>
    </ProviderElement>
  </React.StrictMode>
);

reportWebVitals();
