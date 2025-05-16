
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { globalRouterConfig } from "./libs/React-Router-Dom/globalRouterConfig";
import { StrictMode } from "react";
import "./Global.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={globalRouterConfig} />
  </StrictMode>
);
