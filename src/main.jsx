import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Computer from "./components/Computer/Computer.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";
import User from "./components/User/User.jsx";
import User2 from "./components/User2/User2.jsx";

const user2Data = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "computer", Component: Computer },
      { path: "app", Component: App },
      { path: "mobile", Component: Mobile },
      {
        path: "user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "/user2",
        element: (
          <Suspense fallback={<span>Loading.....</span>}>
            <User2 user2Data={user2Data}></User2>
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
