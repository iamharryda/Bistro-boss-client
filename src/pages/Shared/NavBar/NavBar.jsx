import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const [isAdmin, isAdminLoading] = useAdmin();
    //console.log(cart)

    if (isAdminLoading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    const navOptions = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/menu">Our Menu</Link>
            </li>
            <li>
                <Link to="/order/salad">Order Food</Link>
            </li>
            {
                isAdmin ? (
                    <li>
                        <Link to="/dashboard/adminhome">Dashboard</Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/dashboard/userhome">Dashboard</Link>
                    </li>
                )
            }
            <li>
                <Link to="/">Contact</Link>
            </li>
            <li>
                <Link to="/dashboard/cart">
                    <button className="btn">
                        <FaShoppingCart className="mr-2"></FaShoppingCart> <div className="badge badge-sm badge-secondary">+{cart?.length || 0}</div>
                    </button>
                </Link>
            </li>

            {user ? (
                <>
                    {/* <span>{user?.displayName}</span> */}
                    <button onClick={handleLogOut} className="btn btn-ghost">
                        LogOut
                    </button>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </>
            )}
        </>
    );

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </>
    );
};

export default NavBar;
