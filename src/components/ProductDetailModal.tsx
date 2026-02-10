"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product, productSets } from "@/data/products";

interface ProductDetailModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const set = productSets.find(s => s.id === product.setId);
    const accentColor = set?.colorScheme.accent || "#0A2463";

    // Collect all images for this product
    const images = [product.productImage];
    if (product.infoImage) {
        images.push(product.infoImage);
    }

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Reset to first image when product changes
    useEffect(() => {
        setActiveImageIndex(0);
    }, [product.id]);

    if (!isOpen) return null;

    const handlePrevImage = () => {
        setActiveImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
    };

    const handleNextImage = () => {
        setActiveImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* Modal Container */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl w-[95vw] max-w-[1400px] h-[90vh] overflow-hidden animate-scale-in flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                    aria-label="ปิด"
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col lg:flex-row h-full">
                    {/* Left: Image Gallery (65%) */}
                    <div className="lg:w-[65%] bg-gray-100 flex flex-col h-[40vh] lg:h-full relative group">
                        {/* Main Image Container */}
                        <div className="relative flex-1 w-full h-full p-4 lg:p-8 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src={images[activeImageIndex]}
                                    alt={`${product.name} - รูปที่ ${activeImageIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 75vw"
                                    priority
                                />
                            </div>

                            {/* Navigation Arrows (only if multiple images) */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                                        aria-label="รูปก่อนหน้า"
                                    >
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                                        aria-label="รูปถัดไป"
                                    >
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails Overlay (Bottom Center) */}
                        {images.length > 1 && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => activeImageIndex !== idx && setActiveImageIndex(idx)}
                                        className={`relative w-12 h-12 rounded-lg overflow-hidden transition-all ${activeImageIndex === idx
                                            ? "ring-2 ring-offset-1 opacity-100 scale-105"
                                            : "opacity-60 hover:opacity-100"
                                            }`}
                                        style={activeImageIndex === idx ? { boxShadow: `0 0 0 2px ${accentColor}` } : {}}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="48px"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Product Information (35%) */}
                    <div className="lg:w-[35%] bg-white flex flex-col h-full overflow-hidden">
                        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                            {/* Set Badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <span
                                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                                    style={{ background: accentColor }}
                                >
                                    {product.setId === "set-1" ? "ชุดที่ 1" : product.setId === "set-2" ? "ชุดที่ 2" : "ชุดที่ 3"}
                                </span>
                                <span className="text-xs text-gray-500">{product.categoryTh}</span>
                            </div>

                            {/* Product Name */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                {product.name}
                            </h2>
                            <p className="text-base text-gray-500 mb-6 font-medium">{product.nameTh}</p>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {product.descriptionTh}
                                </p>
                            </div>

                            {/* Active Ingredient */}
                            {product.activeIngredient && (
                                <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                        สารออกฤทธิ์
                                    </h3>
                                    <ul className="space-y-2">
                                        {product.activeIngredient.split(' / ').map((ingredient, index) => (
                                            <li key={index} className="text-gray-900 font-semibold text-sm flex items-start gap-2">
                                                <span className="block w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                                                <span className="leading-snug">{ingredient.trim()}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Benefits */}
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                                    คุณสมบัติเด่น
                                </h3>
                                <ul className="space-y-2.5">
                                    {product.benefitsTh.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg
                                                className="w-5 h-5 flex-shrink-0"
                                                style={{ color: accentColor }}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="leading-snug">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Usage Info */}
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                <div className="bg-blue-50/50 p-4 rounded-xl">
                                    <h3 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
                                        วิธีการใช้
                                    </h3>
                                    <p className="text-sm text-blue-900 font-medium">{product.usageTypeTh}</p>
                                </div>
                                <div className="bg-green-50/50 p-4 rounded-xl">
                                    <h3 className="text-xs font-bold text-green-800 uppercase tracking-wider mb-1">
                                        พื้นที่ใช้งาน
                                    </h3>
                                    <p className="text-sm text-green-900 font-medium">{product.targetUseTh}</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA (Sticky Bottom) */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                            <a
                                href="#contact"
                                onClick={onClose}
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                style={{ background: accentColor }}
                            >
                                <span>ติดต่อสั่งซื้อ / สอบถาม</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
