import React from "react";
import { FaEye, FaBullseye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./VisionMission.css";

const VisionMission = ({ lang }) => {

    const text = {
        ar: {
            title: "رؤيتنا ورسالتنا",
            visionTitle: "رؤيتنا",
            visionText: "لتكون لب - بإذن الله - أحد أهم وأبرز البيوت الاستشارية في مجالها في هذا الجزء من العالم بحلول عام الرؤية 2030.",
            missionTitle: "رسالتنا",
            missionText: "تقديم خدمات استشارية ريادية من خلال استقطاب أفضل الكفاءات والخبرات الداخلية والخارجية وتسخير كافة الإمكانات والممكنات لأجل تقديم أفكار إبداعية وحلول عملية ومبادرات نوعية في عوالم التربية والتعليم والإدارة والقيادة.",
            button: "انتقل إلى الخدمات"
        },

        en: {
            title: "Our Vision & Mission",
            visionTitle: "Our Vision",
            visionText: "To become, God willing, one of the most prominent and leading consultancy houses in our field in this part of the world by Saudi Vision 2030.",
            missionTitle: "Our Mission",
            missionText: "Providing pioneering consultancy services by attracting the best internal and external talents and expertise, utilizing all capabilities to deliver creative ideas, practical solutions, and impactful initiatives in education, administration, and leadership.",
            button: "Go To Services"
        }
    };

    return (
        <section className="vision-section" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="container">

                <h2 className="vision-main-title">{text[lang].title}</h2>

                <div className="vision-grid">

                    {/* Vision */}
                    <div className="vision-card">
                        <FaEye className="vision-icon" />
                        <h3>{text[lang].visionTitle}</h3>
                        <p>{text[lang].visionText}</p>
                    </div>

                    {/* Mission */}
                    <div className="vision-card">
                        <FaBullseye className="vision-icon" />
                        <h3>{text[lang].missionTitle}</h3>
                        <p>{text[lang].missionText}</p>
                    </div>

                </div>

                <div className="vision-btn-box">
                    <button className="vision-btn ">
                        {text[lang].button}
                        {lang === "ar" ? <FaArrowLeft /> : <FaArrowRight />}
                    </button>
                </div>

            </div>
        </section>
    );
};

export default VisionMission;
