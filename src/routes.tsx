import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetaiPage from "./pages/GameDetaiPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:is", element: <GameDetaiPage /> },
    ],
  },
]);

export default router;
