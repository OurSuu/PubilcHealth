"use client";

import { useEffect, useRef } from "react";
import { productSetInfo } from "@/data/products";

export default function About() {
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
            id="overview"
            ref={sectionRef}
            className="py-24 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0A2463] rounded-full text-sm font-semibold mb-4">
                        ภาพรวมชุดผลิตภัณฑ์
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        ทำไมต้อง<span className="text-[#0A2463]">ใช้หลายผลิตภัณฑ์?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        การควบคุมโรคไข้เลือดออกอย่างมีประสิทธิภาพต้องอาศัยการป้องกันหลายระดับ
                        ตั้งแต่การกำจัดแหล่งเพาะพันธุ์ การควบคุมประชากรยุง ไปจนถึงการป้องกันตัวเอง
                    </p>
                </div>

                {/* Prevention Flow Timeline */}
                <div className="relative mb-20 reveal">
                    {/* Connection Line - Desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400 -translate-y-1/2 rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {productSetInfo.preventionFlow.map((step, index) => (
                            <div
                                key={step.step}
                                className="relative"
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {/* Step Card */}
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                    {/* Step Number */}
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                                        style={{
                                            background: index === 0
                                                ? 'linear-gradient(135deg, #10B981, #059669)'
                                                : index === 1
                                                    ? 'linear-gradient(135deg, #3B82F6, #1E40AF)'
                                                    : 'linear-gradient(135deg, #06B6D4, #0891B2)'
                                        }}
                                    >
                                        {step.step}
                                    </div>

                                    {/* Step Icon */}
                                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                                        {index === 0 && (
                                            /* Larvae/Water Icon */
                                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            /* Fogging/Spray Icon */
                                            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            /* Personal Shield Icon */
                                            <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {step.titleEn}
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        {step.description}
                                    </p>

                                    {/* Product Badge */}
                                    <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                                        <span className="w-2 h-2 rounded-full"
                                            style={{
                                                background: index === 0 ? '#10B981' : index === 1 ? '#3B82F6' : '#06B6D4'
                                            }}
                                        />
                                        <span className="text-sm font-semibold text-gray-700">
                                            {step.product}
                                        </span>
                                    </div>
                                </div>

                                {/* Arrow - Mobile */}
                                {index < 2 && (
                                    <div className="flex md:hidden justify-center my-4">
                                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Message */}
                <div className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] rounded-3xl p-8 md:p-12 reveal">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                การป้องกันที่ครบวงจร
                            </h3>
                            <p className="text-white/80 text-lg leading-relaxed">
                                การใช้ผลิตภัณฑ์ทั้ง 3 ชนิดร่วมกันจะช่วยตัดวงจรชีวิตของยุงลายอย่างมีประสิทธิภาพ
                                ลดความเสี่ยงในการระบาดของโรคไข้เลือดออกในพื้นที่ของคุณ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
