"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductSet, Product, getProductsBySet } from "@/data/products";
import ProductDetailModal from "./ProductDetailModal";

interface SolutionSetProps {
    set: ProductSet;
    index: number;
}

const setLabels: Record<string, string> = {
    "set-1": "ชุดที่ 1",
    "set-2": "ชุดที่ 2",
    "set-3": "ชุดที่ 3"
};

function ProductCard({
    product,
    accentColor,
    onClick
}: {
    product: Product;
    accentColor: string;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full"
        >
            {/* Product Image */}
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                    src={product.productImage}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                {/* Info Button (Visual Indicator) */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-80 group-hover:opacity-100 group-hover:bg-white transition-all transform group-hover:scale-110">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                {/* Set Badge */}
                <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm"
                    style={{ background: accentColor }}
                >
                    {setLabels[product.setId]}
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-auto">
                    <p className="text-xs text-gray-500 mb-1">{product.categoryTh}</p>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-blue-700 transition-colors">
                        {product.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-4">{product.nameTh}</p>

                    {/* Brief Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                        {product.descriptionTh}
                    </p>
                </div>

                {/* Footer Info */}
                <div className="pt-4 border-t border-gray-100 mt-2">
                    <div className="flex items-center justify-between">
                        <span
                            className="px-2 py-1 rounded-lg text-xs font-medium"
                            style={{ background: `${accentColor}15`, color: accentColor }}
                        >
                            {product.usageTypeTh}
                        </span>

                        <span className="text-xs font-medium text-gray-400 group-hover:text-gray-600 flex items-center gap-1 transition-colors">
                            ดูเพิ่มเติม
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SolutionSet({ set, index }: SolutionSetProps) {
    const products = getProductsBySet(set.id);
    const isEven = index % 2 === 0;
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <section
            id={set.id}
            className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Set Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span
                            className="text-sm font-bold px-3 py-1 rounded-full text-white"
                            style={{ background: set.colorScheme.accent }}
                        >
                            {setLabels[set.id]}
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        {set.nameEn}
                    </h2>
                    <p className="text-gray-600 max-w-3xl leading-relaxed">
                        {set.description}
                    </p>
                </div>

                {/* Objective Card */}
                <div
                    className="rounded-2xl p-6 mb-10 text-white shadow-lg overflow-hidden relative"
                    style={{ background: `linear-gradient(135deg, ${set.colorScheme.primary}, ${set.colorScheme.secondary})` }}
                >
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1">
                            <p className="text-white/70 text-sm uppercase tracking-wider mb-2 font-medium">วัตถุประสงค์</p>
                            <p className="text-xl font-bold leading-relaxed">{set.objective}</p>
                        </div>

                        {/* Prevention Flow */}
                        <div className="flex items-center gap-2 md:gap-4 flex-wrap bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            {set.preventionFlow.map((step, stepIdx) => (
                                <div key={step.step} className="flex items-center gap-2">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 shadow-sm"
                                            style={{ background: set.colorScheme.accent }}
                                        >
                                            {step.step}
                                        </div>
                                        <span className="text-[10px] text-white/90 text-center leading-tight max-w-[70px]">
                                            {step.title}
                                        </span>
                                    </div>
                                    {stepIdx < set.preventionFlow.length - 1 && (
                                        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            accentColor={set.colorScheme.accent}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            <ProductDetailModal
                product={selectedProduct || products[0]}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}
