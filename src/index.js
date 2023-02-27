import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routing/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
