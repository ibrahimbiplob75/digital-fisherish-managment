import React, { useState } from 'react';
import { FaFish, FaWater, FaShoppingCart, FaChartLine } from 'react-icons/fa';

const AddProject = ({ onAddProject }) => {
    const [project, setProject] = useState({
        title: '',
        progress: 0,
        members: 0,
        budget: '',
        iconType: 'fish' // default icon
    });

    const iconOptions = [
        { value: 'fish', label: 'মাছ সংক্রান্ত', icon: <FaFish /> },
        { value: 'water', label: 'পানি/হ্যাচারি', icon: <FaWater /> },
        { value: 'market', label: 'বাজার সংক্রান্ত', icon: <FaShoppingCart /> },
        { value: 'chart', label: 'পরিসংখ্যান', icon: <FaChartLine /> }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prev => ({
            ...prev,
            [name]: name === 'progress' || name === 'members' ? parseInt(value) || 0 : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            ...project,
            id: Date.now(), // generate a unique ID
            icon: getIconComponent(project.iconType)
        };
        onAddProject(newProject);
        // Reset form after submission
        setProject({
            title: '',
            progress: 0,
            members: 0,
            budget: '',
            iconType: 'fish'
        });
    };

    const getIconComponent = (iconType) => {
        switch (iconType) {
            case 'fish': return <FaFish className="text-3xl text-[#1A5F7A]" />;
            case 'water': return <FaWater className="text-3xl text-[#2B7DCE]" />;
            case 'market': return <FaShoppingCart className="text-3xl text-[#57C5B6]" />;
            case 'chart': return <FaChartLine className="text-3xl text-[#1A5F7A]" />;
            default: return <FaFish className="text-3xl text-[#1A5F7A]" />;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#1A5F7A] mb-6">নতুন প্রকল্প যোগ করুন</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="title">
                            প্রকল্পের নাম
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={project.title}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A5F7A]"
                            required
                            placeholder="প্রকল্পের নাম লিখুন"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="budget">
                            প্রকল্প বাজেট
                        </label>
                        <input
                            type="text"
                            id="budget"
                            name="budget"
                            value={project.budget}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A5F7A]"
                            required
                            placeholder="যেমন: ৫,২০,০০০ টাকা"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="progress">
                            অগ্রগতি ({project.progress}%)
                        </label>
                        <input
                            type="range"
                            id="progress"
                            name="progress"
                            min="0"
                            max="100"
                            value={project.progress}
                            onChange={handleChange}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="members">
                            সদস্য সংখ্যা
                        </label>
                        <input
                            type="number"
                            id="members"
                            name="members"
                            min="0"
                            value={project.members}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A5F7A]"
                            required
                        />
                    </div>
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        প্রকল্প আইকন নির্বাচন করুন
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                        {iconOptions.map((option) => (
                            <label 
                                key={option.value}
                                className={`flex flex-col items-center p-2 border rounded-md cursor-pointer ${
                                    project.iconType === option.value ? 'border-[#1A5F7A] bg-[#e6f2f2]' : 'border-gray-300'
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="iconType"
                                    value={option.value}
                                    checked={project.iconType === option.value}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <span className="text-xl mb-1">{option.icon}</span>
                                <span className="text-xs">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
                
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-[#1A5F7A] text-white rounded-md hover:bg-[#2B7DCE] focus:outline-none focus:ring-2 focus:ring-[#1A5F7A]"
                    >
                        প্রকল্প সংরক্ষণ করুন
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProject;