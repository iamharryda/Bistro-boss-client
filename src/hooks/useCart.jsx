import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

function useCart() {
    // ten stack query
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["cart", user?.email],
        enabled: !!user?.email,
        staleTime: 0,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        },
    });
    return [cart, refetch];
}

export default useCart;
