import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ผลิตภัณฑ์สาธารณสุขครบวงจร | Public Health Chemical Solutions",
  description: "ผลิตภัณฑ์ควบคุมและป้องกันโรค 2 ชุดโซลูชั่น: โรคไข้เลือดออก และโรคอุบัติซ้ำ-อุบัติใหม่ สำหรับหน่วยงานราชการ โรงพยาบาล โรงเรียน และชุมชน",
  keywords: [
    "ควบคุมโรคไข้เลือดออก",
    "กำจัดยุงลาย",
    "ทรายอะเบท",
    "สเปรย์ไล่ยุง",
    "Casper",
    "L-Force",
    "Mosgon Spray",
    "สาธารณสุข",
    "dengue prevention",
    "mosquito control",
    "larvae control",
    "public health products"
  ],
  authors: [{ name: "Public Health Chemical Solutions" }],
  openGraph: {
    title: "ชุดผลิตภัณฑ์ควบคุมโรคไข้เลือดออก | Dengue Prevention Products",
    description: "ผลิตภัณฑ์ควบคุมและป้องกันโรคไข้เลือดออกครบวงจร สำหรับหน่วยงานสาธารณสุข",
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "ชุดผลิตภัณฑ์ควบคุมโรคไข้เลือดออก",
    description: "ผลิตภัณฑ์ควบคุมและป้องกันโรคไข้เลือดออกครบวงจร",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${notoSansThai.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
