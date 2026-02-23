import React from "react";
import {
  FaChartLine,
  FaHandshake,
  FaUserTie,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaHeadset,
  FaCheckCircle,
  FaSyncAlt,
  FaAward,
} from "react-icons/fa";
import "./WhyLeadership.css";

const text = {
  ar: {
    heading: "لماذا القيادة الريادية؟",
    subtitle: "أسباب مقنعة تجعلنا اختيارك الأفضل في عالم الاستشارات",
    cards: [
      {
        icon: <FaChartLine />,
        title: "خبرات متكاملة",
        desc: "أكثر من مائة دراسة لأكثر من مائة منظمة ومنشأة في كافة القطاعات خلال الثلاثة عقود الماضية",
      },
      {
        icon: <FaHandshake />,
        title: "شراكات وتحالفات",
        desc: "مع كيانات معتمدة علميًا ومهنيًا محليًا ودوليًا",
      },
      {
        icon: <FaUserTie />,
        title: "خبرات متمكنة",
        desc: "علميًا وعمليًا في كافة المجالات والخدمات المقدمة من المكتب",
      },
      {
        icon: <FaMoneyBillWave />,
        title: "سعر منافس",
        desc: "بل ومجاني للجهات غير الربحية وللأفراد الرياديين من ذوي الدخول المنخفضة",
      },
      {
        icon: <FaClipboardCheck />,
        title: "جودة الاستشارات",
        desc: "والدراسات المنبثقة عنها وقابليتها للتطبيق الفعلي",
      },
      {
        icon: <FaHeadset />,
        title: "خدمات شاملة",
        desc: "خدمات شاملة ومتواصلة لكافة العملاء والرد على ملاحظاتهم واستفساراتهم",
      },
      {
        icon: <FaCheckCircle />,
        title: "خدمات مجانية لما بعد",
        desc: "خدمات مجانية لما بعد تقديم الاستشارات لضمان التنفيذ المحكم",
      },
      {
        icon: <FaSyncAlt />,
        title: "مواكبة ذكية",
        desc: "مواكبة ذكية لكل ما هو جديد ومفيد وأخلاقي",
      },
      {
        icon: <FaAward />,
        title: "برامج ولاء لب",
        desc: "تقدير ومكافآت (برامج ولاء لب) لتكريم العلماء الدائمين والأوفياء",
      },
    ],
  },
  en: {
    heading: "Why Leadership Pioneering?",
    subtitle:
      "Convincing reasons that make us your best choice in the consultancy world",
    cards: [
      {
        icon: <FaChartLine />,
        title: "Comprehensive Experience",
        desc: "Over 100 studies for more than 100 organizations across all sectors in the last three decades",
      },
      {
        icon: <FaHandshake />,
        title: "Partnerships & Alliances",
        desc: "With scientifically and professionally accredited entities locally and internationally",
      },
      {
        icon: <FaUserTie />,
        title: "Skilled Expertise",
        desc: "Scientifically and practically in all fields and services offered by the office",
      },
      {
        icon: <FaMoneyBillWave />,
        title: "Competitive Pricing",
        desc: "Free for non-profits and low-income entrepreneurial individuals",
      },
      {
        icon: <FaClipboardCheck />,
        title: "Consulting Quality",
        desc: "And the derived studies with applicability in real practice",
      },
      {
        icon: <FaHeadset />,
        title: "Comprehensive Services",
        desc: "Continuous services to all clients and responding to their feedback and inquiries",
      },
      {
        icon: <FaCheckCircle />,
        title: "Post-Service Free Support",
        desc: "Free services after consultation to ensure flawless implementation",
      },
      {
        icon: <FaSyncAlt />,
        title: "Smart Adaptation",
        desc: "Keeping up intelligently with everything new, useful, and ethical",
      },
      {
        icon: <FaAward />,
        title: "LOB Loyalty Programs",
        desc: "Recognition and rewards programs honoring loyal and dedicated scholars",
      },
    ],
  },
};

const WhyLeadership = ({ lang = "ar" }) => {
  return (
    <section className="why-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <h1 className="why-title">{text[lang].heading}</h1>
        <p className="why-subtitle">{text[lang].subtitle}</p>

        <div className="why-grid">
          {text[lang].cards.map((item, index) => (
            <div
              className="why-card"
              style={{ animationDelay: `${index * 0.15}s` }}
              key={index}
            >
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLeadership;
