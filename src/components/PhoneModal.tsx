"use client";

import { useEffect, useCallback } from "react";

interface PhoneModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const phoneNumbers = [
    {
        label: "สายที่ 1",
        number: "093 595 1945",
        tel: "tel:0935951945",
    },
    {
        label: "สายที่ 2",
        number: "081 614 4914",
        tel: "tel:0816144914",
    },
];

export default function PhoneModal({ isOpen, onClose }: PhoneModalProps) {
    const handleBackdropClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
        }
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="phone-modal-overlay"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-label="เลือกเบอร์โทรศัพท์"
        >
            <div className="phone-modal-sheet">
                {/* Handle bar */}
                <div className="phone-modal-handle">
                    <div className="phone-modal-handle-bar" />
                </div>

                {/* Header */}
                <div className="phone-modal-header">
                    <div className="phone-modal-icon-wrapper">
                        <svg className="phone-modal-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h3 className="phone-modal-title">โทรหาเรา</h3>
                    <p className="phone-modal-subtitle">เลือกหมายเลขที่ต้องการติดต่อ</p>
                </div>

                {/* Phone Number Buttons */}
                <div className="phone-modal-numbers">
                    {phoneNumbers.map((phone, index) => (
                        <a
                            key={index}
                            href={phone.tel}
                            className="phone-modal-number-btn"
                        >
                            <div className="phone-modal-number-info">
                                <span className="phone-modal-number-label">{phone.label}</span>
                                <span className="phone-modal-number-value">{phone.number}</span>
                            </div>
                            <div className="phone-modal-call-icon-wrapper">
                                <svg className="phone-modal-call-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="phone-modal-close-btn"
                    type="button"
                >
                    ยกเลิก
                </button>
            </div>
        </div>
    );
}
