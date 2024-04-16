import {
    createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import Regis from "../Login/Regis";
import Details from "../Pages/Details";
import Squar from "../Pages/Squar";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            },
            {
                path:"/sq",
                element: <Squar></Squar>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Regis></Regis>
            }
        ]
    },
]);

export default router;
