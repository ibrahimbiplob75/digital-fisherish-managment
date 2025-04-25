import React from 'react';
import { FaFish, FaSearch, FaShoppingCart, FaWeightHanging, FaWater } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FishMarket = () => {
    // Sample data for large consumable fish
    const marketFish = [
        {
            id: 1,
            name: 'রুই মাছ',
            price: 350,
            image: 'https://as1.ftcdn.net/v2/jpg/05/00/22/04/1000_F_500220402_pHm2tnQMaKd9fPiLro7iv7zppd1rb4Mj.jpg',
            weight: '১-২ কেজি',
            origin: 'পদ্মা নদী',
            availability: 'প্রতিদিন'
        },
        {
            id: 2,
            name: 'কাতলা মাছ',
            price: 400,
            image: 'https://as1.ftcdn.net/v2/jpg/05/00/22/04/1000_F_500220402_pHm2tnQMaKd9fPiLro7iv7zppd1rb4Mj.jpg',
            weight: '২-৩ কেজি',
            origin: 'মেঘনা নদী',
            availability: 'সপ্তাহে ৩ দিন'
        },
        {
            id: 3,
            name: 'মৃগেল মাছ',
            price: 300,
            image: 'https://as1.ftcdn.net/v2/jpg/05/00/22/04/1000_F_500220402_pHm2tnQMaKd9fPiLro7iv7zppd1rb4Mj.jpg',
            weight: '১.৫-২.৫ কেজি',
            origin: 'জামুনা নদী',
            availability: 'প্রতিদিন'
        },
        {
            id: 4,
            name: 'সিলভার কার্প',
            price: 320,
            image: 'https://as1.ftcdn.net/v2/jpg/05/00/22/04/1000_F_500220402_pHm2tnQMaKd9fPiLro7iv7zppd1rb4Mj.jpg',
            weight: '২-৪ কেজি',
            origin: 'হ্যাচারি',
            availability: 'সপ্তাহে ৫ দিন'
        },
        {
            id: 5,
            name: 'গ্রাস কার্প',
            price: 380,
            image: 'https://as1.ftcdn.net/v2/jpg/05/00/22/04/1000_F_500220402_pHm2tnQMaKd9fPiLro7iv7zppd1rb4Mj.jpg',
            weight: '৩-৫ কেজি',
            origin: 'হ্যাচারি',
            availability: 'সপ্তাহে ৪ দিন'
        },
        {
            id: 6,
            name: 'তেলাপিয়া মাছ',
            price: 250,
            image: 'https://as1.ftcdn.net/v2/jpg/05/00/22/04/1000_F_500220402_pHm2tnQMaKd9fPiLro7iv7zppd1rb4Mj.jpg',
            weight: '০.৫-১ কেজি',
            origin: 'বাণিজ্যিক খামার',
            availability: 'প্রতিদিন'
        }
    ];

    return (
        <div className="bg-[#f5f9fc] min-h-screen">
            {/* Hero Section */}
            <div className="relative h-64 md:h-96 overflow-hidden">
                <img 
                    src="https://as2.ftcdn.net/v2/jpg/03/89/27/89/1000_F_389278912_vKuYELLgiVsxi7jXSMQesELhiU8BsZSd.jpg" 
                    alt="মাছ বাজার" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">তাজা মাছ ক্রয় করুন</h1>
                        <p className="text-lg md:text-xl mb-6">নদী ও হ্যাচারি থেকে সংগ্রহীত তাজা মাছ</p>
                        
                        <div className="relative max-w-md mx-auto">
                            <input 
                                type="text" 
                                placeholder="মাছ খুঁজুন (রুই, কাতলা, তেলাপিয়া...)" 
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
                        <FaFish className="mr-2" /> মাছ ফিল্টার করুন
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <select className="select select-bordered w-full md:w-auto">
                            <option disabled selected>প্রজাতি</option>
                            <option>রুই</option>
                            <option>কাতলা</option>
                            <option>মৃগেল</option>
                            <option>তেলাপিয়া</option>
                            <option>সিলভার কার্প</option>
                            <option>গ্রাস কার্প</option>
                        </select>
                        <select className="select select-bordered w-full md:w-auto">
                            <option disabled selected>ওজন</option>
                            <option>০.৫-১ কেজি</option>
                            <option>১-২ কেজি</option>
                            <option>২-৩ কেজি</option>
                            <option>৩+ কেজি</option>
                        </select>
                        <select className="select select-bordered w-full md:w-auto">
                            <option disabled selected>উৎস</option>
                            <option>নদী</option>
                            <option>হ্যাচারি</option>
                            <option>বাণিজ্যিক খামার</option>
                        </select>
                        <button className="btn bg-[#57C5B6] text-white hover:bg-[#2B7DCE]">
                            ফিল্টার করুন
                        </button>
                    </div>
                </div>

                {/* Fish Market Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marketFish.map(fish => (
                        <div key={fish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={fish.image} 
                                    alt={fish.name} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-[#1A5F7A] text-white px-2 py-1 rounded-full text-sm">
                                    {fish.availability}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-[#1A5F7A] mb-2">{fish.name}</h3>
                                
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    <div className="flex items-center">
                                        <FaWeightHanging className="text-[#57C5B6] mr-1" />
                                        <span className="text-sm">ওজন: {fish.weight}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaWater className="text-[#57C5B6] mr-1" />
                                        <span className="text-sm">উৎস: {fish.origin}</span>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-2xl font-bold text-[#2B7DCE]">{fish.price} টাকা/কেজি</span>
                                    </div>
                                    <Link 
                                        to={`/fish-market/${fish.id}`} 
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

export default FishMarket;