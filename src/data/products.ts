export interface Product {
    id: string;
    name: string;
    nameTh: string;
    description: string;
    descriptionTh: string;
    category: string;
    categoryTh: string;
    benefits: string[];
    benefitsTh: string[];
    usageType: string;
    usageTypeTh: string;
    image: string;
    productImage: string;      // Main product image for card display
    infoImage?: string;        // Optional info/detail image for modal
    infoImages?: string[];     // Optional multiple info images for modal gallery
    activeIngredient?: string;
    technicalSpecs?: { label: string; labelTh: string; value: string }[];
    targetUse: string;
    targetUseTh: string;
    setId: string; // Which product set this belongs to
}

export interface ProductSet {
    id: string;
    name: string;
    nameEn: string;
    description: string;
    descriptionEn: string;
    objective: string;
    objectiveEn: string;
    icon: string;
    colorScheme: {
        primary: string;
        secondary: string;
        accent: string;
    };
    preventionFlow: {
        step: number;
        title: string;
        titleEn: string;
        description: string;
        product: string;
    }[];
    productIds: string[];
    images: string[];
}

// All products across all sets
export const products: Product[] = [
    // === SET 1: Dengue Fever Prevention ===
    {
        id: "casper",
        name: "Casper (Casper-Series 1)",
        nameTh: "Casper (Casper-Series 1)",
        description: "Product for eliminating adult mosquitoes. Suitable for dengue fever control and surveillance. Can be used both indoors and outdoors, ideal for communities, schools, and public areas.",
        descriptionTh: "ผลิตภัณฑ์สำหรับกำจัดยุงตัวเต็มวัย เหมาะสำหรับการควบคุมและเฝ้าระวังโรคไข้เลือดออก ใช้งานได้ทั้งในอาคารและนอกอาคาร เหมาะสำหรับชุมชน โรงเรียน และพื้นที่สาธารณะ",
        category: "Mosquito Control",
        categoryTh: "ควบคุมยุงตัวเต็มวัย",
        benefits: [
            "Rapid knockdown effect on adult mosquitoes",
            "Low toxicity to mammals",
            "Effective in indoor and outdoor environments",
            "WHO recommended formulation"
        ],
        benefitsTh: [
            "ออกฤทธิ์กำจัดยุงตัวเต็มวัยอย่างรวดเร็ว",
            "มีความเป็นพิษต่ำต่อสัตว์เลี้ยงลูกด้วยนม",
            "ใช้ได้ทั้งในอาคารและนอกอาคาร",
            "สูตรที่แนะนำโดย WHO"
        ],
        usageType: "ULV / Thermal Fogging",
        usageTypeTh: "พ่นหมอกควัน / พ่น ULV",
        image: "/products/casper.svg",
        productImage: "/image/set1/Casper.jpg",
        infoImage: "/image/set1/CasperInfo.jpg",
        activeIngredient: "zeta-Cypermethrin 2.25% w/v / Tetramethrin 2.25% w/v / Piperonyl butoxide 9.0% w/v",
        targetUse: "Dengue fever control spraying in areas",
        targetUseTh: "พ่นควบคุมโรคไข้เลือดออกในพื้นที่",
        setId: "set-1"
    },
    {
        id: "l-force",
        name: "L-Force",
        nameTh: "แอล-ฟอร์ซ",
        description: "Aedes larvae killer (Temephos) for controlling larvae in water containers, drains, and mosquito breeding sites. Provides long-lasting protection.",
        descriptionTh: "สารกำจัดลูกน้ำยุงลาย (ทีมีฟอส) สำหรับควบคุมลูกน้ำในภาชนะขังน้ำ ท่อระบายน้ำ และแหล่งเพาะพันธุ์ยุง ให้การป้องกันที่ยาวนาน",
        category: "Larvae Control",
        categoryTh: "ควบคุมลูกน้ำยุงลาย",
        benefits: [
            "Highly effective against Aedes larvae",
            "Safe for drinking water containers",
            "Long-lasting effectiveness (4-12 weeks)",
            "Easy to apply in various water sources",
            "Thai FDA approved"
        ],
        benefitsTh: [
            "มีประสิทธิภาพสูงในการกำจัดลูกน้ำยุงลาย",
            "ปลอดภัยสำหรับภาชนะน้ำดื่ม",
            "ออกฤทธิ์ยาวนาน 4-12 สัปดาห์",
            "ใช้งานง่ายในแหล่งน้ำหลากหลายประเภท",
            "ได้รับการรับรองจาก อย."
        ],
        usageType: "Granular / Sand Granule",
        usageTypeTh: "เม็ดหยดลงน้ำ",
        image: "/products/l-force.svg",
        productImage: "/image/set1/L-Force.jpg",
        activeIngredient: "Temephos 10%",
        targetUse: "Water containers and mosquito breeding sites",
        targetUseTh: "ภาชนะเก็บน้ำ และแหล่งเพาะพันธุ์ยุง",
        setId: "set-1"
    },
    {
        id: "mosgon-spray",
        name: "Mosgon Spray",
        nameTh: "มอสกอน สเปรย์",
        description: "Safe mosquito repellent spray, DEET-free formula. Safe for children and pregnant women. Provides reliable protection for the whole family.",
        descriptionTh: "สเปรย์ไล่ยุงสูตรปลอดภัย ไม่มี DEET ปลอดภัยสำหรับเด็กและหญิงตั้งครรภ์ ให้การปกป้องที่เชื่อถือได้สำหรับทุกคนในครอบครัว",
        category: "Personal Protection",
        categoryTh: "ป้องกันส่วนบุคคล",
        benefits: [
            "DEET-Free formula",
            "Safe for children and pregnant women",
            "Gentle on sensitive skin",
            "Non-greasy, pleasant fragrance formula",
            "Long-lasting protection for 6.5 hours"
        ],
        benefitsTh: [
            "สูตรปราศจาก DEET",
            "ปลอดภัยสำหรับเด็กและหญิงตั้งครรภ์",
            "อ่อนโยนต่อผิวแพ้ง่าย",
            "สูตรไม่เหนียวเหนอะหนะ กลิ่นหอมสดชื่น",
            "ป้องกันยาวนาน 6.5 ชม"
        ],
        usageType: "Personal Spray",
        usageTypeTh: "สเปรย์ฉีดตัว",
        image: "/products/mosgon-spray.svg",
        productImage: "/image/set1/Mosgon.jpg",
        infoImage: "/image/set1/MosgonInfo.jpg",
        activeIngredient: "Ethyl butylacetyl aminopropionate 11%",
        targetUse: "Daily mosquito protection for the family",
        targetUseTh: "ใช้ป้องกันยุงสำหรับครอบครัวในชีวิตประจำวัน",
        setId: "set-1"
    },
    {
        id: "l-proxy",
        name: "L-Proxy",
        nameTh: "แอล-พร็อกซี่",
        description: "Larvae growth inhibitor in tablet form using Pyriproxyfen 0.25%. Provides approximately 3 months of continuous protection. Ideal for water container surveillance and disease prevention at source.",
        descriptionTh: "ทำหน้าที่ยับยั้งการเจริญเติบโตของลูกน้ำ โดยรบกวนกระบวนการลอกคราบและการพัฒนาเป็นยุงตัวเต็มวัย ช่วยตัดวงจรชีวิตยุงอย่างมีประสิทธิภาพ เหมาะสำหรับใช้ในแหล่งน้ำขังเพื่อควบคุมและป้องกันการแพร่ระบาดของโรคไข้เลือดออกและโรคที่มียุงเป็นพาหะผลิตภัณฑ์มีความปลอดภัยสูง ไม่มีกลิ่น และควบคุมลูกน้ำได้นานสูงสุดประมาณ 3 เดือน",
        category: "Larvae Regulator",
        categoryTh: "ยับยั้งการเจริญเติบโตลูกน้ำ",
        benefits: [
            "Long-lasting protection (approx. 3 months)",
            "Only 1 tablet per 250 liters of water",
            "LD50 = 2,000,000 mg/kg (very low toxicity)",
            "IGR group (Insect Growth Regulator)",
            "Odorless",
            "Easy to use, simply drop into water source"
        ],
        benefitsTh: [
            "ป้องกันได้ยาวนานประมาณ 3 เดือน",
            "ใช้เพียง 1 เม็ด ต่อน้ำ 250 ลิตร",
            "ค่า LD50 = 2,000,000 mg/kg (ความเป็นพิษต่ำ)",
            "เป็นสารกลุ่ม IGR (Insect Growth Regulator)",
            "ไม่มีกลิ่น",
            "ใช้งานง่าย เพียงหย่อนลงแหล่งน้ำ"
        ],
        usageType: "Tablet / Drop in water",
        usageTypeTh: "เม็ดหยดลงน้ำ 1 เม็ด ต่อน้ำ 250 ลิตร",
        image: "/products/l-proxy.svg",
        productImage: "/image/set2/L-Proxy.jpeg",
        infoImages: [
            "/image/set2/L-Proxy-Info1.jpeg",
            "/image/set2/L-Proxy-Info2.jpeg",
            "/image/set2/L-Proxy-Info3.jpeg",
            "/image/set2/L-Proxy.jpg",
        ],
        activeIngredient: "Pyriproxyfen 0.25% w/w",
        targetUse: "Water container surveillance and long-term larvae control",
        targetUseTh: "เฝ้าระวังภาชนะน้ำและควบคุมลูกน้ำระยะยาว",
        setId: "set-1"
    },
    {
        id: "L-Prox",
        name: "L-Prox",
        nameTh: "แอล-พร็อกซ์",
        description: "Contains an Insect Growth Regulator (IGR) that inhibits molting and larval development, preventing larvae from maturing into adult insects.",
        descriptionTh: "ออกฤทธิ์ด้วยสารในกลุ่มควบคุมการเจริญเติบโตของแมลง (IGR) ช่วยยับยั้งกระบวนการลอกคราบและพัฒนาการของตัวอ่อน ทำให้ไม่สามารถพัฒนาเป็นตัวเต็มวัยได้",
        category: "Insect & Larvae Control",
        categoryTh: "ผลิตภัณฑ์ด้านสาธารณสุขสำหรับกำจัดแมลงและควบคุมลูกน้ำยุง",
        benefits: [
            "Eliminates all types of mosquito larvae",
            "Long-lasting larvae control",
            "Kills fly larvae that carry diseases",
            "Inhibits growth of various insect larvae",
            "Safe for warm-blooded animals",
            "Meets Department of Disease Control specifications"
        ],
        benefitsTh: [
            "กำจัดลูกน้ำยุงทุกประเภท",
            "ควบคุมลูกน้ำยุงได้นาน",
            "กำจัดหนอนแมลงวัน พาหะนำเชื้อโรค",
            "ยับยั้งการเจริญเติบโตของตัวอ่อนแมลงชนิดต่าง ๆ",
            "ปลอดภัยต่อสัตว์เลือดอุ่น",
            "มีคุณสมบัติตามที่กรมควบคุมโรคกำหนด"
        ],
        usageType: "Sprayer / ULV mist sprayer",
        usageTypeTh: "ใช้กับเครื่องพ่นหรือเครื่องพ่นละอองฝอย",
        image: "/products/l-prox.svg",
        productImage: "/image/set1/L-Prox.jpeg",
        activeIngredient: "Pyriproxyfen 1.3% w/v",
        targetUse: "Areas at risk of mosquito- and insect-borne disease outbreaks",
        targetUseTh: "พื้นที่เสี่ยงการระบาดของโรคที่มียุงและแมลงเป็นพาหะ",
        setId: "set-1"
    },
    {
        id: "Swingfog SN 50",
        name: "Swingfog SN 50",
        nameTh: "สวิงฟอก เสเอ็น 50",
        description: "Thermal fogging machine that disperses chemicals into fine mist particles, enhancing effectiveness in controlling mosquitoes, flies, and other disease vectors.",
        descriptionTh: "เครื่องพ่นทำงานด้วยระบบสร้างหมอกควันแบบ Thermal Fogging ทำให้สารเคมีกระจายตัวเป็นละอองขนาดเล็ก ช่วยเพิ่มประสิทธิภาพในการควบคุมแมลง เช่น ยุง แมลงวัน และแมลงพาหะอื่น ๆ",
        category: "Fogging Equipment",
        categoryTh: "Swingfog รุ่น SN 50",
        benefits: [
            "WHO-compliant droplet size standard (VMD)",
            "Effective against all types of mosquitoes and disease vectors",
            "Made in Germany",
            "Durable and rugged construction",
            "After-sales service and spare parts available",
            "Widely used in Thailand for over 40 years"
        ],
        benefitsTh: [
            "ผ่านมาตรฐาน WHO ด้านขนาดละอองฝอย (VMD)",
            "ใช้สำหรับกำจัดยุงและแมลงพาหะทุกชนิด",
            "ผลิตในประเทศเยอรมนี",
            "โครงสร้างแข็งแรง ทนทานต่อการใช้งาน",
            "มีบริการหลังการขายและอะไหล่รองรับ",
            "ใช้งานแพร่หลายในประเทศไทยมากกว่า 40 ปี"
        ],
        usageType: "Thermal Fogging",
        usageTypeTh: "พ่นควบคุมแมลงในพื้นที่เปิดและพื้นที่กว้าง",
        image: "/products/swingfog.svg",
        productImage: "/image/set1/Swingfog.jpeg",
        infoImages: [
            "/image/set1/Swingfog2.jpeg"
        ],
        technicalSpecs: [
            { label: "Solution Tank Capacity", labelTh: "ความจุถังน้ำยา", value: "5.5 L" },
            { label: "Fuel Tank Capacity", labelTh: "ความจุถังเชื้อเพลิง", value: "1.5 L" },
            { label: "Fuel Consumption Rate", labelTh: "อัตราการใช้เชื้อเพลิง", value: "3 L/hr" },
            { label: "Machine Weight", labelTh: "น้ำหนักเครื่อง", value: "9.8 kg (empty)" },
            { label: "Machine Dimensions", labelTh: "ขนาดเครื่อง", value: "1,280 × 240 × 330 mm" }
        ],
        targetUse: "Dengue fever outbreak areas",
        targetUseTh: "พื้นที่ระบาดของโรคไข้เลือดออก",
        setId: "set-1"
    },

    // === SET 2: Disease Re-emergence Prevention ===
    {
        id: "procare-disinfectant",
        name: "Procare Hygienic Disinfectant",
        nameTh: "Procare Hygienic Disinfectant",
        description: "Disinfectant product for building hygiene control. Can effectively eliminate bacteria and viruses. Suitable for high-touch areas such as hospitals, schools, offices, and public spaces.",
        descriptionTh: "ผลิตภัณฑ์ฆ่าเชื้อสำหรับการควบคุมสุขอนามัยในอาคาร สามารถกำจัดเชื้อแบคทีเรียและเชื้อไวรัสได้อย่างมีประสิทธิภาพ เหมาะสำหรับพื้นที่ที่มีการสัมผัสบ่อย เช่น โรงพยาบาล โรงเรียน สำนักงาน และพื้นที่สาธารณะ",
        category: "Surface Disinfectant",
        categoryTh: "ฆ่าเชื้อพื้นผิว",
        benefits: [
            "Eliminates viruses, bacteria, and SARS-CoV-2",
            "Non-corrosive formula",
            "Multi-surface compatible",
            "Hospital-grade disinfection",
            "Pleasant fragrance"
        ],
        benefitsTh: [
            "กำจัดไวรัส แบคทีเรีย และเชื้อ SARS-CoV-2",
            "สูตรไม่กัดกร่อน",
            "ใช้ได้กับหลายพื้นผิว",
            "ฆ่าเชื้อระดับโรงพยาบาล",
            "กลิ่นหอมสดชื่น"
        ],
        usageType: "Concentrate, dilute with water",
        usageTypeTh: "สารเข้มข้น ผสมน้ำตามอัตราส่วน",
        image: "/products/procare-disinfectant.svg",
        productImage: "/image/set2/Hygienic Disinfectant.jpg",
        activeIngredient: "Ethoxylated nonyl phenol 3.000% w/v / Alkyl dimethyl benzyl ammonium chloride 0.150% w/v / Poly (hexamethylenebiguanide) hydrochloride (PHMB) 0.040% w/v / Coconut fatty acid 0.015% w/v",
        targetUse: "High-touch areas: Hospitals, schools, offices, public spaces",
        targetUseTh: "พื้นที่ที่มีการสัมผัสบ่อย เช่น โรงพยาบาล โรงเรียน สำนักงาน และพื้นที่สาธารณะ",
        setId: "set-2"
    },
    {
        id: "procare-spray",
        name: "Procare Hygienic Disinfectant Spray",
        nameTh: "Procare Hygienic Disinfectant Spray",
        description: "Disinfectant product for building hygiene control. Can effectively eliminate bacteria and viruses. Suitable for high-touch areas such as hospitals, schools, offices, and public spaces.",
        descriptionTh: "ผลิตภัณฑ์ฆ่าเชื้อสำหรับการควบคุมสุขอนามัยในอาคาร สามารถกำจัดเชื้อแบคทีเรียและเชื้อไวรัสได้อย่างมีประสิทธิภาพ เหมาะสำหรับพื้นที่ที่มีการสัมผัสบ่อย เช่น โรงพยาบาล โรงเรียน สำนักงาน และพื้นที่สาธารณะ",
        category: "Spray Disinfectant",
        categoryTh: "สเปรย์ฆ่าเชื้อ",
        benefits: [
            "99.9% disinfection in 1 minute",
            "Ready-to-use spray format",
            "Ideal for high-touch surfaces",
            "Quick-dry formula",
            "Indoor hygiene control"
        ],
        benefitsTh: [
            "ฆ่าเชื้อ 99.9% ใน 1 นาที",
            "รูปแบบสเปรย์พร้อมใช้",
            "เหมาะสำหรับพื้นผิวสัมผัสบ่อย",
            "สูตรแห้งเร็ว",
            "ควบคุมสุขอนามัยในอาคาร"
        ],
        usageType: "Spray and wipe",
        usageTypeTh: "ฉีดพ่น เช็ดถู",
        image: "/products/procare-spray.svg",
        productImage: "/image/set2/Hygienic Disinfect Spray.jpg",
        activeIngredient: "Ethoxylated nonyl phenol 3.000% w/v / Alkyl dimethyl benzyl ammonium chloride 0.150% w/v / Poly (hexamethylenebiguanide) hydrochloride (PHMB) 0.040% w/v / Coconut fatty acid 0.015% w/v",
        targetUse: "High-touch areas: Hospitals, schools, offices, public spaces",
        targetUseTh: "พื้นที่ที่มีการสัมผัสบ่อย เช่น โรงพยาบาล โรงเรียน สำนักงาน และพื้นที่สาธารณะ",
        setId: "set-2"
    },

    // === SET 3: Vector/Pest Control ===
    {
        id: "rejex-it",
        name: "RejeX-it (Bird Repellent)",
        nameTh: "รีเจ็กซ์-อิท (ไล่นก)",
        description: "Professional bird repellent gel for deterring pigeons and pest birds from buildings. Non-toxic, safe formula. Protects buildings, monuments, and public areas from damage and disease transmission by birds.",
        descriptionTh: "สารไล่นกระดับมืออาชีพ สำหรับป้องกันนกพิราบและนกรบกวนจากอาคาร สูตรไม่เป็นพิษ ปลอดภัย ปกป้องอาคาร อนุสาวรีย์ และพื้นที่สาธารณะจากความเสียหายและการแพร่โรคจากนก",
        category: "Bird Control",
        categoryTh: "ควบคุมนก",
        benefits: [
            "Non-toxic, humane bird deterrent",
            "Long-lasting active substance (6-12 months)",
            "Weather-resistant",
            "Safe for buildings and structures",
            "Prevents disease transmission from birds"
        ],
        benefitsTh: [
            "สูตรไม่เป็นพิษ ไล่นกอย่างมีมนุษยธรรม",
            "สารออกฤทธิ์ยาวนาน 6-12 เดือน",
            "ทนทานต่อสภาพอากาศ",
            "ปลอดภัยต่ออาคารและโครงสร้าง",
            "ป้องกันการแพร่โรคจากนก"
        ],
        usageType: "Gel Application",
        usageTypeTh: "สาร",
        image: "/products/rejex-it.svg",
        productImage: "/image/set3/RejeX-it.jpg",
        infoImage: "/image/set3/RejeX-it-INFO.jpg",
        activeIngredient: "Polybutene-based Gel",
        targetUse: "Buildings, window ledges, monuments, warehouses",
        targetUseTh: "อาคาร ขอบหน้าต่าง อนุสาวรีย์ โกดัง",
        setId: "set-3"
    },
    {
        id: "wax-block-rodenticide",
        name: "Wax Block Rodenticide",
        nameTh: "เหยื่อหนูแบบบล็อก",
        description: "Professional-grade rodenticide wax block for controlling rats in public health applications. Moisture-resistant formula suitable for indoor and outdoor use in various environments.",
        descriptionTh: "เหยื่อกำจัดหนูแบบบล็อกระดับมืออาชีพ สำหรับควบคุมหนูในงานสาธารณสุข สูตรทนความชื้น เหมาะสำหรับใช้ทั้งในและนอกอาคารในสภาพแวดล้อมที่หลากหลาย",
        category: "Rodent Control",
        categoryTh: "ควบคุมหนู",
        benefits: [
            "Moisture-resistant wax block",
            "Highly attractive to rats",
            "Long-lasting effectiveness",
            "Suitable for indoor and outdoor use",
            "Compatible with tamper-resistant bait stations"
        ],
        benefitsTh: [
            "บล็อกทนความชื้น",
            "ดึงดูดหนูได้ดี",
            "ออกฤทธิ์ยาวนาน",
            "ใช้ได้ทั้งในและนอกอาคาร",
            "ใช้กับกล่องเหยื่อนิรภัยได้"
        ],
        usageType: "Bait Station Placement",
        usageTypeTh: "วางในกล่องเหยื่อ",
        image: "/products/wax-block.svg",
        productImage: "/image/set3/Ked.jpg",
        infoImage: "/image/set3/Ked-Info.jpg",
        activeIngredient: "Brodifacoum / Bromadiolone",
        targetUse: "Warehouses, markets, food storage, drainage",
        targetUseTh: "โกดัง ตลาด คลังอาหาร ท่อระบายน้ำ",
        setId: "set-3"
    },
    {
        id: "safrotin-mc",
        name: "Safrotin MC (Microcapsule)",
        nameTh: "แซฟโรติน เอ็มซี (ไมโครแคปซูล)",
        description: "Advanced microcapsule insecticide for long-lasting residual control of crawling insects such as cockroaches, ants, and other pests. Slow-release technology provides extended protection.",
        descriptionTh: "สารกำจัดแมลงไมโครแคปซูลขั้นสูง สำหรับการควบคุมแบบตกค้างระยะยาว กำจัดแมลงคลาน เช่น แมลงสาบ มด และศัตรูพืชอื่นๆ เทคโนโลยีปลดปล่อยช้าให้การป้องกันที่ยาวนาน",
        category: "Insect Control",
        categoryTh: "ควบคุมแมลง",
        benefits: [
            "Microcapsule slow-release technology",
            "Long residual effect (up to 3 months)",
            "Mild odor formula",
            "Effective against crawling insects",
            "Water-based, low toxicity"
        ],
        benefitsTh: [
            "เทคโนโลยีไมโครแคปซูลปลดปล่อยช้า",
            "ออกฤทธิ์ตกค้างนาน (ถึง 3 เดือน)",
            "สูตรกลิ่นอ่อน",
            "มีประสิทธิภาพกับแมลงคลาน",
            "สูตรน้ำ ความเป็นพิษต่ำ"
        ],
        usageType: "Residual Spray",
        usageTypeTh: "พ่นแบบตกค้าง",
        image: "/products/safrotin-mc.svg",
        productImage: "/image/set3/Safrotin-MC.jpg",
        infoImage: "/image/set3/Safrotin-MC-Info.jpg",
        activeIngredient: "Propoxur / Cyfluthrin MC",
        targetUse: "Kitchens, food factories, hospitals, schools",
        targetUseTh: "ห้องครัว โรงงานอาหาร โรงพยาบาล โรงเรียน",
        setId: "set-3"
    }
];

// Product Sets configuration
export const productSets: ProductSet[] = [
    {
        id: "set-1",
        name: "ชุดที่ 1 : วัสดุควบคุม ป้องกัน และเฝ้าระวังโรคไข้เลือดออก",
        nameEn: "Dengue Fever Prevention & Control",
        description: "ชุดผลิตภัณฑ์ครบวงจรสำหรับการควบคุมและป้องกันโรคไข้เลือดออก ครอบคลุมตั้งแต่การกำจัดลูกน้ำ การควบคุมยุงตัวเต็มวัย ไปจนถึงการป้องกันส่วนบุคคล",
        descriptionEn: "Complete product set for dengue fever control and prevention, covering larvae control, adult mosquito control, and personal protection.",
        objective: "ตัดวงจรชีวิตยุงลายและลดการระบาดของโรคไข้เลือดออก",
        objectiveEn: "Break the Aedes mosquito lifecycle and reduce dengue outbreaks",
        icon: "mosquito",
        colorScheme: {
            primary: "#0A2463",
            secondary: "#1E3A8A",
            accent: "#06B6D4"
        },
        preventionFlow: [
            {
                step: 1,
                title: "ควบคุมลูกน้ำ",
                titleEn: "Larvae Control",
                description: "กำจัดลูกน้ำในแหล่งน้ำขัง",
                product: "L-Force"
            },
            {
                step: 2,
                title: "ควบคุมยุงตัวเต็มวัย",
                titleEn: "Area Control",
                description: "พ่นหมอกควันกำจัดยุงในพื้นที่",
                product: "Casper"
            },
            {
                step: 3,
                title: "ป้องกันส่วนบุคคล",
                titleEn: "Personal Protection",
                description: "ใช้สเปรย์ไล่ยุงทุกวัน",
                product: "Mosgon Spray"
            }
        ],
        productIds: ["casper", "l-force", "mosgon-spray", "l-proxy", "L-Prox", "Swingfog SN 50"],
        images: [
            "/image/set1/set1.jpg",
            "/image/set1/set1 number2.jpg",
            "/image/set1/set1 number3.jpg",
            "/image/set1/set1 number4.jpg",
            "/image/set1/set1 number5.jpg"
        ]
    },
    {
        id: "set-2",
        name: "ชุดที่ 2 : วัสดุควบคุม เฝ้าระวัง และป้องกันโรคอุบัติซ้ำ–อุบัติใหม่",
        nameEn: "Re-emerging & Emerging Disease Prevention",
        description: "ชุดผลิตภัณฑ์สำหรับการป้องกันโรคอุบัติซ้ำและอุบัติใหม่ ควบคุมเชื้อโรคในพื้นที่สาธารณะ และสนับสนุนระบบเฝ้าระวังสุขอนามัย",
        descriptionEn: "Product set for preventing re-emerging and emerging diseases, controlling pathogens in public spaces, and supporting hygiene surveillance systems.",
        objective: "ป้องกันการกลับมาระบาดของโรคและควบคุมเชื้อโรคในพื้นที่สาธารณะ",
        objectiveEn: "Prevent disease re-emergence and control pathogens in public spaces",
        icon: "shield",
        colorScheme: {
            primary: "#0A2463",
            secondary: "#1E3A8A",
            accent: "#10B981"
        },
        preventionFlow: [
            {
                step: 1,
                title: "ฆ่าเชื้อพื้นผิว",
                titleEn: "Surface Disinfection",
                description: "ทำความสะอาดฆ่าเชื้อพื้น ผนัง",
                product: "Procare Disinfectant"
            },
            {
                step: 2,
                title: "ฆ่าเชื้อจุดสัมผัส",
                titleEn: "Touch Point Control",
                description: "ฉีดพ่นพื้นผิวสัมผัสบ่อย",
                product: "Procare Spray"
            }
        ],
        productIds: ["procare-disinfectant", "procare-spray"],
        images: [
            "/image/set2/Set2.jpg",
            "/image/set2/Set2 Number2.jpg",
            "/image/set2/Set2 Number3.jpg"
        ]
    },
    {
        id: "set-3",
        name: "ชุดที่ 3 : วัสดุควบคุม เฝ้าระวัง และป้องกันโรคสัตว์พาหะนำโรค",
        nameEn: "Vector & Pest Control",
        description: "ชุดผลิตภัณฑ์สำหรับการควบคุมสัตว์พาหะนำโรค ได้แก่ นก หนู และแมลงศัตรูสาธารณสุข ป้องกันการแพร่โรคจากสัตว์พาหะในพื้นที่สาธารณะ",
        descriptionEn: "Product set for controlling disease vectors including birds, rodents, and public health pest insects. Prevents disease transmission from vectors in public areas.",
        objective: "ควบคุมสัตว์พาหะนำโรคและป้องกันการแพร่โรคจากนก หนู และแมลง",
        objectiveEn: "Control disease vectors and prevent transmission from birds, rodents, and insects",
        icon: "pest",
        colorScheme: {
            primary: "#0A2463",
            secondary: "#1E3A8A",
            accent: "#F59E0B"
        },
        preventionFlow: [
            {
                step: 1,
                title: "ควบคุมนกพาหะ",
                titleEn: "Bird Control",
                description: "ไล่นกจากอาคารและพื้นที่",
                product: "RejeX-it"
            },
            {
                step: 2,
                title: "ควบคุมหนู",
                titleEn: "Rodent Control",
                description: "กำจัดหนูในพื้นที่เสี่ยง",
                product: "Wax Block"
            },
            {
                step: 3,
                title: "ควบคุมแมลง",
                titleEn: "Insect Control",
                description: "พ่นควบคุมแมลงคลาน",
                product: "Safrotin MC"
            }
        ],
        productIds: ["rejex-it", "wax-block-rodenticide", "safrotin-mc"],
        images: [
            "/image/set3/Set3.jpg",
            "/image/set3/Set3 Number2.jpg",
            "/image/set3/Set3 Number3.jpg",
            "/image/set3/Set3 Number4.jpg",
            "/image/set3/Set3 Number5.jpg",
            "/image/set3/Set3 Number6.jpg",
            "/image/set3/Set3 Number7.jpg"
        ]
    }
];

// Helper to get products by set
export const getProductsBySet = (setId: string): Product[] => {
    return products.filter(p => p.setId === setId);
};

// Legacy export for backward compatibility
export const productSetInfo = productSets[0];

export const companyInfo = {
    name: "Public Health Chemical Solutions",
    nameTh: "โซลูชั่นเคมีภัณฑ์สาธารณสุข",
    tagline: "Comprehensive Solutions for Disease Prevention",
    taglineTh: "โซลูชั่นครบวงจรเพื่อการป้องกันโรค",
    description: "Professional-grade public health products for disease prevention and control. Trusted by local governments, schools, and healthcare facilities across Thailand.",
    descriptionTh: "ผลิตภัณฑ์สาธารณสุขระดับมืออาชีพสำหรับการป้องกันและควบคุมโรค ได้รับความไว้วางใจจากหน่วยงานราชการ โรงเรียน และสถานพยาบาลทั่วประเทศไทย",
    mission: "Protecting communities through effective, safe, and accessible disease prevention solutions.",
    missionTh: "ปกป้องชุมชนด้วยผลิตภัณฑ์ป้องกันโรคที่มีประสิทธิภาพ ปลอดภัย และเข้าถึงได้"
};

export const targetUsers = [
    {
        id: "local-government",
        name: "Local Government",
        nameTh: "องค์กรปกครองส่วนท้องถิ่น (อปท.)",
        description: "Municipal and sub-district administration organizations",
        descriptionTh: "เทศบาล อบต. อบจ. สำหรับโครงการควบคุมโรค",
        icon: "government"
    },
    {
        id: "hospitals",
        name: "Hospitals & Clinics",
        nameTh: "โรงพยาบาลและคลินิก",
        description: "Healthcare facilities requiring hospital-grade disinfection",
        descriptionTh: "สถานพยาบาลที่ต้องการการฆ่าเชื้อระดับโรงพยาบาล",
        icon: "hospital"
    },
    {
        id: "schools",
        name: "Schools",
        nameTh: "โรงเรียนและสถานศึกษา",
        description: "Educational institutions protecting students and staff",
        descriptionTh: "ปกป้องนักเรียน ครู และบุคลากรจากโรคติดต่อ",
        icon: "school"
    },
    {
        id: "communities",
        name: "Communities",
        nameTh: "ชุมชนและหมู่บ้าน",
        description: "Village health volunteers and community leaders",
        descriptionTh: "อสม. ผู้นำชุมชน และหมู่บ้านจัดสรร",
        icon: "community"
    },
    {
        id: "offices",
        name: "Offices & Buildings",
        nameTh: "สำนักงานและอาคาร",
        description: "Commercial buildings and office spaces",
        descriptionTh: "อาคารพาณิชย์และพื้นที่สำนักงาน",
        icon: "office"
    },
    {
        id: "markets",
        name: "Markets & Public Areas",
        nameTh: "ตลาดและพื้นที่สาธารณะ",
        description: "Fresh markets, parks, and public gathering spaces",
        descriptionTh: "ตลาดสด สวนสาธารณะ และพื้นที่ชุมชนคนเข้าออกมาก",
        icon: "market"
    }
];

export const contactInfo = {
    phone: "093 595 1945, 081 614 4914",
    email: "aody2514@gmail.com",
    line: "aody.ct2514",
    facebook: "PublicHealthSolutionsTH",
    address: "กรุงเทพมหานคร ประเทศไทย",
    addressEn: "Bangkok, Thailand",
    businessHours: "จันทร์ - ศุกร์ 8:30 - 17:30 น.",
    businessHoursEn: "Monday - Friday 8:30 AM - 5:30 PM"
};

export const safetyInfo = {
    certifications: [
        "Thai FDA Registered",
        "WHO Recommended",
        "GMP Certified Manufacturing",
        "Public Health Standard"
    ],
    certificationsTh: [
        "ขึ้นทะเบียน อย.",
        "แนะนำโดย WHO",
        "ผลิตตามมาตรฐาน GMP",
        "มาตรฐานสาธารณสุข"
    ],
    warnings: [
        "Keep out of reach of children",
        "Store in cool, dry place away from direct sunlight",
        "Do not ingest or apply to food",
        "Wash hands after handling chemicals",
        "Use in well-ventilated areas"
    ],
    warningsTh: [
        "เก็บให้พ้นมือเด็ก",
        "เก็บในที่เย็นและแห้ง หลีกเลี่ยงแสงแดดโดยตรง",
        "ห้ามรับประทานหรือใช้กับอาหาร",
        "ล้างมือหลังใช้สารเคมี",
        "ใช้ในที่มีอากาศถ่ายเท"
    ],
    guidelines: [
        "Read product labels carefully before use",
        "Follow recommended application rates",
        "Use appropriate personal protective equipment",
        "Dispose of containers according to local regulations",
        "Contact local health authorities for large-scale applications"
    ],
    guidelinesTh: [
        "อ่านฉลากผลิตภัณฑ์อย่างละเอียดก่อนใช้",
        "ปฏิบัติตามอัตราการใช้ที่แนะนำ",
        "สวมอุปกรณ์ป้องกันส่วนบุคคลที่เหมาะสม",
        "กำจัดบรรจุภัณฑ์ตามข้อกำหนดท้องถิ่น",
        "ติดต่อหน่วยงานสาธารณสุขสำหรับการใช้งานขนาดใหญ่"
    ],
    sdsNotice: "Safety Data Sheets (SDS) are available upon request for all products. Contact us for official documentation required for organizational procurement.",
    sdsNoticeTh: "เอกสารข้อมูลความปลอดภัย (SDS) มีให้สำหรับทุกผลิตภัณฑ์ ติดต่อเราเพื่อขอเอกสารราชการสำหรับการจัดซื้อขององค์กร"
};
