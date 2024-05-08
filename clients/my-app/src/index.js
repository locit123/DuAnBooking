import React from "react";
import ReactDOM from "react-dom/client"; // Sử dụng `react-dom` thay vì `react-dom/client`
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./components/config/Language";
import { ProviderElement } from "./components/useProvider/UseProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderElement>
      <Router>
        <App />
      </Router>
    </ProviderElement>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition="Bounce"
    />
    {/* Same as */}
    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();
