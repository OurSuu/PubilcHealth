"use client";

import { useEffect, useState } from "react";

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                setTimeout(onClose, 300); // Wait for fade out animation
            }, 3000); // Show for 3 seconds
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible && !show) return null;

    return (
        <div
            className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 bg-gray-900/90 text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
        >
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span className="font-medium text-sm sm:text-base">{message}</span>
        </div>
    );
}
