import React from "react";
import heroImg from "../assets/imgs/hero_image.png";
import heroImgDesktop from "../assets/imgs/hero_image_desktop.png";
import decordesktopleft from "../assets/imgs/hero_decor_desktop_left.png";
import decordesktopright from "../assets/imgs/hero_decor_desktop_right.png";
import decorleft from "../assets/imgs/hero_decor_left.png";
import decorright from "../assets/imgs/hero_decor_right.png";
import decor2left from "../assets/imgs/hero_decor2_left.png";
import decor2right from "../assets/imgs/hero_decor2_right.png";
import "../style/about.css";

const Hero: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-[#ffffff] to-[#FAE4E9] pb-20 overflow-hidden relative ">
            <section
                className="relative p-4 overflow-hidden md:overflow-visible md:h-130"
                id="home"
            >
                {/* Decorative Images */}
                <img
                    src={decorleft}
                    alt="Hero"
                    className="absolute z-0 left-23 top-40 -translate-x-1/2 w-auto h-[320px] md:hidden"
                />
                <img
                    src={decorright}
                    alt="Hero"
                    className="absolute z-0 top-20 -right-26 -translate-x-1/2 w-auto h-[320px] md:hidden"
                />
                <img
                    src={decor2left}
                    alt="Hero"
                    className="absolute z-0 left-10 top-137 -translate-x-1/2 w-auto h-[120px] md:hidden"
                />
                <img
                    src={decor2right}
                    alt="Hero"
                    className="absolute z-0 top-137 -right-18 -translate-x-1/2 w-auto h-[120px] md:hidden"
                />
                <img
                    src={decordesktopleft}
                    alt="Hero"
                    className="hidden md:block absolute z-0 -left-50 -top-15 h-[400px] w-auto"
                />
                <img
                    src={decordesktopright}
                    alt="Hero"
                    className="hidden md:block absolute z-0 -right-50 top-25 w-auto"
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center md:justify-between items-center md:flex-row-reverse md:mx-25">
                    {/* Row 1: Image */}
                    <div className="">
                        <img
                            src={heroImg}
                            alt="Hero"
                            className="w-full px-8 rounded-xl md:px-0 md:hidden"
                        />
                        <img
                            src={heroImgDesktop}
                            alt="Hero Desktop"
                            className="hidden md:block rounded-xl h-[400px] w-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left mt-6 md:mt-0 md:flex md:flex-col md:justify-center">
                        {/* Row 2: Heading */}
                        <h1 className="text-2xl md:text-6xl font-bold mb-4 text-black md:text-transparent md:bg-clip-text md:bg-gradient-to-br md:from-[#9C6F22] md:via-[#F4D88D] md:to-[#9C6F22]">
                            Cantik Alami, Tampilan
                            <br />
                            Lebih Anggun
                        </h1>
                        {/* Row 3: Subheading */}
                        <p className="text-base md:text-lg text-gray-600 mb-5">
                            Kami menghadirkan solusi kecantikan yang membuat
                            <br />
                            Anda tampil lebih percaya diri setiap hari.
                        </p>
                        {/* Row 4: Call-to-Action Button */}

                        <button className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] hover:text-black transition md:w-60">
                            Booking Sekarang
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
