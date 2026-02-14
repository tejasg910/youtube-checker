// Navbar Component
import React from "react";
import Link from "next/link";

const Navbar = () => (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
                <Link href="/" className="text-3xl font-bold flex items-center">
                    <span className="text-gray-400 cursor-pointer">Channel</span>
                    <span className="text-emerald-500 cursor-pointer">{" "} Checker</span>
                </Link>
            </div>
            <div className="flex items-center space-x-4 md:space-x-8 overflow-x-auto w-full md:w-auto justify-center">
                <Link href="/" className="text-gray-600 hover:text-emerald-500 font-medium transition-colors whitespace-nowrap">
                    Home
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-500 font-medium transition-colors whitespace-nowrap">
                    Blog
                </Link>
                <Link href="/about-us" className="text-gray-600 hover:text-emerald-500 font-medium transition-colors whitespace-nowrap">
                    About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-emerald-500 font-medium transition-colors whitespace-nowrap">
                    Contact
                </Link>
            </div>
        </div>
    </nav>
);


export default Navbar;