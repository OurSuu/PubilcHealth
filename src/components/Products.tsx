"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { products, productSets, Product } from "@/data/products";

const categoryIcons: Record<string, React.ReactElement> = {
    "Mosquito Control": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
    ),
    "Larvae Control": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    ),
    "Personal Protection": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    "Larvae Regulator": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    "Surface Disinfectant": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    ),
    "Spray Disinfectant": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
    ),
    "Bird Control": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
    ),
    "Rodent Control": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    "Insect Control": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
};

const setLabels: Record<string, string> = {
    "set-1": "ชุด 1",
    "set-2": "ชุด 2",
    "set-3": "ชุด 3"
};

function ProductCard({ product, isExpanded, onToggle }: { product: Product; isExpanded: boolean; onToggle: () => void }) {
    const set = productSets.find(s => s.id === product.setId);
    const accentColor = set?.colorScheme.accent || "#0A2463";
    const [showInfoModal, setShowInfoModal] = useState(false);

    return (
        <>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-gray-100">
                    <Image
                        src={product.productImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Set Badge */}
                    <div
                        className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ background: accentColor }}
                    >
                        {setLabels[product.setId]}
                    </div>
                    {/* Info Button */}
                    {product.infoImage && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowInfoModal(true);
                            }}
                            className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
                        >
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Card Header */}
                <button
                    onClick={onToggle}
                    className="w-full text-left p-5 focus:outline-none"
                >
                    <div className="flex items-start gap-3">
                        {/* Product Icon */}
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                            style={{ background: accentColor }}
                        >
                            {categoryIcons[product.category] || (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400 mb-0.5">{product.categoryTh}</p>
                            <h3 className="text-base font-bold text-gray-900 truncate">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-500 truncate">{product.nameTh}</p>
                        </div>

                        {/* Expand Icon */}
                        <div className="flex-shrink-0">
                            <svg
                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </button>

                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {product.descriptionTh}
                        </p>

                        {/* Active Ingredient */}
                        {product.activeIngredient && (
                            <div className="mb-4 p-3 bg-gray-50 rounded-xl">
                                <p className="text-xs text-gray-500 mb-1">สารออกฤทธิ์</p>
                                <p className="text-sm font-semibold text-gray-800">{product.activeIngredient}</p>
                            </div>
                        )}

                        {/* Benefits */}
                        <div className="mb-4">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">คุณสมบัติเด่น</p>
                            <ul className="space-y-1.5">
                                {product.benefitsTh.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: accentColor }} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Usage Info */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                            <div>
                                <p className="text-xs text-gray-500 mb-1">วิธีการใช้</p>
                                <p className="text-sm font-semibold text-gray-800">{product.usageTypeTh}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">การใช้งาน</p>
                                <p className="text-sm font-semibold text-gray-800">{product.targetUseTh}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Image Modal */}
            {showInfoModal && product.infoImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setShowInfoModal(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setShowInfoModal(false)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={e => e.stopPropagation()}>
                        <div className="relative aspect-[4/3]">
                            <Image
                                src={product.infoImage}
                                alt={`${product.name} - Information`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 1200px"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default function Products() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [expandedProducts, setExpandedProducts] = useState<Set<string>>(new Set());

    const toggleProduct = (productId: string) => {
        setExpandedProducts(prev => {
            const newSet = new Set(prev);
            if (newSet.has(productId)) {
                newSet.delete(productId);
            } else {
                newSet.add(productId);
            }
            return newSet;
        });
    };

    const filteredProducts = activeFilter === "all"
        ? products
        : products.filter(p => p.setId === activeFilter);

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

    const filters = [
        { id: "all", name: "ทั้งหมด", count: products.length },
        { id: "set-1", name: "ชุดที่ 1", count: products.filter(p => p.setId === "set-1").length, color: productSets[0]?.colorScheme.accent },
        { id: "set-2", name: "ชุดที่ 2", count: products.filter(p => p.setId === "set-2").length, color: productSets[1]?.colorScheme.accent },
        { id: "set-3", name: "ชุดที่ 3", count: products.filter(p => p.setId === "set-3").length, color: productSets[2]?.colorScheme.accent }
    ];

    return (
        <section
            id="products"
            ref={sectionRef}
            className="py-24 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 reveal">
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0A2463] rounded-full text-sm font-semibold mb-4">
                        รายละเอียดผลิตภัณฑ์
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        ผลิตภัณฑ์<span className="text-[#0A2463]">ทั้งหมด</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        ผลิตภัณฑ์ทั้งหมดได้รับการขึ้นทะเบียนจาก อย. และผ่านการทดสอบประสิทธิภาพ
                        คลิกที่แต่ละผลิตภัณฑ์เพื่อดูรายละเอียด
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeFilter === filter.id
                                    ? "bg-[#0A2463] text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                            style={activeFilter === filter.id && filter.color ? { backgroundColor: filter.color } : {}}
                        >
                            <span>{filter.name}</span>
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeFilter === filter.id ? "bg-white/20" : "bg-gray-100"
                                }`}>
                                {filter.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isExpanded={expandedProducts.has(product.id)}
                            onToggle={() => toggleProduct(product.id)}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 text-center reveal">
                    <p className="text-gray-600 mb-4">
                        ต้องการข้อมูลผลิตภัณฑ์เพิ่มเติมหรือเอกสารประกอบการจัดซื้อ?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-[#0A2463] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1E3A8A] transition-colors"
                    >
                        <span>ติดต่อเจ้าหน้าที่</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
