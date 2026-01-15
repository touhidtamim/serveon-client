import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "./../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
