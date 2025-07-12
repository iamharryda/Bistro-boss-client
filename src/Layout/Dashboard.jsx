import {
    FaAd,
    FaBook,
    FaCalendar,
    FaHome,
    FaList,
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
    const isAdmin = useAdmin()

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 text-stone-900">
                <ul className="menu p-4">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminhome">
                                    <FaHome></FaHome> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItem">
                                    <FaUtensils></FaUtensils> Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook> Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <LuUsers></LuUsers> All users
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
                                    <FaHome></FaHome> UserHome
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar> Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart> My Cart({cart_num()})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review">
                                    <FaAd></FaAd> Add a Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaList></FaList> My Bookings
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
