import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/home";
import ListReceitas from "./pages/Receitas/ListReceitas";
import ShowReceita from "./pages/Receitas/ShowReceita";
import Layout from "./pages/Receitas/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {
        path: "receitas",
        // element: <RootLayout />,
        children: [
          { index: true, element: <ListReceitas /> },
          { path: ":id", element: <ShowReceita /> },
        ],
      },
    ],
  },
]);

export default router;
