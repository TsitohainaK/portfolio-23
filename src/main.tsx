import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/700-italic.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
