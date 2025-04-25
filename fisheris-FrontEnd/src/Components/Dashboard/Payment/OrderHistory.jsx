import React, { useContext } from 'react';
import { AuthProvider } from '../../../ContextProvider/ContextProvider';
import UseAxiosSecure from '../../../AxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaFish, FaHistory, FaMoneyBillWave, FaReceipt } from 'react-icons/fa';

const OrderHistory = () => {
    const {user} = useContext(AuthProvider);
    const [axiosSecure] = UseAxiosSecure();
    
    const {
      data: orders = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["payments", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`);
        return res.data;
      },
    });

    if (isLoading) return <div className="text-center py-10">লোড হচ্ছে...</div>;

    return (
      <div className="p-6 bg-[#f5f9fc] min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <FaHistory className="text-[#1A5F7A] text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-[#1A5F7A]">
                আপনার অর্ডার ইতিহাস
              </h2>
            </div>
            <div className="bg-[#57C5B6] text-white px-4 py-2 rounded-full">
              <span className="font-semibold">মোট অর্ডার: {orders.length} টি</span>
            </div>
          </div>

          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-[#1A5F7A] text-white">
                <tr>
                  <th className="text-center">ক্রমিক</th>
                  <th>পণ্যের বিবরণ</th>
                  <th className="text-center">দাম</th>
                  <th className="text-center">ট্রানজেকশন আইডি</th>
                  <th className="text-center">তারিখ</th>
                  <th className="text-center">স্ট্যাটাস</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((item, index) => (
                    <tr key={item._id} className="hover:bg-[#f0f7f7]">
                      <td className="text-center font-medium">{index + 1}</td>
                      <td>
                        <div className="flex items-center space-x-4">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item?.img || '/default-fish.png'} alt="পণ্যের ছবি" />
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
                      <td className="text-center">
                        <div className="flex items-center justify-center">
                          <FaMoneyBillWave className="text-[#57C5B6] mr-1" />
                          <span className="font-semibold">{item.price} টাকা</span>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="flex items-center justify-center">
                          <FaReceipt className="text-[#2B7DCE] mr-1" />
                          <span className="font-mono text-sm">{item.transactionId}</span>
                        </div>
                      </td>
                      <td className="text-center">
                        {new Date(item.date).toLocaleDateString('bn-BD')}
                      </td>
                      <td className="text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : item.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {item.status === 'completed' ? 'সম্পন্ন' : 
                           item.status === 'pending' ? 'মুলতুবি' : 'বাতিল'}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-10">
                      <div className="flex flex-col items-center justify-center">
                        <FaFish className="text-5xl text-gray-300 mb-4" />
                        <p className="text-xl text-gray-500">আপনার কোনো অর্ডার ইতিহাস নেই</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          {orders.length > 0 && (
            <div className="mt-8 p-4 bg-[#e6f2f2] rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-gray-600 font-medium">মোট খরচ</h3>
                  <p className="text-2xl font-bold text-[#1A5F7A]">
                    {orders.reduce((sum, item) => sum + item.price, 0)} টাকা
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-gray-600 font-medium">সফল অর্ডার</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {orders.filter(item => item.status === 'completed').length} টি
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-gray-600 font-medium">প্রথম অর্ডার</h3>
                  <p className="text-lg font-medium text-[#2B7DCE]">
                    {orders.length > 0 
                      ? new Date(orders[orders.length-1].date).toLocaleDateString('bn-BD') 
                      : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default OrderHistory;