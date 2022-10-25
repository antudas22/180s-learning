import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Library/Category/Category";
import Courses from "../../Library/Courses/Courses";
import Home from "../../Library/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            }
        ]
    }
]);