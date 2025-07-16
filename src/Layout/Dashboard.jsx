import {
    FaAd,
    FaBook,
    FaCalendar,
    FaHome,
    FaList,
    FaMoneyCheck,
    FaShoppingCart,
    FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { LuContact, LuUsers } from "react-icons/lu";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart, refetch] = useCart();
    const cart_num = () => {
        refetch();
        return cart.length;
    };

    //Todo: get isAdmin value from the database
    const [isAdmin, isAdminLoading] = useAdmin();

    if (isAdminLoading) {
        return (
            <div className="p-4">
                <span className="loading loading-ball loading-xl"></span>
            </div>
        ); // or a spinner
    }

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 text-stone-900">
                <ul className="menu p-4">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminhome">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItem">
                                    <FaUtensils /> Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList /> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook /> Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <LuUsers /> All Users
                                </NavLink>
                            </li>
                            <li>
                                <div className="divider divider-neutral text-stone-950"></div>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/userhome">
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation">
                                    <FaCalendar /> Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaShoppingCart /> My Cart ({cart_num()})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payment-history">
                                    <FaMoneyCheck /> My Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review">
                                    <FaAd /> Add a Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaList /> My Bookings
                                </NavLink>
                            </li>
                            <li>
                                <div className="divider divider-neutral text-stone-950"></div>
                            </li>
                        </>
                    )}
                    {/* shared navlinks */}
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <MdOutlineRestaurantMenu></MdOutlineRestaurantMenu> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <MdBorderColor></MdBorderColor> Order
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <LuContact></LuContact> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
