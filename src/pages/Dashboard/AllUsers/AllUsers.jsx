import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");

            return res.data;
        },
    });

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure to make admin?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "make admin",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Great",
                            text: `${user.name} is admin now`,
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="flex-col m-4">
            <div>
                <h2 className="text-4xl mb-4 w-full text-center">All Users</h2>
            </div>
            <div>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === "admin" ? (
                                        "Admin"
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaUsers className="text-red-500"></FaUsers>
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg"
                                    >
                                        <MdDelete className="text-red-500"></MdDelete>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
