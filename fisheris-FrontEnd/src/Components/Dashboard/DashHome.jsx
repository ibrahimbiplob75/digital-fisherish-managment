import React, { useContext } from 'react';
import { AuthProvider } from '../../ContextProvider/ContextProvider';
import { FaFish, FaChartLine, FaUsers, FaWater, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashHome = () => {
    const { user } = useContext(AuthProvider);
    
    // Sample project data
    const projects = [
        {
            id: 1,
            title: "নদীর মাছ সংরক্ষণ",
            progress: 75,
            members: 12,
            budget: "৫,২০,০০০ টাকা",
            icon: <FaFish className="text-3xl text-[#1A5F7A]" />
        },
        {
            id: 2,
            title: "হ্যাচারি উন্নয়ন",
            progress: 45,
            members: 8,
            budget: "৩,৭৫,০০০ টাকা",
            icon: <FaWater className="text-3xl text-[#2B7DCE]" />
        },
        {
            id: 3,
            title: "মাছের বাজার সম্প্রসারণ",
            progress: 30,
            members: 5,
            budget: "২,৯০,০০০ টাকা",
            icon: <FaShoppingCart className="text-3xl text-[#57C5B6]" />
        }
    ];

    // Statistics data
    const stats = [
        { name: 'মোট মৎস্য চাষি', value: '২৫০+', icon: <FaUsers className="h-6 w-6" /> },
        { name: 'সক্রিয় প্রকল্প', value: '১২ টি', icon: <FaChartLine className="h-6 w-6" /> },
        { name: 'মোট পোনা উৎপাদন', value: '৫০,০০০+', icon: <FaFish className="h-6 w-6" /> },
        { name: 'মাসিক বিক্রয়', value: '৮,২০,০০০ টাকা', icon: <FaShoppingCart className="h-6 w-6" /> }
    ];

    return (
        <div className="p-6 bg-[#f5f9fc] min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#1A5F7A]">ড্যাশবোর্ড ওভারভিউ</h1>
                <p className="text-gray-600 mt-2">স্বাগতম, {user?.displayName || user?.email}</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6 flex items-start">
                        <div className="p-3 rounded-full bg-[#e6f2f2] mr-4">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                            <p className="text-2xl font-semibold text-[#1A5F7A]">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Projects Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-[#1A5F7A] mb-4 flex items-center">
                    <FaChartLine className="mr-2" /> চলমান প্রকল্পসমূহ
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-full bg-[#e6f2f2]">
                                        {project.icon}
                                    </div>
                                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">
                                        {project.progress}% সম্পন্ন
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-[#1A5F7A] mb-2">{project.title}</h3>
                                
                                <div className="mb-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div 
                                            className="bg-[#57C5B6] h-2.5 rounded-full" 
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-500">সদস্য</p>
                                        <p className="font-medium">{project.members} জন</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">বাজেট</p>
                                        <p className="font-medium">{project.budget}</p>
                                    </div>
                                </div>
                                
                                <Link to={"/dashboard/project"} className="mt-4 w-full btn btn-sm bg-[#1A5F7A] hover:bg-[#2B7DCE] text-white">
                                    বিস্তারিত দেখুন
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            {/* <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-[#1A5F7A] mb-4">দ্রুত অ্যাকশন</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="btn bg-[#1A5F7A] hover:bg-[#2B7DCE] text-white">
                        নতুন প্রকল্প যোগ করুন
                    </button>
                    <button className="btn bg-[#57C5B6] hover:bg-[#2B7DCE] text-white">
                        রিপোর্ট জেনারেট করুন
                    </button>
                    <button className="btn bg-[#2B7DCE] hover:bg-[#1A5F7A] text-white">
                        সদস্য ব্যবস্থাপনা
                    </button>
                    <button className="btn bg-[#1A5F7A] hover:bg-[#57C5B6] text-white">
                        বাজার বিশ্লেষণ
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default DashHome;