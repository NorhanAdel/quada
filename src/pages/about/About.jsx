import React from "react";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaLightbulb,
    FaCubes,
    FaUsers,
    FaBrain,
    FaLaptopCode,
    FaChartLine,
    FaHandshake,
    FaDatabase,
    FaRocket
} from "react-icons/fa";
import "./About.css";

const About = ({ lang }) => {
    const isAR = lang === "ar";

    // Animation Variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const points = [
        {
            icon: <FaCubes />,
            title: isAR
                ? "منصات تفاعلية متخصصة"
                : "Specialized Interactive Platforms",
        },
        {
            icon: <FaBrain />,
            title: isAR
                ? "مناهج علمية مثبتة ومتحققة"
                : "Verified & Validated Scientific Curricula",
        },
        {
            icon: <FaLightbulb />,
            title: isAR
                ? "وسائل عملية مجربة ومنتجة"
                : "Proven and Productive Practical Methods",
        },
        {
            icon: <FaLaptopCode />,
            title: isAR
                ? "برامج ذكية رقمية متقدمة"
                : "Advanced Smart Digital Programs",
        },
        {
            icon: <FaChartLine />,
            title: isAR
                ? "استراتيجيات تنافسية مركزة"
                : "Focused Competitive Strategies",
        },
        {
            icon: <FaCheckCircle />,
            title: isAR
                ? "تجارب مثمرة في القطاعات الثلاثة"
                : "Fruitful Experiences Across Three Sectors",
        },
        {
            icon: <FaRocket />,
            title: isAR
                ? "مبادرات رائدة خصوصًا في الاقتصاد التشاركي"
                : "Pioneering Initiatives in the Sharing Economy",
        },
        {
            icon: <FaDatabase />,
            title: isAR
                ? "أرصدة بياناتية ومعلوماتية متحققة"
                : "Verified Data & Knowledge Assets",
        },
        {
            icon: <FaUsers />,
            title: isAR
                ? "استشارات ريادية من خلال مستشارين متمرسين"
                : "Entrepreneurial Consultancy by Senior Experts",
        },
        {
            icon: <FaHandshake />,
            title: isAR
                ? "استشارات تكاملية عبر شراكات مستقلة"
                : "Integrated Consultancy Through Independent Partnerships",
        },
    ];

    return (
        <section className="about-section" dir={isAR ? "rtl" : "ltr"}>
            <div className="container">

                {/* Title */}
                <motion.div
                    className="about-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h5>{isAR ? "من نحن" : "About Us"}</h5>
                    <h2>
                        {isAR
                            ? "الريادة في تقديم الحلول والاستشارات الذكية"
                            : "Leadership in Smart Solutions & Consultancy"}
                    </h2>
                </motion.div>

                <motion.p
                    className="about-main-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {isAR ? (
                        <>
                            مكتب متخصص في تقديم الاستشارات الإدارية والتعليمية والتربوية
                            والتدريبية والحلول الإبداعية الذكية والتطويرية في تلك المجالات،
                            لأجل المساهمة في صناعة القيادة والريادة للأفراد والكيانات بكافة
                            أنواعها وفق أحدث المتطلبات العلمية والمعايير المهنية والمقارنات
                            المرجعية العالمية، متسلحين في أداء أعمالنا بأخلاقيات القوة
                            والأمانة ومرجعيات المسؤولية والاحترافية.
                            <br /><br />
                            في لُب نسعى ككيان استشاري متخصص إلى المساهمة في الارتقاء بأهم
                            متطلبات جودة الحياة – القيادة والإدارة والتربية والتعليم وخدمات
                            الكوتشينج والاستشارات التدريبية – لتحقيق التمكّن والتمكين
                            القيادي والريادي والإبداعي لعملائنا من خلال حلول تكاملية وفق
                            أعلى المعايير المهنية والمقارنات المرجعية العالمية.
                        </>
                    ) : (
                        <>
                            A specialized consultancy office offering administrative,
                            educational, pedagogical, and training services, along with
                            innovative smart and developmental solutions. We aim to
                            contribute to building leadership and entrepreneurship for
                            individuals and organizations of all types in accordance with
                            the latest scientific requirements, professional standards,
                            and global benchmarking practices, guided by ethics of
                            integrity, responsibility, and professionalism.
                            <br /><br />
                            At LOB, we strive as a specialized consultancy entity to
                            enhance key quality-of-life requirements — leadership,
                            management, education, coaching, and training consultancy
                            services — enabling our clients to achieve leadership,
                            entrepreneurial, and creative empowerment through integrated
                            solutions aligned with the highest professional standards and
                            global benchmarks.
                        </>
                    )}
                </motion.p>


                {/* Points Section */}
                <motion.div
                    className="about-points"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            className="point-box"
                            variants={itemVariants}
                        >
                            <div className="point-icon">{point.icon}</div>
                            <h4>{point.title}</h4>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default About;
