import React, { useState } from "react";
import {
  FaBars,
  FaHome,
  FaChartLine,
  FaShoppingCart,
  FaHistory,
  FaCommentAlt,
  FaBookmark,
  FaFish,
  FaWater,
  FaUserCog,
  FaUsers,
  FaClipboardList,
  FaGlobe
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import CheckAdmin from "../../CheckAdmin/CheckAdmin";

const Dashboard = () => {
  const [isAdmin] = CheckAdmin();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-4 text-[#1A5F7A] lg:hidden absolute z-50"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 min-h-screen bg-[#1A5F7A] text-white p-5 shadow-lg transform transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:inset-0`}
      >
        <h2 className="text-white text-2xl font-bold mb-8 border-b-2 border-[#57C5B6] pb-3">
          ড্যাশবোর্ড
        </h2>
        
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/dashboard/home"
              className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
              activeClassName="bg-[#2B7DCE]"
            >
              <FaHome className="mr-3" /> হোম
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/dashboard/analytics"
              className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
              activeClassName="bg-[#2B7DCE]"
            >
              <FaChartLine className="mr-3" /> বিশ্লেষণ
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
              activeClassName="bg-[#2B7DCE]"
            >
              <FaShoppingCart className="mr-3" /> বাজার
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/history"
              className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
              activeClassName="bg-[#2B7DCE]"
            >
              <FaHistory className="mr-3" /> ইতিহাস
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reviews"
              className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
              activeClassName="bg-[#2B7DCE]"
            >
              <FaCommentAlt className="mr-3" /> রিভিউ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/saved"
              className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
              activeClassName="bg-[#2B7DCE]"
            >
              <FaBookmark className="mr-3" /> সেভ করা
            </NavLink>
          </li>

          {isAdmin && (
            <>
              <li className="mt-6 mb-2 text-[#57C5B6] text-lg font-medium">
                প্রশাসক বিভাগ
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-fish"
                  className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
                  activeClassName="bg-[#2B7DCE]"
                >
                  <FaFish className="mr-3" /> মাছ যোগ করুন
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-ponds"
                  className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
                  activeClassName="bg-[#2B7DCE]"
                >
                  <FaWater className="mr-3" /> পুকুর ব্যবস্থাপনা
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-orders"
                  className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
                  activeClassName="bg-[#2B7DCE]"
                >
                  <FaClipboardList className="mr-3" /> অর্ডার ব্যবস্থাপনা
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
                  activeClassName="bg-[#2B7DCE]"
                >
                  <FaUsers className="mr-3" /> ব্যবহারকারীরা
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="border-t border-[#57C5B6] mt-8 pt-5">
          <NavLink
            to="/"
            className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all"
          >
            <FaGlobe className="mr-3" /> মূল ওয়েবসাইট
          </NavLink>
          <NavLink
            to="/fish-market"
            className="flex items-center hover:bg-[#2B7DCE] px-4 py-3 rounded-lg transition-all mt-3"
          >
            <FaFish className="mr-3" /> মাছের বাজার
          </NavLink>
        </div>
      </div>

      {/* Content Area */}
      <div
        className="flex-1 p-6 transition-all lg:ml-64 bg-[#f5f9fc]"
        onClick={() => setIsOpen(false)}
      >
        <Outlet />
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;