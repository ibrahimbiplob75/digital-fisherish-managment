import React from 'react';
import { FaFish, FaSearch, FaShoppingCart, FaWeightHanging } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hatchery = () => {
    // Sample data - replace with your actual data from API
    const fingerlings = [
        {
            id: 1,
            name: 'রুই পোনা',
            price: 2.5,
            image: 'https://as2.ftcdn.net/v2/jpg/06/01/49/93/1000_F_601499373_GWtGuj27NFPYwhSaBGpFLoufyMzF8oZT.jpg',
            age: '30 দিন',
            size: '2-3 ইঞ্চি',
            stock: 5000
        },
        {
            id: 2,
            name: 'কাতলা পোনা',
            price: 3.0,
            image: 'https://as2.ftcdn.net/v2/jpg/06/01/49/93/1000_F_601499373_GWtGuj27NFPYwhSaBGpFLoufyMzF8oZT.jpg',
            age: '35 দিন',
            size: '2.5-3.5 ইঞ্চি',
            stock: 3000
        },
        {
            id: 3,
            name: 'মৃগেল পোনা',
            price: 2.8,
            image: 'https://as2.ftcdn.net/v2/jpg/06/01/49/93/1000_F_601499373_GWtGuj27NFPYwhSaBGpFLoufyMzF8oZT.jpg',
            age: '28 দিন',
            size: '2-2.5 ইঞ্চি',
            stock: 4000
        },
        {
            id: 4,
            name: 'সিলভার কার্প পোনা',
            price: 3.2,
            image: 'https://as2.ftcdn.net/v2/jpg/06/01/49/93/1000_F_601499373_GWtGuj27NFPYwhSaBGpFLoufyMzF8oZT.jpg',
            age: '40 দিন',
            size: '3-4 ইঞ্চি',
            stock: 2500
        },
        {
            id: 5,
            name: 'গ্রাস কার্প পোনা',
            price: 3.5,
            image: 'https://as2.ftcdn.net/v2/jpg/06/01/49/93/1000_F_601499373_GWtGuj27NFPYwhSaBGpFLoufyMzF8oZT.jpg',
            age: '45 দিন',
            size: '3.5-4.5 ইঞ্চি',
            stock: 2000
        },
        {
            id: 6,
            name: 'তেলাপিয়া পোনা',
            price: 1.8,
            image: 'https://as2.ftcdn.net/v2/jpg/06/01/49/93/1000_F_601499373_GWtGuj27NFPYwhSaBGpFLoufyMzF8oZT.jpg',
            age: '25 দিন',
            size: '1.5-2 ইঞ্চি',
            stock: 8000
        }
    ];

    return (
        <div className="bg-[#f5f9fc] min-h-screen">
            {/* Hero Section */}
            <div className="relative h-64 md:h-96 overflow-hidden">
                <img 
                    src="https://as2.ftcdn.net/v2/jpg/03/89/27/89/1000_F_389278912_vKuYELLgiVsxi7jXSMQesELhiU8BsZSd.jpg" 
                    alt="হ্যাচারি" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">হ্যাচারি পোনা ক্রয় করুন</h1>
                        <p className="text-lg md:text-xl mb-6">উচ্চ মানের রোগমুক্ত পোনা সংগ্রহ করুন সরাসরি হ্যাচারি থেকে</p>
                        
                        <div className="relative max-w-md mx-auto">
                            <input 
                                type="text" 
                                placeholder="পোনা খুঁজুন (রুই, কাতলা, তেলাপিয়া...)" 
                                className="w-full py-3 px-4 pr-12 rounded-full text-gray-800 focus:outline-none"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1A5F7A] text-white p-2 rounded-full">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Filter Section */}
                <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 text-[#1A5F7A] flex items-center">
                        <FaFish className="mr-2" /> পোনা ফিল্টার করুন
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <select className="select select-bordered w-full md:w-auto">
                            <option disabled selected>প্রজাতি</option>
                            <option>রুই</option>
                            <option>কাতলা</option>
                            <option>মৃগেল</option>
                            <option>তেলাপিয়া</option>
                        </select>
                        <select className="select select-bordered w-full md:w-auto">
                            <option disabled selected>বয়স</option>
                            <option>১-১৫ দিন</option>
                            <option>১৫-৩০ দিন</option>
                            <option>৩০-৪৫ দিন</option>
                            <option>৪৫+ দিন</option>
                        </select>
                        <select className="select select-bordered w-full md:w-auto">
                            <option disabled selected>আকার</option>
                            <option>১-২ ইঞ্চি</option>
                            <option>২-৩ ইঞ্চি</option>
                            <option>৩-৪ ইঞ্চি</option>
                            <option>৪+ ইঞ্চি</option>
                        </select>
                        <button className="btn bg-[#57C5B6] text-white hover:bg-[#2B7DCE]">
                            ফিল্টার করুন
                        </button>
                    </div>
                </div>

                {/* Fingerlings Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fingerlings.map(fish => (
                        <div key={fish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={fish.image} 
                                    alt={fish.name} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-[#1A5F7A] text-white px-2 py-1 rounded-full text-sm">
                                    {fish.stock.toLocaleString()} পোনা
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-[#1A5F7A] mb-2">{fish.name}</h3>
                                
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    <div className="flex items-center">
                                        <FaWeightHanging className="text-[#57C5B6] mr-1" />
                                        <span className="text-sm">আকার: {fish.size}</span>
                                    </div>
                                    <div className="text-sm">বয়স: {fish.age}</div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-2xl font-bold text-[#2B7DCE]">{fish.price} টাকা/পোনা</span>
                                    </div>
                                    <Link 
                                        to={`/hatchery/${fish.id}`} 
                                        className="btn btn-sm bg-[#1A5F7A] text-white hover:bg-[#2B7DCE] flex items-center"
                                    >
                                        <FaShoppingCart className="mr-1" /> ক্রয় করুন
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                    <div className="btn-group">
                        <button className="btn">«</button>
                        <button className="btn btn-active">১</button>
                        <button className="btn">২</button>
                        <button className="btn">৩</button>
                        <button className="btn">৪</button>
                        <button className="btn">»</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hatchery;