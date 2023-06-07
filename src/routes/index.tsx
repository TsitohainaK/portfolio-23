import { lazy, startTransition } from "react";
import { createBrowserRouter } from "react-router-dom";

const NotFound = lazy(() => import("../views/Error/NotFound"));
const Home = lazy(() => import("../views/Home/Home"));

startTransition;
export default createBrowserRouter([
  {
    index: true,
    path: "",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);
