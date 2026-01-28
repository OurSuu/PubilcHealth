"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { name: "หน้าหลัก", href: "#hero" },
    { name: "ไข้เลือดออก", href: "#set-1" },
    { name: "โรคอุบัติซ้ำ", href: "#set-2" },
    { name: "สัตว์พาหะ", href: "#set-3" },
    { name: "ความปลอดภัย", href: "#safety" },
    { name: "ติดต่อ", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#hero" className="flex items-center gap-2">
                        <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled ? "bg-[#0A2463]" : "bg-white/20"
                                }`}
                        >
                            {/* Shield Health Icon */}
                            <svg
                                className={`w-6 h-6 ${isScrolled ? "text-white" : "text-white"}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span
                                className={`text-lg font-bold leading-tight ${isScrolled ? "text-[#0A2463]" : "text-white"
                                    }`}
                            >
                                Public Health
                            </span>
                            <span
                                className={`text-xs font-medium leading-tight ${isScrolled ? "text-gray-500" : "text-white/70"
                                    }`}
                            >
                                Chemical Solutions
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:opacity-80 ${isScrolled ? "text-gray-700 hover:text-[#0A2463]" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${isScrolled
                                ? "bg-[#0A2463] text-white hover:bg-[#1E3A8A]"
                                : "bg-white text-[#0A2463] hover:bg-white/90"
                                }`}
                        >
                            ติดต่อเรา
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-[#0A2463]" : "text-white"
                            }`}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-fade-in">
                        <div className="bg-white rounded-xl shadow-xl p-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 bg-[#0A2463] text-white text-center rounded-lg font-semibold mt-2"
                            >
                                ติดต่อเรา
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
