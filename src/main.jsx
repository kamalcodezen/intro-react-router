import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Computer from "./components/Computer/Computer.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "computer", Component: Computer },
      { path: "app", Component: App },
      { path: "mobile", Component: Mobile },
      { path: "home", Component: Home },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
