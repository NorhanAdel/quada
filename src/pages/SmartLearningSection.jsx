import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "./SmartLearning.css";

const SmartLearningSection = ({ lang }) => {
  // اللغة الأساسية عربي
  const isAR = lang === "ar";

  const content = {
    title: isAR ? "منصة التعلم الذكي عن بعد" : "Smart Learning Platform Online",
    subtitle: isAR ? "قريبًا بإذن الله" : "Coming Soon, God willing",
    description: [
      isAR
        ? `وقريبًا بإذن الله بعد أخذ الموافقات النظامية تدشين منصة التعلم الذكي عن بعد "On Line Edu-consultations" وذلك للمساهمة في رسم خارطة طريق للمشاركة في رحلة المساهمة في صناعة التفوق المقارن.`
        : `Soon, God willing, after obtaining regulatory approvals, the Smart Learning Online platform "On Line Edu-consultations" will be launched to help map the path for contributing to the journey of comparative excellence.`,
      isAR
        ? `حيث أن هذه المنصة ستركز بإذن الله على تقديم الاستشارات التعليمية والتعليم المساند لكافة المراحل السبع، وهي الابتدائية، المتوسط، الثانوي، الجامعي، الماجستير وما يعادلها، والدكتوراة. كما تركز المنصة على تمكين الطلاب علميًا من خلال مدرسين ومستشارين تربويين خصوصيين متفرغين وذلك لتجويد التحصيل العلمي للطلاب والطالبات الراغبين في تحقيق أداء عالٍ ونتائج متميزة في التحصيل العلمي لكافة المراحل التعليمية الأساسية.`
        : `This platform will focus, God willing, on providing educational consultations and support for all seven stages: primary, middle, secondary, university, master's and equivalent, and doctoral. It will also empower students academically through dedicated private teachers and educational consultants to improve academic achievement for students seeking high performance and outstanding results in all basic educational stages.`,
      isAR
        ? `وسيكون بإذن الله من ضمن خدمات المنصة تقديم الاستشارات التعليمية والتعليم المساند لكافة المراحل الجامعية، والماجستير وما يعادلها من الشهادات الاحترافية المهنية، والدكتوراة. كما ستركز المنصة على تمكين الطلاب علميًا وبحثيًا من خلال أكاديميين وباحثين وذلك لتجويد التحصيل العلمي والبحثي للطلاب والطالبات الراغبين في تحقيق أداء عالٍ ونتائج متميزة.`
        : `Among the platform services will be providing educational consultations and support for all university levels, master's and equivalent professional certifications, and doctoral studies. The platform will also empower students academically and in research through academics and researchers to improve academic and research achievement for students seeking high performance and excellence.`,
      isAR
        ? `كما ستتيح المنصة بإذن الله وجود نوافذ مباشرة على البحوث العلمية وملخصاتها، وإمكانية نشرها على الموقع لإيجاد مكتبة علمية مرجعية لكافة أنواع البحوث والدراسات العلمية.`
        : `The platform will provide direct access to scientific research and summaries and the ability to publish them on the site to create a reference scientific library for all types of scientific research and studies.`,
      isAR
        ? `كما أن المنصة ستقدم استشارات نوعية وبرامج تدريبية مركزة لضمان القبولات في أرقى الجامعات العالمية المعتمدة لكافة المراحل الدراسية والزمالات الأكاديمية.`
        : `The platform will offer qualitative consultations and focused training programs to ensure admissions to top accredited international universities for all academic levels and fellowships.`,
      isAR
        ? `وأخيرًا وليس آخرًا فإن المنصة بإذن الله ستتيح خيارات واسعة لضمان التأسيس الموجّه لبرامج اللغات والزمالات المهنية، وكذلك للاختبارات المعيارية المرجعية للقبول في الجامعات والمعاهد سواء للدراسة في الداخل أو الخارج.`
        : `Finally, the platform will provide wide options to ensure guided foundations for language programs and professional fellowships, as well as standardized tests for admission to universities and institutes, both locally and internationally.`,
    ],
    exams: isAR
      ? [
          "اختبار التحصيلي",
          "اختبار القدرات العقلية والتحليلية",
          "SAT (Scholastic Assessment Test)",
          "ACT (American College Test)",
          "CLT (Classic Learning Test)",
          "STEP اختبار اللغة الإنجليزية",
          "AP (Advanced Placement)",
          "TOEFL (Test of English as a Foreign Language)",
          "IELTS (International English Language Testing System)",
          "GED (General Educational Development)",
          "HiSET (High School Equivalency Test)",
          "TOEIC (Test of English for International Communication)",
        ]
      : [
          "Achievement Test",
          "Mental & Analytical Abilities Test",
          "SAT (Scholastic Assessment Test)",
          "ACT (American College Test)",
          "CLT (Classic Learning Test)",
          "STEP English Test",
          "AP (Advanced Placement)",
          "TOEFL (Test of English as a Foreign Language)",
          "IELTS (International English Language Testing System)",
          "GED (General Educational Development)",
          "HiSET (High School Equivalency Test)",
          "TOEIC (Test of English for International Communication)",
        ],
  };

  return (
    <section className="smart-section" dir={isAR ? "rtl" : "ltr"}>
      <div className="container">
        {/* Title */}
        <motion.div
          className="smart-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{content.title}</h2>
          <h4>{content.subtitle}</h4>
        </motion.div>

        {/* Description */}
        <motion.div
          className="smart-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {content.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </motion.div>

        {/* Exams List */}
        <motion.div
          className="exam-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {content.exams.map((exam, index) => (
            <div key={index} className="exam-item">
              <FaCheckCircle className="check-icon" />
              <span>{exam}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SmartLearningSection;
