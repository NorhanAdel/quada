import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./component/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/about/About.jsx";
import VisionMission from "./pages/VisionMission.jsx";
import OurGoals from "./pages/OurGoals.jsx";
import Values from "./pages/values/Values.jsx";
import Leadership from "./pages/why-leadership/WhyLeadership.jsx";
import ConsultingServices from "./pages/ConsultingServices.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
    const [lang, setLang] = useState("ar"); // اللغة الأساسية

    return (
        <div
            className="App"
            dir={lang === "ar" ? "rtl" : "ltr"}
            style={{
                fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Poppins', sans-serif",
            }}
        >
            <NavbarComponent lang={lang} setLang={setLang} />

            <div id="home">
                <Home lang={lang} />
            </div>
            {/* ===== الخدمات ===== */}
            <div id="services">
                <Services lang={lang} />
            </div>
            {/* ===== الرسالة والرؤية ===== */}
            <div id="vision">
                <VisionMission lang={lang} />
            </div>

            {/* ===== القيم ===== */}
            <div id="values">
                <Values lang={lang} />
            </div>

            {/* ===== الأهداف ===== */}
            <div id="goals">
                <OurGoals lang={lang} />
            </div>

          

            {/* ===== من نحن ===== */}
            <div id="about">
                <About lang={lang} />
            </div>

            {/* ===== القيادة ===== */}
            <div id="leadership">
                <Leadership lang={lang} />
            </div>

            {/* ===== الخدمات الاستشارية ===== */}
            <div id="consulting">
                <ConsultingServices lang={lang} />
            </div>

            {/* ===== الفوتر ===== */}
            <div id="footer">
                <Footer lang={lang} />
            </div>
        </div>
    );
}

export default App;
