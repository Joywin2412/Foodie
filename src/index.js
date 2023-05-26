import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.js";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter as Router } from "react-router-dom";
// require("dotenv").config();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
// process.env.REACT_APP_API_KEY = "123";
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
