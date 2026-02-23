import React from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg"; // استدعاء اللوجو
import "./Footer.css";

const Footer = ({ lang }) => {
    const text = {
        ar: {
            about:
                "مكتب القيادة الريادية للاستشارات يقدم حلولًا إدارية وتعليمية وتربوية مبتكرة وفق أعلى المعايير المهنية.",
            linksTitle: "روابط سريعة",
            links: ["الرئيسية", "من نحن", "خدماتنا", "أهدافنا", "تواصل معنا"],
            contactTitle: "تواصل معنا",
            address: "الرياض – المملكة العربية السعودية",
            copyright:
                "© جميع الحقوق محفوظة لمكتب القيادة الريادية للاستشارات 2025",
        },
        en: {
            about:
                "Leadership of Pioneering Consultations provides innovative administrative, educational, and pedagogical solutions with the highest professional standards.",
            linksTitle: "Quick Links",
            links: ["Home", "About Us", "Services", "Our Goals", "Contact Us"],
            contactTitle: "Contact Us",
            address: "Riyadh – Saudi Arabia",
            copyright:
                "© All Rights Reserved to Leadership of Pioneering Consultations 2025",
        },
    };

    const sectionIds = ["home", "about", "services", "goals", "footer"];

    return (
        <footer className="footer" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="container footer-grid">
                {/* About */}
                <div className="footer-col">
                    <img src={logo} alt="Logo" style={{ width: "120px", marginBottom: "12px" }} />
                    <p>{text[lang].about}</p>
                </div>

                {/* Links */}
                <div className="footer-col">
                    <h4>{text[lang].linksTitle}</h4>
                    <ul>
                        {text[lang].links.map((link, index) => (
                            <li key={index}>
                                <a href={`#${sectionIds[index]}`} className="footer-link">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h4>{text[lang].contactTitle}</h4>
                    <p><FaPhoneAlt /> +966 50 278 5394</p>
                    <p><FaEnvelope /> CR-Super7@gmail.com</p>
                    <p><FaMapMarkerAlt /> {text[lang].address}</p>
                </div>

                {/* Social */}
                <div className="footer-col">
                    <h4>Social</h4>
                    <div className="footer-social">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>{text[lang].copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
