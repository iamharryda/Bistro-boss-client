
import { LuRepeat2 } from "react-icons/lu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import usePayments from "../../../hooks/usePayments"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const ManageBookings = () => {
    const { payments = [], refetch } = usePayments();
    const axiosSecure = useAxiosSecure();

    const changeToDone = (payment) => {
        Swal.fire({
            title: "Are you sure to change it to done?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "change it done",
        }).then((result) => {
            console.log(result);

            if (result.isConfirmed) {
                axiosSecure.patch(`/payments/status/${payment._id}`).then((res) => {

                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Great",
                            text: `Status marked Done now`,
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    return (
        <div>
            <div>
                <SectionTitle heading="Manage bookings" subHeading="All in your hand"></SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Tansaction Id</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>change status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {payment.transactionId}
                                </td>
                                <td>
                                    {payment.email}
                                </td>
                                <td>
                                    {payment.price} $
                                </td>
                                <td>
                                    {payment.status}
                                </td>
                                <td className="text-center">
                                    <button onClick={() => changeToDone(payment)} className="btn btn-primary bg-orange-700"><LuRepeat2></LuRepeat2></button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>

        </div>
    )
}

export default ManageBookings