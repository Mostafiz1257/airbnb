import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/Signup";
import RoomDetails from "../components/shared/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashBoardLayout";
import AddRoom from "../Page/Dashboard/AddRoom";
import { getSingleRoom } from "../api/addRoom";
import MyBookings from "../Page/Dashboard/MyBookings";
import MyListings from "../Page/Dashboard/MyListings";
import ManageBooking from "../Page/Dashboard/ManageBooking";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/room/:id',
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
                loader:({params})=>getSingleRoom(params.id)
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/add-room',
                element: <AddRoom></AddRoom>

            },
            {
                path:'/dashboard/my-bookings',
                element:<MyBookings></MyBookings>
            },
            {
                path:'/dashboard/my-listings',
                element:<MyListings></MyListings>
            },
            {
                path:'/dashboard/host-bookings',
                element:<ManageBooking></ManageBooking>
            }
        ]
    }
]);

