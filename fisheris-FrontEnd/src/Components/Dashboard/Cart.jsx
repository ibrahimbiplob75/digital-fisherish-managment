import { FaTrashAlt, FaFish, FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";
import UseCart from "../../UseCart/UseCart";
import Swal from "sweetalert2";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = UseCart();
    const [axiosPublic] = AxiosPublic();
    const totalPrice = cart.reduce((sumPrice, item) => sumPrice + item.price, 0);
  
    const handleDelete = (id) => {
        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            text: "আপনি এই আইটেমটি মুছে ফেলতে চাচ্ছেন!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1A5F7A",
            cancelButtonColor: "#d33",
            confirmButtonText: "হ্যাঁ, মুছে ফেলুন!",
            cancelButtonText: "বাতিল করুন"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/carts/${id}`).then((res) => {
                    if (res.data.deletedCount) {
                        Swal.fire({
                            title: "মুছে ফেলা হয়েছে!",
                            text: "আপনার আইটেমটি মুছে ফেলা হয়েছে।",
                            icon: "success",
                        });
                    }
                    refetch();
                });
            }
        });
    }

    return (
        <div className="p-6 bg-[#f5f9fc] min-h-screen">
            <div className="bg-white rounded-lg shadow-md p-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center mb-4 md:mb-0">
                        <FaShoppingCart className="text-[#1A5F7A] text-3xl mr-3" />
                        <h2 className="text-2xl font-bold text-[#1A5F7A]">
                            আপনার কার্ট
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="bg-[#57C5B6] text-white px-4 py-2 rounded-full">
                            <span className="font-semibold">মোট আইটেম: {cart.length} টি</span>
                        </div>
                        <div className="bg-[#2B7DCE] text-white px-4 py-2 rounded-full flex items-center">
                            <FaMoneyBillWave className="mr-2" />
                            <span className="font-semibold">মোট মূল্য: {totalPrice} টাকা</span>
                        </div>
                    </div>
                </div>

                {/* Cart Items Table */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-[#1A5F7A] text-white">
                            <tr>
                                <th className="text-center">ক্রমিক</th>
                                <th>পণ্যের বিবরণ</th>
                                <th className="text-center">দাম</th>
                                <th className="text-center">পরিমাণ</th>
                                <th className="text-center">অ্যাকশন</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.length > 0 ? (
                                cart.map((item, index) => (
                                    <tr key={item._id} className="hover:bg-[#f0f7f7]">
                                        <td className="text-center font-medium">{index + 1}</td>
                                        <td>
                                            <div className="flex items-center space-x-4">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img 
                                                            src={item?.img || '/default-fish.png'} 
                                                            alt="পণ্যের ছবি" 
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.name}</div>
                                                    <div className="text-sm text-gray-500">
                                                        {item.category || 'মাছ/পোনা'}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center font-semibold">
                                            {item.price} টাকা
                                        </td>
                                        <td className="text-center">
                                            <span className="font-medium">1 কেজি</span>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="btn btn-ghost btn-sm text-red-600 hover:bg-red-50"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-10">
                                        <div className="flex flex-col items-center justify-center">
                                            <FaFish className="text-5xl text-gray-300 mb-4" />
                                            <p className="text-xl text-gray-500">আপনার কার্টে কোনো আইটেম নেই</p>
                                            <Link to="/fish-market" className="btn btn-primary mt-4 bg-[#1A5F7A] hover:bg-[#2B7DCE]">
                                                মাছের বাজার দেখুন
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Checkout Section */}
                {cart.length > 0 && (
                    <div className="mt-8 flex justify-end">
                        <Link 
                            to="/dashboard/payment" 
                            className="btn btn-primary bg-[#1A5F7A] hover:bg-[#2B7DCE] text-white"
                        >
                            <FaMoneyBillWave className="mr-2" />
                            পেমেন্ট করুন
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;