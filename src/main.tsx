import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Service from "./sections/Service.tsx";
import Portfolio from "./sections/Portfolio.tsx";
import Testimonial from "./sections/Testimonial.tsx";
import Location from "./sections/Location.tsx";
import Footer from "./sections/Footer.tsx";
import CTA from "./sections/CTA.tsx";
import FloatingCTA from "./components/FloatingCTA.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <>
            <Helmet>
                <title>
                    Eyelash & Sulam Alis Kelapa Gading | Nailart Natural Jakarta
                </title>
                <meta
                    name="description"
                    content="Layanan eyelash extension, nailart, dan sulam alis natural terbaik di Kelapa Gading, Jakarta. Klinik kecantikan profesional untuk tampil cantik alami."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://newlook-browlash.id/" />
            </Helmet>

            <Navbar />
            <Hero />
            <About />
            <Service />
            <Portfolio />
            <Testimonial />
            <Location />
            <CTA />
            <Footer />
            <FloatingCTA />
        </>
    </StrictMode>
);
