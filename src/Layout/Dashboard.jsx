import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart, refetch] = useCart();
    const cart_num = () => {
        refetch()
        return cart.length
    }
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 text-stone-900">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userhome"><FaHome></FaHome> UserHome</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart({cart_num()})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaAd></FaAd> Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings"><FaList></FaList> My Bookings</NavLink>
                    </li>
                    <li>
                        <div className="divider text-stone-900"></div>
                    </li>
                    <li>
                        <NavLink to="/"><FaHome></FaHome> Home</NavLink>
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
