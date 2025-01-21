// Navbar Component
import React from "react";
const Navbar = () => (
    <nav className="bg-white shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
                {/* Replace with your logo */}
                <div className="text-3xl font-bold">
                    <span className="text-gray-400 cursor-pointer">Channel</span>
                    <span className="text-emerald-500 cursor-pointer">{" "} Checker</span>
                </div>
            </div>
        </div>
    </nav>
);


export default Navbar;