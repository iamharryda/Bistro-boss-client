import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isAdmin) {
        return children;
    }

    // ✅ Optional: show access denied if logged in but not admin
    if (user && !isAdmin) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
