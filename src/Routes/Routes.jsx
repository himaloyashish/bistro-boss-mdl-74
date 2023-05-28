import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../home/Home";
import Menu from "../home/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUlp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRouter from "../Pages/PrivateRouter/PrivateRouter";
import DashBoard from "../LayOut/DashBoard/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/secret',
                element:<PrivateRouter><Secret></Secret></PrivateRouter>
            }
        ]
    },
    {
        path:'dashboard',
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:'myCart',
                element:<MyCart></MyCart>
            }
        ]
    }
])

export default router