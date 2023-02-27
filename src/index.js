import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routing/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);
