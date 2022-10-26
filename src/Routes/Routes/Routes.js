import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Library/Category/Category";
import Courses from "../../Library/Courses/Courses";
import Home from "../../Library/Home/Home";
import PremiumAccess from "../../Library/PremiumAccess/PremiumAccess";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/premium/:id',
                element: <PremiumAccess></PremiumAccess>,
                loader: ({params}) => fetch(`http://localhost:5000/premium/${params.id}`)
            }
        ]
    }
]);