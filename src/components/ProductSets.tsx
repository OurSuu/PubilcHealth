"use client";

import React, { useEffect, useRef } from "react";
import { productSets, getProductsBySet } from "@/data/products";
import ImageGallery from "./ImageGallery";

const setIcons: Record<string, React.ReactElement> = {
    mosquito: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    shield: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    pest: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    )
};

const setLabels: Record<string, string> = {
    "set-1": "ชุดที่ 1",
    "set-2": "ชุดที่ 2",
    "set-3": "ชุดที่ 3"
};

export default function ProductSets() {
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
            id="product-sets"
            ref={sectionRef}
            className="py-24 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0A2463] rounded-full text-sm font-semibold mb-4">
                        ชุดโซลูชั่น
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {productSets.length} ชุดผลิตภัณฑ์<span className="text-[#0A2463]">ครบวงจร</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        เลือกชุดผลิตภัณฑ์ที่เหมาะกับความต้องการของหน่วยงาน
                        ครอบคลุมการป้องกันโรคไข้เลือดออก โรคอุบัติซ้ำ-อุบัติใหม่ และโรคจากสัตว์พาหะ
                    </p>
                </div>

                {/* Product Sets - Full Width Cards */}
                <div className="space-y-12 reveal">
                    {productSets.map((set, index) => {
                        const setProducts = getProductsBySet(set.id);
                        return (
                            <div
                                key={set.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Set Header */}
                                <div
                                    className="p-6 text-white"
                                    style={{ background: `linear-gradient(135deg, ${set.colorScheme.primary}, ${set.colorScheme.secondary})` }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: `${set.colorScheme.accent}40` }}
                                        >
                                            {setIcons[set.icon]}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/70 text-xs uppercase tracking-wider mb-1">
                                                {setLabels[set.id]}
                                            </p>
                                            <h3 className="text-xl font-bold leading-tight">
                                                {set.nameEn}
                                            </h3>
                                            <p className="text-white/80 text-sm mt-1">
                                                {set.objective}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Grid */}
                                <div className="grid lg:grid-cols-2 gap-6 p-6">
                                    {/* Left: Image Gallery */}
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">
                                            เอกสารและภาพผลิตภัณฑ์ ({set.images.length} รูป)
                                        </p>
                                        <ImageGallery
                                            images={set.images}
                                            accentColor={set.colorScheme.accent}
                                            setName={set.nameEn}
                                        />
                                    </div>

                                    {/* Right: Info */}
                                    <div className="space-y-6">
                                        {/* Prevention Flow */}
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">
                                                ขั้นตอนการป้องกัน
                                            </p>
                                            <div className="space-y-3">
                                                {set.preventionFlow.map((step) => (
                                                    <div key={step.step} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                                                        <div
                                                            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                                                            style={{ background: set.colorScheme.accent }}
                                                        >
                                                            {step.step}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-semibold text-gray-800">
                                                                {step.title}
                                                            </p>
                                                            <p className="text-xs text-gray-500">
                                                                {step.description} • <span className="font-medium">{step.product}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Products List */}
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">
                                                ผลิตภัณฑ์ในชุด ({setProducts.length})
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                {setProducts.map((product) => (
                                                    <div
                                                        key={product.id}
                                                        className="p-3 bg-gray-50 rounded-xl border border-gray-100"
                                                    >
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <div
                                                                className="w-2 h-2 rounded-full flex-shrink-0"
                                                                style={{ background: set.colorScheme.accent }}
                                                            />
                                                            <p className="text-sm font-semibold text-gray-800 truncate">
                                                                {product.name}
                                                            </p>
                                                        </div>
                                                        <p className="text-xs text-gray-500 pl-4">
                                                            {product.categoryTh}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div>
                                            <a
                                                href="#products"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                                                style={{
                                                    background: `${set.colorScheme.accent}15`,
                                                    color: set.colorScheme.accent
                                                }}
                                            >
                                                <span>ดูรายละเอียดผลิตภัณฑ์</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Use Case Comparison */}
                <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden reveal">
                    <div className="p-5 bg-[#0A2463]">
                        <h3 className="text-lg font-bold text-white text-center">
                            เปรียบเทียบการใช้งาน
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        กรณีใช้งาน
                                    </th>
                                    {productSets.map((set) => (
                                        <th key={set.id} className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider" style={{ color: set.colorScheme.accent }}>
                                            {setLabels[set.id]}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-gray-700">ควบคุมยุงและไข้เลือดออก</td>
                                    <td className="px-4 py-3 text-center"><span className="text-green-500">✓</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                </tr>
                                <tr className="bg-gray-50/50">
                                    <td className="px-4 py-3 text-sm text-gray-700">ฆ่าเชื้อไวรัสและแบคทีเรีย</td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-green-500">✓</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-gray-700">ควบคุมนกและหนู</td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-green-500">✓</span></td>
                                </tr>
                                <tr className="bg-gray-50/50">
                                    <td className="px-4 py-3 text-sm text-gray-700">ควบคุมแมลงคลาน</td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-green-500">✓</span></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-gray-700">ทำความสะอาดพื้นผิว</td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-green-500">✓</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                </tr>
                                <tr className="bg-gray-50/50">
                                    <td className="px-4 py-3 text-sm text-gray-700">เฝ้าระวังลูกน้ำระยะยาว</td>
                                    <td className="px-4 py-3 text-center"><span className="text-green-500">✓</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-green-500">✓</span></td>
                                    <td className="px-4 py-3 text-center"><span className="text-gray-300">—</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
