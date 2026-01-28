"use client";

import { useEffect, useRef } from "react";
import { contactInfo } from "@/data/products";

const contactMethods = [
    {
        name: "โทรศัพท์",
        nameEn: "Phone",
        value: contactInfo.phone,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        href: `tel:${contactInfo.phone.replace(/[-\s]/g, "")}`,
        color: "bg-green-500 hover:bg-green-600",
    },
    {
        name: "Line Official",
        nameEn: "Line",
        value: contactInfo.line,
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
        ),
        href: `https://line.me/R/ti/p/${contactInfo.line}`,
        color: "bg-[#00B900] hover:bg-[#00A000]",
    },
    {
        name: "Facebook",
        nameEn: "Facebook",
        value: contactInfo.facebook,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        href: `https://facebook.com/${contactInfo.facebook}`,
        color: "bg-[#1877F2] hover:bg-[#166FE5]",
    },
    {
        name: "อีเมล",
        nameEn: "Email",
        value: contactInfo.email,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        href: `mailto:${contactInfo.email}`,
        color: "bg-[#EA4335] hover:bg-[#D93025]",
    },
];

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-24 bg-gradient-to-br from-[#0A2463] via-[#1E3A8A] to-[#1E40AF] relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
                        ติดต่อเรา
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        สนใจ<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">สอบถามข้อมูล?</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                        ติดต่อทีมงานเพื่อสอบถามข้อมูลผลิตภัณฑ์ ขอใบเสนอราคา หรือปรึกษาเรื่องการจัดซื้อสำหรับหน่วยงาน
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 reveal">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            target={method.nameEn !== "Phone" && method.nameEn !== "Email" ? "_blank" : undefined}
                            rel={method.nameEn !== "Phone" && method.nameEn !== "Email" ? "noopener noreferrer" : undefined}
                            className={`${method.color} rounded-2xl p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    {method.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">{method.name}</p>
                                    <p className="text-white/80 text-sm">{method.value}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Main CTA */}
                <div className="bg-white rounded-3xl p-8 md:p-12 text-center reveal shadow-2xl">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-[#0A2463]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            สำหรับหน่วยงานและองค์กร
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            รองรับการจัดซื้อจัดจ้างภาครัฐ พร้อมเอกสารประกอบการจัดซื้อครบถ้วน
                            ใบเสนอราคา เอกสาร TOR และใบรับรองผลิตภัณฑ์
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`mailto:${contactInfo.email}?subject=สอบถามข้อมูลชุดผลิตภัณฑ์ควบคุมโรคไข้เลือดออก`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A2463] text-white font-semibold rounded-xl hover:bg-[#1E3A8A] transition-colors shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>ขอใบเสนอราคา</span>
                            </a>
                            <a
                                href={`tel:${contactInfo.phone.replace(/[-\s]/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A2463] font-semibold rounded-xl border-2 border-[#0A2463] hover:bg-blue-50 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>โทรสอบถาม</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Business Hours & Address */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 reveal text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{contactInfo.businessHours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{contactInfo.address}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
