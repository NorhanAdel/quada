import React from "react";
import bg from "../assets/bg.jpg";
import "./Home.css";

const Home = ({ lang }) => {
  const text = {
    ar: {
      title: "القيادة الريادية للاستشارات (LP)",
      subtitle: "مكتب استشارات تعليمية وإدارية مرخص",
      description:
        "نقود ليس فقط للنجاح بل إلى التميز والريادة بخبرات احترافية ورؤية استراتيجية متكاملة لتحقيق أهدافك بثقة واستدامة.",
      button: "ابدأ اقرأ المزيد",
    },
    en: {
      title: "Leadership of Pioneering Consultations (LP)",
      subtitle: "Licensed educational & administrative consultancy office",
      description:
        "We guide you not only to success but to excellence and leadership, with professional expertise and a comprehensive strategic vision to achieve your goals with confidence and sustainability.",
      button: "Start Reading",
    },
  };

  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content animate-hero">
        <h1 className="hero-title">{text[lang].title}</h1>
        <h5 className="hero-subtitle">{text[lang].subtitle}</h5>
        <p className="hero-desc">{text[lang].description}</p>

        <div className="hero-buttons">
          <a href="#services">
            <button className="btn-fill glow-btn">{text[lang].button}</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Home;
