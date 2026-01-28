"use client";

import Link from "next/link";
import { productSets } from "@/data/products";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463] via-[#1E3A8A] to-[#1E40AF]" />

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                <div className="animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/20">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-white/90 text-sm font-medium">
                            ผลิตภัณฑ์สาธารณสุขที่ได้รับการขึ้นทะเบียน อย.
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        โซลูชั่นควบคุมและป้องกันโรค
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
                            สำหรับหน่วยงานสาธารณสุข
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                        เราจัดหาผลิตภัณฑ์ควบคุมและป้องกันโรคที่มีคุณภาพสำหรับองค์กรปกครองส่วนท้องถิ่น
                        โรงพยาบาล โรงเรียน และหน่วยงานที่เกี่ยวข้อง ครอบคลุมการป้องกันไข้เลือดออก
                        โรคอุบัติซ้ำ-อุบัติใหม่ และโรคจากสัตว์พาหะ
                    </p>

                    {/* Solution Sets Preview */}
                    <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
                        {productSets.map((set, index) => (
                            <Link
                                key={set.id}
                                href={`#${set.id}`}
                                className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-4 border border-white/20 hover:bg-white/20 transition-colors text-left"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                                        style={{ background: set.colorScheme.accent }}
                                    >
                                        {index + 1}
                                    </span>
                                    <span className="text-white font-semibold text-sm">
                                        {set.nameEn}
                                    </span>
                                </div>
                                <p className="text-white/60 text-xs leading-relaxed">
                                    {set.objectiveEn}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#set-1"
                            className="px-8 py-4 bg-white text-[#0A2463] font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <span>ดูรายละเอียดผลิตภัณฑ์</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                        >
                            ติดต่อสอบถาม
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/60">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">ขึ้นทะเบียน อย.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">มาตรฐาน WHO</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">รับรอง GMP</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
