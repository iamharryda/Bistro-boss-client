import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import { Cart } from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings";


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
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //normal user routes
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },

      // Admin only routes
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'bookings',
        element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`https://bistro-boss-server-with-auth-gold.vercel.app/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);