// component/navbar/Navbar.jsx
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../App.css";
import logo from "../../assets/logo.jpeg";

const NavbarComponent = ({ lang, setLang }) => {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    // تبديل اللغة
    const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

    // ترتيب الأقسام
    const sections = [
        "home",
        "vision",
        "values",
        "goals",
        "about",
        "leadership",
        "consulting",
        "footer",
    ];

    // الترجمات
    const t = {
        ar: {
            home: "الرئيسية",
            vision: "رؤيتنا ورسالتنا",
            values: "قيمنا",
            goals: "أهدافنا",
            about: "من نحن",
            leadership: "القيادة",
            consulting: "الخدمات الاستشارية",
            crsuper7: "CR Super 7",
            btn: "EN",
        },
        en: {
            home: "Home",
            vision: "Vision & Mission",
            values: "Values",
            goals: "Our Goals",
            about: "About",
            leadership: "Leadership",
            consulting: "Consulting Services",
            crsuper7: "CR Super 7",
            btn: "AR",
        },
    };

    // تتبع القسم النشط
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // تغيير شكل الـ Navbar مع الاسكرول
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}
            style={{
                transition: "0.3s",
                width: "100%",
                padding: "12px 30px",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand fw-bold" href="#home">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "50px", objectFit: "contain" }}
                    />
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul
                        className={`navbar-nav ${
                            lang === "ar" ? "me-auto" : "ms-auto"
                        } mb-2 mb-lg-0`}
                    >
                        {sections.map((key) => (
                            <li className="nav-item" key={key}>
                                <a
                                    className={`nav-link ${
                                        activeSection === key ? "active-link" : ""
                                    } ${lang === "ar" ? "rtl-link" : "ltr-link"}`}
                                    href={`#${key}`}
                                    onClick={() => setActiveSection(key)}
                                >
                                    {t[lang][key]}
                                </a>
                            </li>
                        ))}

                        {/* CR Super 7 */}
                        <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    lang === "ar" ? "rtl-link" : "ltr-link"
                                }`}
                                href="https://peppy-bombolone-0b3352.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t[lang].crsuper7}
                            </a>
                        </li>

                        {/* Language Button */}
                        <li className="nav-item ms-3">
                            <button
                                className="btn btn-lang"
                                onClick={toggleLang}
                            >
                                {t[lang].btn}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
