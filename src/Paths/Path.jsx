import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import Regis from "../Login/Regis";
import Details from "../Pages/Details";
import Squar from "../Pages/Squar";
import Private from "../AuthFile/Private";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <Private> <Details></Details> </Private>
            },
            {
                path: "/sq",
                element: <Private> <Squar></Squar></Private>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Regis></Regis>
            }
        ]
    },
]);

export default router;
