import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main-page/main-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
