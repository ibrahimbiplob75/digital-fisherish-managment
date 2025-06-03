import React from 'react';
import { FaFish, FaWater, FaUsers, FaCalendarAlt, FaMoneyBillWave, FaChartLine, FaTasks, FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = ({ project, onBack }) => {
    const projectData = project || {
        id: 1,
        title: "নদীর মাছ সংরক্ষণ প্রকল্প",
        description: "এই প্রকল্পের মাধ্যমে নদীর স্থানীয় মাছের প্রজাতি সংরক্ষণ ও প্রজনন বৃদ্ধির জন্য কাজ করা হচ্ছে। স্থানীয় মৎস্য চাষীদের প্রশিক্ষণ প্রদান ও প্রয়োজনীয় সরঞ্জাম সরবরাহ করা হবে।",
        progress: 75,
        members: 12,
        budget: "৫,২০,০০০ টাকা",
        spent: "৩,৯০,০০০ টাকা",
        startDate: "১৫ জানুয়ারি, ২০২৩",
        endDate: "৩০ জুন, ২০২৪",
        icon: <FaFish className="text-4xl text-[#1A5F7A]" />,
        milestones: [
            { id: 1, name: "প্রাথমিক সমীক্ষা সম্পন্ন", completed: true, date: "২৮ ফেব্রুয়ারি, ২০২৩" },
            { id: 2, name: "মৎস্য চাষী নির্বাচন", completed: true, date: "১৫ এপ্রিল, ২০২৩" },
            { id: 3, name: "প্রশিক্ষণ সম্পন্ন", completed: true, date: "৩০ জুন, ২০২৩" },
            { id: 4, name: "পোনা অবমুক্তকরণ", completed: false, date: "৩০ সেপ্টেম্বর, ২০২৩" },
            { id: 5, name: "চূড়ান্ত মূল্যায়ন", completed: false, date: "১৫ জুন, ২০২৪" }
        ],
        teamMembers: [
            { id: 1, name: "রফিকুল ইসলাম", role: "প্রকল্প ব্যবস্থাপক" },
            { id: 2, name: "সুমাইয়া আক্তার", role: "মৎস্য বিশেষজ্ঞ" },
            { id: 3, name: "জাহিদ হাসান", role: "কর্মসূচি সমন্বয়কারী" },
            { id: 4, name: "নুসরাত জাহান", role: "অর্থ ব্যবস্থাপক" }
        ]
    };

    return (
        <div className="p-6 bg-[#f5f9fc] min-h-screen">
            <button 
                onClick={onBack}
                className="flex items-center text-[#1A5F7A] mb-6 hover:text-[#2B7DCE]"
            >
                <FaArrowLeft className="mr-2" /> সকল প্রকল্পে ফিরে যান
            </button>

            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start mb-4 md:mb-0">
                        <div className="p-3 rounded-full bg-[#e6f2f2] mr-4">
                            {projectData.icon}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-[#1A5F7A]">{projectData.title}</h1>
                            <p className="text-gray-600">{projectData.description}</p>
                        </div>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium">
                        {projectData.progress}% সম্পন্ন
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 space-y-6">
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-[#1A5F7A] mb-4 flex items-center">
                            <FaChartLine className="mr-2" /> প্রকল্প অগ্রগতি
                        </h2>
                        <div className="mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div 
                                    className="bg-[#57C5B6] h-3 rounded-full" 
                                    style={{ width: `${projectData.progress}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <span>শুরু</span>
                                <span>{projectData.progress}% সম্পন্ন</span>
                                <span>সমাপ্তি</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="border p-3 rounded-lg">
                                <p className="text-gray-500 text-sm">শুরুর তারিখ</p>
                                <p className="font-medium flex items-center">
                                    <FaCalendarAlt className="mr-2 text-[#1A5F7A]" /> {projectData.startDate}
                                </p>
                            </div>
                            <div className="border p-3 rounded-lg">
                                <p className="text-gray-500 text-sm">সমাপ্তির তারিখ</p>
                                <p className="font-medium flex items-center">
                                    <FaCalendarAlt className="mr-2 text-[#1A5F7A]" /> {projectData.endDate}
                                </p>
                            </div>
                            <div className="border p-3 rounded-lg">
                                <p className="text-gray-500 text-sm">বাজেট</p>
                                <p className="font-medium flex items-center">
                                    <FaMoneyBillWave className="mr-2 text-[#1A5F7A]" /> {projectData.budget}
                                </p>
                            </div>
                            <div className="border p-3 rounded-lg">
                                <p className="text-gray-500 text-sm">ব্যয় হয়েছে</p>
                                <p className="font-medium flex items-center">
                                    <FaMoneyBillWave className="mr-2 text-[#1A5F7A]" /> {projectData.spent}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Milestones Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-[#1A5F7A] mb-4 flex items-center">
                            <FaTasks className="mr-2" /> মাইলফলকসমূহ
                        </h2>
                        <div className="space-y-4">
                            {projectData.milestones.map(milestone => (
                                <div key={milestone.id} className="flex items-start">
                                    <div className={`p-2 rounded-full mr-4 ${milestone.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                                        {milestone.completed ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="flex-1 border-b pb-4">
                                        <h3 className={`font-medium ${milestone.completed ? 'text-gray-700' : 'text-gray-500'}`}>
                                            {milestone.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{milestone.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Team and Quick Info */}
                <div className="space-y-6">
                    {/* Team Members */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-[#1A5F7A] mb-4 flex items-center">
                            <FaUsers className="mr-2" /> দলগত সদস্য ({projectData.teamMembers.length} জন)
                        </h2>
                        <div className="space-y-3">
                            {projectData.teamMembers.map(member => (
                                <div key={member.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                                    <div className="bg-[#e6f2f2] text-[#1A5F7A] rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                        {member.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium">{member.name}</p>
                                        <p className="text-sm text-gray-500">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-[#1A5F7A] mb-4">প্রকল্প সংক্ষেপ</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">অগ্রগতি</span>
                                <span className="font-medium">{projectData.progress}%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">সময় বাকি</span>
                                <span className="font-medium">৯ মাস</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">সদস্য সংখ্যা</span>
                                <span className="font-medium">{projectData.members} জন</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">বাজেট বাকি</span>
                                <span className="font-medium">১,৩০,০০০ টাকা</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-[#1A5F7A] mb-4">অ্যাকশন</h2>
                        <div className="space-y-3">
                            <button className="w-full btn bg-[#1A5F7A] hover:bg-[#2B7DCE] text-white">
                                অগ্রগতি আপডেট করুন
                            </button>
                            <button className="w-full btn bg-[#57C5B6] hover:bg-[#2B7DCE] text-white">
                                রিপোর্ট ডাউনলোড করুন
                            </button>
                            <button className="w-full btn bg-[#2B7DCE] hover:bg-[#1A5F7A] text-white">
                                সদস্য যোগ করুন
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

