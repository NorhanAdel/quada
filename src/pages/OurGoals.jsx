import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCubes,
  FaUsers,
  FaBrain,
  FaLaptopCode,
  FaCheckCircle,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaLeaf,
  FaGraduationCap, // أيقونة للكارت الجديد 1
  FaUniversity, // أيقونة للكارت الجديد 2
} from "react-icons/fa";
import "./OurGoals.css";

const Goals = ({ lang }) => {
  const isAR = lang === "ar";

  const goals = [
    {
      icon: <FaCubes />,
      text: isAR
        ? "إطلاق منصات ذكية تفاعلية لتقديم استشارات نوعية إدارياً وتعليمياً وتربوياً"
        : "Launching smart interactive platforms providing administrative, educational, and pedagogical consultancy",
    },
    {
      icon: <FaLightbulb />,
      text: isAR
        ? "التميز في صناعة المحتوى واقتراح ملفات المؤتمرات والفعاليات وإدارتها"
        : "Excellence in content creation and proposing and managing conferences and events",
    },
    {
      icon: <FaRocket />,
      text: isAR
        ? "المساهمة في بناء قصص نجاح ريادية مواكبة للتحولات القيادية لرؤية المملكة 2030"
        : "Contributing to building entrepreneurial success stories aligned with Saudi Vision 2030",
    },
    {
      icon: <FaUsers />,
      text: isAR
        ? "تمكين المنظمات بكافة أنواعها وأحجامها لمعالجة المشكلات المعقدة"
        : "Empowering organizations of all types and sizes to address complex challenges",
    },
    {
      icon: <FaChartLine />,
      text: isAR
        ? "تقديم دراسات معيارية لتحسين العمليات وأداء الأعمال وزيادة الكفاءة الإنتاجية"
        : "Providing benchmark studies to improve operations, performance, and productivity efficiency",
    },
    {
      icon: <FaBrain />,
      text: isAR
        ? "بناء استراتيجيات إدارية مبتكرة تساعد القادة على اتخاذ قرارات ريادية"
        : "Building innovative administrative strategies supporting leaders in entrepreneurial decision-making",
    },
    {
      icon: <FaHandshake />,
      text: isAR
        ? "مساندة المنظمات لتحقيق أهدافها بكفاءة وفعالية واستباقية في بيئات العمل المتغيرة"
        : "Supporting organizations to achieve their goals efficiently, effectively, and proactively in changing environments",
    },
    {
      icon: <FaCheckCircle />,
      text: isAR
        ? "مساعدة المنظمات على الارتقاء بأعمالها لتحقيق التطوير والتميز المؤسسي والريادة"
        : "Helping organizations elevate their performance toward institutional excellence and leadership",
    },
    {
      icon: <FaLeaf />,
      text: isAR
        ? "إعادة تشكيل أهداف المنظمات لتحقيق التكامل مع المسؤولية الاجتماعية والبيئية"
        : "Reshaping organizational goals to align with social and environmental responsibility",
    },
    {
      icon: <FaLaptopCode />,
      text: isAR
        ? "إتاحة منصات تفاعلية للتعلم والتطوير الذاتي عبر كفاءات إدارية وتعليمية وتربوية"
        : "Providing interactive platforms for self-learning and development through administrative and educational expertise",
    },
    // الكارتين الجديدين:
    {
      icon: <FaGraduationCap />,
      text: isAR
        ? "توفير المتخصصين لتمكين طلاب و طالبات الثانوية فى اختبارات القبول و تقديم الاستشارات لإختيار التخصص المناسب"
        : "Providing specialists to enable high school students in admission tests and guidance for selecting the suitable major",
    },
    {
      icon: <FaUniversity />,
      text: isAR
        ? "مساعده الطلاب للتقديم فى افضل جامعات العالم بكل التخصصات"
        : "Assisting students to apply to the best universities in the world across all majors",
    },
  ];

  return (
    <section className="goals-section" dir={isAR ? "rtl" : "ltr"}>
      <motion.h2
        className="goals-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {isAR ? "أهدافنا" : "Our Goals"}
      </motion.h2>

      <div className="goals-grid">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            className="goal-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="goal-icon">{goal.icon}</div>
            <p>{goal.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
