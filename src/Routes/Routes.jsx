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
import BecomeAseller from "../Component/Form/BecomeAseller";
import Welcome from "../Component/Welcome";
import ReconCarsCategory from "../Pages/CarSection/BodyTypeCar/ReconCarsCategory";
import AddProduct from "../Pages/DashboardContent/AddProduct";

import MyProducts from "../Pages/DashboardContent/MyProducts";
import MyWishlist from "../Pages/DashboardContent/MyWishlist";
import Allusers from "../Component/DashBoard/Allusers";
import AllSellers from "../Pages/DashboardContent/AllSellers";
import AllBuyers from "../Pages/DashboardContent/AllBuyers";
import UpdateProduct from "../Pages/DashboardContent/UpdateProduct";
import AdminRoutes from "./AdminRoutes";
import HostRoutes from "./HostRoutes";

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
            },
            {
                path:'/category/:id',
                element: <ReconCarsCategory/>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:'',
                element: <PrivateRoute><Welcome/></PrivateRoute>
            },
            {
                path:'become-a-seller',
                element:<PrivateRoute><BecomeAseller/></PrivateRoute>
            },
            {
                path:'add-product',
                element: <HostRoutes><AddProduct/></HostRoutes>
            },
            {
                path:'my-product',
                element: <HostRoutes><MyProducts/></HostRoutes>
            },
            {
                path:'my-wishlist',
                element: <PrivateRoute><MyWishlist/></PrivateRoute>
            },
            {
                path:'all-users',
                element: <AdminRoutes><Allusers/></AdminRoutes>
            },
            {
                path:'all-sellers',
                element: <AdminRoutes><AllSellers/></AdminRoutes>
            },
            {
                path:'all-buyers',
                element: <AdminRoutes><AllBuyers/></AdminRoutes>
            },
            {
                path:'update-product/:id',
                element: <HostRoutes><UpdateProduct/></HostRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/all-car/${params.id}`)
            },
        ]
    }
])