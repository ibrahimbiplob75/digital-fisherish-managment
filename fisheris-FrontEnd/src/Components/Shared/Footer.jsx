import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A5F7A] text-white py-10">
      {/* Top Section with Company Info and Social Links */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between items-center">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current text-[#57C5B6] mr-3"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-1-14h2v5h-2zm0 7h2v2h-2z"/>
              </svg>
              <h3 className="text-xl font-semibold">ডিজিটাল অ্যাকুয়াকালচার</h3>
            </div>
            <p className="text-gray-300">
              মাছ চাষের আধুনিক ডিজিটাল সমাধান - ২০২৩ থেকে সেবা দিয়ে আসছি
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#2B7DCE] my-8"></div>

      {/* Bottom Section with Navigation and Copyright */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center md:text-left">
        <div className="md:flex justify-between items-center">
          {/* Navigation */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  হোম
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  সেবাসমূহ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  প্রশিক্ষণ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} ডিজিটাল অ্যাকুয়াকালচার ম্যানেজমেন্ট সিস্টেম। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;