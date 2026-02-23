import { useEffect, useRef } from "react";
import {
  FaBusinessTime,
  FaGavel,
  FaChalkboardTeacher,
  FaUniversity,
  FaSearch,
} from "react-icons/fa";
import "./Services.css";

const Services = ({ lang = "en" }) => {
  const currentLang = ["ar", "en"].includes(lang) ? lang : "en";

  const licenseRef = useRef(null);
  const cardRefs = useRef([]);

  const text = {
    ar: {
      heading: "القيادة الريادية للاستشارات (لب - LP)",
      box1: "مكتب استشارات تعليمية وتربوية وإدارية سعودي مقره الرئيسي بالرياض _ المملكة العربية السعودية",
      box2: "مرخص بالسجل التجاري رقم: 5850125914",
      box2a: "الرقم الوطني الموحد: 7016328770",
      cards: [
        { icon: FaChalkboardTeacher, title: "الخدمات التعليمية" },
        { icon: FaUniversity, title: "الخدمات التربوية" },
        { icon: FaBusinessTime, title: "الخدمات الإدارية" },
        { icon: FaGavel, title: "الخدمات التعليمية" },
        { icon: FaSearch, title: "خدمات البحوث" },
      ],
    },
    en: {
      heading: "Entrepreneurial Leadership for Consultations (LP)",
      box1: "A Saudi consultancy office specialized in educational, pedagogical, and administrative services, headquartered in Riyadh, Kingdom of Saudi Arabia.",
      box2: "Licensed under Commercial Registration No: 5850125914",
      box2a: "Unified National Number: 7016328770",
      cards: [
        { icon: FaChalkboardTeacher, title: "Educational Services" },
        { icon: FaUniversity, title: "Pedagogical Services" },
        { icon: FaBusinessTime, title: "Administrative Services" },
        { icon: FaGavel, title: "Educational Services" },
        { icon: FaSearch, title: "Research Services" },
      ],
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (licenseRef.current) observer.observe(licenseRef.current);
    cardRefs.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="services-section"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <h2 className="services-title">{text[currentLang].heading}</h2>

        <div className="services-license-box" ref={licenseRef}>
          <p>{text[currentLang].box1}</p>
          <p>{text[currentLang].box2}</p>
          <p>{text[currentLang].box2a}</p>
        </div>

        <div className="services-grid">
          {text[currentLang].cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                className="service-card"
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <Icon className="service-icon" />
                <h3>{card.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
