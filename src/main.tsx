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
                    Klinik Kecantikan Jakarta | Sulam Alis & Bibir Profesional
                </title>
                <meta
                    name="description"
                    content="Tampil cantik alami dengan layanan sulam alis dan bibir dari klinik kecantikan terbaik di Jakarta. Booking sekarang!"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="canonical" href="https://newlook-browlash.com" />
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
