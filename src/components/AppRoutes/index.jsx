import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import NotFound from "../../pages/NotFound";
import Layout from "../Layout";
import Movies from "../../pages/Movies";
import MovieDetails from "../../pages/Movies/details";
import FavoritesPage from "../../pages/Favorites";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/movie/:id", element: <MovieDetails /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

function AppRoutes() {
  return <RouterProvider router={routes} />;
}

export default AppRoutes;
