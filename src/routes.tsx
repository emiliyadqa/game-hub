import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetaiPage from "./pages/GameDetaiPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:is", element: <GameDetaiPage /> },
    ],
  },
]);

export default router;
