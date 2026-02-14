
import Link from "next/link";
import React from "react";
const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Channel Checker</h3>
                    <p className="text-gray-400">Bringing you the best content since 2024</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
                        <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                        <li><Link href="/disclaimer" className="text-gray-400 hover:text-white">Disclaimer</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/terms-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Email: tejasgiri910@gmail.com</li>

                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Channel Checker. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
export default Footer