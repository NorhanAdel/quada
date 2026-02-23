import React from "react";
import { motion } from "framer-motion";
import {
    FaHandsHelping,
    FaAward,
    FaBalanceScale,
    FaHandshake,
    FaHeart,
    FaLeaf,
    FaGlobe,
    FaGift
} from "react-icons/fa";
import "./Values.css";

const ValuesPage = ({ lang }) => {
    const isAR = lang === "ar";

    const values = [
        {
            icon: <FaGift />,
            title: isAR ? "المجانية" : "Free Access",
            desc: isAR
                ? "الالتزام بواجب المسؤولية المجتمعية للجمعيات الخيرية ورواد الأعمال المبتدئين."
                : "Commitment to social responsibility toward charities and early-stage entrepreneurs.",
        },
      
        {
            icon: <FaAward />,
            title: isAR ? "الاحترافية" : "Professionalism",
            desc: isAR
                ? "الاستعانة بأفضل الكفاءات ذات الخبرة المتراكمة والالتزام بأعلى معدلات الأداء."
                : "Engaging top talents with accumulated expertise and maintaining the highest performance standards.",
        },
        {
            icon: <FaBalanceScale />,
            title: isAR ? "الأخلاقية" : "Ethics & Integrity",
            desc: isAR
                ? "العمل بكل مسؤولية وأمانة ونزاهة وشفافية في كافة مراحل العمل."
                : "Operating with responsibility, honesty, integrity, and transparency at all stages.",
        },
        {
            icon: <FaHandshake />,
            title: isAR ? "التشاركية" : "Partnership",
            desc: isAR
                ? "بناء شراكات وعلاقات وتحالفات متينة ووثيقة طويلة الأمد."
                : "Building strong, trusted, and long-term partnerships and alliances.",
        },
        {
            icon: <FaHeart />,
            title: isAR ? "الإنسانية" : "Human-Centered Values",
            desc: isAR
                ? "مراعاة القيم الإنسانية المطلقة في كافة أنواع العلاقات والتعاملات."
                : "Respecting universal human values in all forms of relationships and interactions.",
        },
        {
            icon: <FaLeaf />,
            title: isAR ? "البيئية" : "Environmental Responsibility",
            desc: isAR
                ? "المساهمة في تعزيز الثقافة البيئية والمحافظة على الموارد."
                : "Contributing to environmental awareness and sustainable resource preservation.",
        },
        {
            icon: <FaGlobe />,
            title: isAR ? "العالمية" : "Global Outlook",
            desc: isAR
                ? "الانفتاح على أفضل الممارسات العالمية وتبني المعايير الدولية."
                : "Adopting global best practices and international standards.",
        },
    ];

    return (
        <section className="values-page" dir={isAR ? "rtl" : "ltr"}>
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {isAR ? "قيمنا" : "Our Values"}
            </motion.h1>

            <div className="values-grid">
                {values.map((value, index) => (
                    <motion.div
                        key={index}
                        className="value-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <div className="icon">{value.icon}</div>
                        <h3>{value.title}</h3>
                        <p>{value.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ValuesPage;
