"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
    images: string[];
    accentColor: string;
    setName: string;
}

export default function ImageGallery({ images, accentColor, setName }: ImageGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!images || images.length === 0) return null;

    return (
        <>
            {/* Gallery Container */}
            <div className="space-y-3">
                {/* Main Image */}
                <div
                    className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-md"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Image
                        src={images[activeIndex]}
                        alt={`${setName} - Image ${activeIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all ${activeIndex === idx
                                    ? "ring-2 ring-offset-1"
                                    : "opacity-60 hover:opacity-100"
                                    }`}
                                style={activeIndex === idx ? { boxShadow: `0 0 0 2px ${accentColor}` } : {}}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="56px"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={e => e.stopPropagation()}>
                        <div className="relative aspect-[4/3]">
                            <Image
                                src={images[activeIndex]}
                                alt={`${setName} - Image ${activeIndex + 1}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 1200px"
                            />
                        </div>

                        {/* Navigation */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
                                    }}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
                                    }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {activeIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
