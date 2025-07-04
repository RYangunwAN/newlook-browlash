import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import about1 from "../assets/imgs/about_1.png";
import about2 from "../assets/imgs/about_2.png";
import about3 from "../assets/imgs/about_3.png";
import about4 from "../assets/imgs/about_4.jpg";
import newlook from "../assets/imgs/NewLook_Gold.png";
import shine from "../assets/imgs/about_shine.png";
import "../style/about.css";

const About: React.FC = () => {
    const flickityOptions = {
        cellAlign: "center",
        autoPlay: true,
        contain: false,
        pageDots: false,
        prevNextButtons: false,
        initialIndex: 1,
        adaptiveHeight: true,
    };

    return (
        <section className="py-8 flex flex-col items-center justify-center bg-[#FAE4E9] pb-20">
            {/* Row 1: Spacer or could be a background/empty row */}
            <div className="mb-4 w-full ">
                <img
                    src={shine}
                    alt="shine"
                    className="absolute z-0 top-195 left-1/2 -translate-x-1/2 w-auto h-[420px]"
                />
                <Flickity
                    className="carousel w-full"
                    options={flickityOptions}
                    reloadOnUpdate
                >
                    <div className="carousel-cell">
                        <img src={about1} alt="1" />
                    </div>
                    <div className="carousel-cell">
                        <img src={about2} alt="2" />
                    </div>
                    <div className="carousel-cell">
                        <img src={about4} alt="4" />
                    </div>
                    <div className="carousel-cell">
                        <img src={about3} alt="3" />
                    </div>
                </Flickity>
            </div>
            {/* Row 2: Contains 3 rows */}
            <div className="w-full max-w-xs flex flex-col items-center gap-4">
                {/* Row 2.1: h2 tag */}
                <h2 className="text-2xl font-bold text-black">
                    Tampil percaya diri dengan
                </h2>
                {/* Row 2.2: Image */}
                <img src={newlook} alt="About" className="w-60 rounded-lg" />
                {/* Row 2.3: p tag */}
                <p className="text-base text-gray-600 text-center">
                    Dan kami di sini untuk mendukung itu setiap hari.
                </p>
            </div>
        </section>
    );
};

export default About;
