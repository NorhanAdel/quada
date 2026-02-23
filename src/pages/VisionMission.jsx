import React from "react";
import { 
    FaChalkboardTeacher, // التعليمية
    FaUniversity,         // التربوية
    FaBusinessTime,       // الإدارية
    FaSearch,             // للبحوث
    FaCheckCircle         // للقبول
} from "react-icons/fa";
import "./VisionMission.css";

const VisionMission = ({ lang = "en" }) => {

    const text = {
        ar: {
            title: "مجالات خدماتنا",
            cards: [
                { icon: FaChalkboardTeacher, title: "خدمات تعليمية" },
                { icon: FaUniversity, title: "خدمات تربوية" },
                { icon: FaBusinessTime, title: "خدمات إدارية" },
                { icon: FaSearch, title: "خدمات للبحوث" },
                { icon: FaCheckCircle, title: "خدمات للقبول" },
            ]
        },
        en: {
            title: "Our Services",
            cards: [
                { icon: FaChalkboardTeacher, title: "Educational Services" },
                { icon: FaUniversity, title: "Pedagogical Services" },
                { icon: FaBusinessTime, title: "Administrative Services" },
                { icon: FaSearch, title: "Research Services" },
                { icon: FaCheckCircle, title: "Admission Services" },
            ]
        }
    };

    return (
        <section className="vision-section" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="container">
                <h2 className="vision-main-title">{text[lang].title}</h2>

                <div className="vision-grid">
                    {text[lang].cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <div className="vision-card" key={i}>
                                <Icon className="vision-icon" />
                                <h3>{card.title}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default VisionMission;