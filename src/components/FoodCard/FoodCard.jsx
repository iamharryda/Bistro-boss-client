import Swal from "sweetalert2/src/sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";

const FoodCard = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient()

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };

            axiosSecure
                .post("/carts", cartItem)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        // refetch cart to update the cart items
                        queryClient.invalidateQueries(["cart", user.email]);
                    }
                })
                .catch((err) => {
                    console.error("Failed to add to cart:", err);
                });
            // You can now use cartItem as needed, e.g., send to backend or update state
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!",
                customClass: {
                    confirmButton: "swal-confirm-button",
                    cancelButton: "swal-cancel-button",
                },
                buttonsStyling: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
                ${price}
            </p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
