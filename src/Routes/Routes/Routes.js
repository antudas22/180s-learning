import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Library/Blog/Blog";
import Category from "../../Library/Category/Category";
import Courses from "../../Library/Courses/Courses";
import Error from "../../Library/Error/Error";
import Home from "../../Library/Home/Home";
import Login from "../../Library/Login/Login/Login";
import Register from "../../Library/Login/Register/Register";
import PremiumAccess from "../../Library/PremiumAccess/PremiumAccess";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://180s-learning-server.vercel.app/courses"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://180s-learning-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`https://180s-learning-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/premium/:id",
        element: (
          <PrivateRoute>
            <PremiumAccess></PremiumAccess>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://180s-learning-server.vercel.app/premium/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
