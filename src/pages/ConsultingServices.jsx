import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ConsultingServices.css";

const ConsultingServices = ({ lang }) => {
  const [activeTab, setActiveTab] = useState("admin");

  // ===== Tabs (5 Tabs) =====
  const tabs = [
    {
      id: "admin",
      label:
        lang === "ar" ? "الاستشارات الإدارية" : "Administrative Consulting",
    },
    {
      id: "edu",
      label: lang === "ar" ? "الاستشارات التربوية" : "Educational Consulting",
    },
    {
      id: "learn",
      label: lang === "ar" ? "الاستشارات التعليمية" : "Learning Consulting",
    },
    {
      id: "research",
      label: lang === "ar" ? "استشارات البحوث" : "Research Consulting",
    },
    {
      id: "admission",
      label: lang === "ar" ? "استشارات القبول" : "Admission Consulting",
    },
  ];

  // ===== Content =====
  const content = {
    admin: {
      ar: [
        "بناء واستقطاب القدرات والقيادات المؤسسية لكافة المستويات",
        "إعادة البناء وتطوير الهياكل وإدارة التحول الرقمي",
        "تطوير أركان الإدارة الاستراتيجية والأداء المؤسسي",
        "إدارة التغيير الجزئي والتحول الكلي",
        "إدارة المخاطر والامتثال ونماذج الحوكمة الذكية",
        "بناء المؤشرات الذكية وقياس الإنتاجية والعائد الاجتماعي",
        "صناعة المحتوى والعروض التقديمية",
      ],
      en: [
        "Building and attracting institutional leadership at all levels",
        "Developing structures and managing digital transformation",
        "Strategic management and institutional performance development",
        "Managing change and full transformation",
        "Risk management and smart governance",
        "Building smart KPIs and measuring impact",
        "Content creation and presentations",
      ],
    },

    edu: {
      ar: [
        "تقديم الاستشارات التربوية لإدارة المنشآت التعليمية",
        "استشارات التقييم والتقويم والقياس التربوي",
        "رفع كفاءة القيادات والمعلمين",
        "حلول المشكلات السلوكية للطلاب",
        "اكتشاف وتمكين المواهب والقيادات",
      ],
      en: [
        "Educational consulting for institutions management",
        "Assessment and evaluation consulting",
        "Enhancing teachers and leadership efficiency",
        "Solutions for student behavioral issues",
        "Discovering and empowering talents",
      ],
    },

    learn: {
      ar: [
        "ريادة المنشآت التعليمية في التعليم الرقمي",
        "تحويل المقررات إلى محتوى ذكي وتفاعلي",
        "شهادات الجودة والتميز",
        "تطوير القيادات التعليمية",
        "تحسين جودة التعليم ومخرجاته",
      ],
      en: [
        "Leading institutions in digital learning",
        "Transforming courses into smart interactive content",
        "Quality and excellence certifications",
        "Developing educational leadership",
        "Improving education quality and outcomes",
      ],
    },

    research: {
      ar: [
        "إعداد ومراجعة الخطط البحثية",
        "تحكيم البحوث العلمية",
        "تحليل البيانات باستخدام الأدوات الإحصائية",
        "النشر في المجلات العلمية المحكمة",
        "دعم إعداد رسائل الماجستير والدكتوراه",
      ],
      en: [
        "Preparing and reviewing research proposals",
        "Scientific research arbitration",
        "Statistical data analysis",
        "Publishing in peer-reviewed journals",
        "Supporting master's and PhD theses",
      ],
    },

    admission: {
      ar: [
        "توفير المتخصصين لتمكين طلاب وطالبات الثانوية في اختبارات القبول",
        "تقديم الاستشارات لاختيار التخصص المناسب",
        "مساعدة الطلاب للتقديم في أفضل جامعات العالم بكافة التخصصات",
        "التأهيل لاختبارات القدرات والتحصيلي وSAT وIELTS وغيرها",
        "إعداد خطط قبول مخصصة لكل طالب",
      ],
      en: [
        "Providing specialists to prepare students for admission tests",
        "Consulting on choosing the right major",
        "Helping students apply to top universities worldwide",
        "Preparation for SAT, IELTS and other exams",
        "Personalized admission plans",
      ],
    },
  };

  return (
    <section className="consulting-section" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {lang === "ar" ? "خدماتنا الاستشارية" : "Our Consulting Services"}
        </motion.h2>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="tab-content"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ul className="services-list">
            {content[activeTab][lang].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingServices;
