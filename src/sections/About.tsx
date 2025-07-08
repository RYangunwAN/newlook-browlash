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
        <div className="bg-[#FAE4E9] ">
            <section className="py-8 flex flex-col lg:flex-row items-center justify-center pb-20 overflow-hidden lg:px-27 lg:justify-between lg:space-x-32">
                {/* Row 1: Spacer or could be a background/empty row */}
                <div className="mb-4 relative w-full lg:w-2/5 md:w-full">
                    <img
                        src={shine}
                        alt=""
                        className="absolute z-0 -top-15 left-1/2 -translate-x-1/2 w-auto h-[420px] lg:hidden"
                        aria-hidden="true"
                    />
                    <Flickity
                        className="carousel w-full lg:hidden"
                        options={flickityOptions}
                        reloadOnUpdate
                    >
                        <div className="carousel-cell">
                            <img
                                src={about1}
                                alt="Model after treatment at NewLook Browlash"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                src={about2}
                                alt="Model after treatment at NewLook Browlash"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                src={about4}
                                alt="Model after treatment at NewLook Browlash"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                src={about3}
                                alt="Model after treatment at NewLook Browlash"
                            />
                        </div>
                    </Flickity>
                    <div className="hidden lg:flex h-90 gap-4">
                        {/* Column 1: One full-height image */}
                        <div className="h-full bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-1 shadow-md">
                            <img
                                src={about2}
                                alt="1"
                                className="h-full w-auto object-cover rounded-lg"
                            />
                        </div>
                        {/* Column 2: Two half-height stacked images */}
                        <div className="flex flex-col gap-4">
                            <div className="flex-1/2 bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-1 shadow-md">
                                <img
                                    src={about1}
                                    alt="2"
                                    className="h-41 object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1/2 bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-1 shadow-md">
                                <img
                                    src={about3}
                                    alt="4"
                                    className="h-41  object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 2: Contains 3 rows */}
                <div className="w-3/5 max-w-xs lg:max-w-2xl flex flex-col items-center lg:items-baseline gap-4">
                    <h2 className="hidden lg:flex text-5xl xl:6xl font-bold text-black items-center">
                        Tampil lebih percaya diri
                    </h2>
                    <h2 className="hidden lg:flex text-5xl xl:6xl font-bold text-black items-center gap-2">
                        dengan{" "}
                        <img
                            src={newlook}
                            alt="NewLook"
                            className="h-15 w-auto inline-block"
                        />
                    </h2>
                    {/* Row 2.1: h2 tag */}
                    <h2 className="text-4xl font-bold text-center text-black lg:hidden">
                        Tampil percaya diri dengan
                    </h2>
                    {/* Row 2.2: Image */}
                    <img
                        src={newlook}
                        alt="About"
                        className="w-60 rounded-lg lg:hidden"
                    />
                    {/* Row 2.3: p tag */}
                    <p className="text-base lg:text-lg text-gray-600 text-center lg:text-left">
                        NewLook Browlash adalah studio kecantikan profesional
                        yang menawarkan layanan sulam alis, sulam bibir, dan
                        treatment wajah. Kami percaya setiap wanita berhak
                        tampil percaya diri dengan tampilan yang natural dan
                        elegan — dan kami di sini untuk mewujudkannya setiap
                        hari.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
