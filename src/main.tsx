import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
    </StrictMode>
);
