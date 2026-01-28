import Link from "next/link";
import { companyInfo } from "@/data/products";

const footerLinks = [
    { name: "หน้าหลัก", href: "#hero" },
    { name: "ภาพรวม", href: "#overview" },
    { name: "ผลิตภัณฑ์", href: "#products" },
    { name: "ความปลอดภัย", href: "#safety" },
    { name: "ติดต่อ", href: "#contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <Link href="#hero" className="inline-flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#0A2463] rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
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
                            <div className="flex flex-col text-left">
                                <span className="text-lg font-bold leading-tight">{companyInfo.name}</span>
                                <span className="text-xs text-gray-400 leading-tight">{companyInfo.nameTh}</span>
                            </div>
                        </Link>
                        <p className="mt-3 text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
                            {companyInfo.taglineTh}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="text-center md:text-right">
                        <div className="flex justify-center md:justify-end gap-3 mb-4">
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                อย.
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                WHO
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                GMP
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} {companyInfo.name}. สงวนลิขสิทธิ์ทุกประการ
                        </p>
                        <div className="text-xs text-gray-600 text-center md:text-right max-w-xl">
                            <p>
                                ผลิตภัณฑ์ทั้งหมดได้รับการขึ้นทะเบียนตามกฎหมาย ใช้ตามคำแนะนำบนฉลากเท่านั้น
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
