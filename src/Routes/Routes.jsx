import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CarDetails from "../Pages/CarDetails/CarDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Toyota from "../Pages/CarSection/Toyota/Toyota";
import Honda from "../Pages/CarSection/Honda";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/car-details/:id',
                element: <CarDetails/>,
                loader: ({params})=> fetch(`http://localhost:5000/all-car/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path:'/car-maker/toyota',
                element:<Toyota/>
            },
            {
                path:'/car-maker/honda',
                element:<Honda/>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[

        ]
    }
])