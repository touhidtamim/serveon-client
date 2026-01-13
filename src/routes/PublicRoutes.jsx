import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
