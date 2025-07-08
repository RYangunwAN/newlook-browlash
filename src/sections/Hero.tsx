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
        <div className="bg-gradient-to-b from-[#ffffff] to-[#FAE4E9] pb-20 overflow-hidden relative pt-8">
            <section
                className="relative p-4 overflow-hidden lg:overflow-visible lg:h-130"
                id="home"
            >
                {/* Decorative Images */}
                <img
                    src={decorleft}
                    alt="Hero"
                    className="absolute z-0 left-23 top-40 -translate-x-1/2 w-auto h-[320px] lg:hidden"
                />
                <img
                    src={decorright}
                    alt="Hero"
                    className="absolute z-0 top-20 -right-26 -translate-x-1/2 w-auto h-[320px] lg:hidden"
                />
                <img
                    src={decor2left}
                    alt="Hero"
                    className="absolute z-0 left-10 top-137 -translate-x-1/2 w-auto h-[120px] lg:hidden"
                />
                <img
                    src={decor2right}
                    alt="Hero"
                    className="absolute z-0 top-137 -right-18 -translate-x-1/2 w-auto h-[120px] lg:hidden"
                />
                <img
                    src={decordesktopleft}
                    alt="Hero"
                    className="hidden lg:block absolute z-0 -left-50 -top-15 h-[400px] w-auto"
                />
                <img
                    src={decordesktopright}
                    alt="Hero"
                    className="hidden lg:block absolute z-0 -right-50 top-25 w-auto"
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center lg:justify-between items-center lg:flex-row-reverse lg:mx-25">
                    {/* Row 1: Image */}
                    <div className="">
                        <img
                            src={heroImg}
                            alt="Hero"
                            className="w-full px-8 rounded-xl lg:px-0 lg:hidden"
                        />
                        <img
                            src={heroImgDesktop}
                            alt="Hero Desktop"
                            className="hidden lg:block rounded-xl h-[400px] w-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left mt-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
                        {/* Row 2: Heading */}
                        <h1 className="text-2xl lg:text-5xl xl:5xl xl:6xl font-bold mb-4 text-black lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-br lg:from-[#9C6F22] lg:via-[#F4D88D] lg:to-[#9C6F22]">
                            Cantik Alami, Tampilan
                            <br />
                            Lebih Anggun
                        </h1>
                        {/* Row 3: Subheading */}
                        <p className="hidden lg:block text-base lg:text-lg text-gray-600 mb-5">
                            Kami menghadirkan solusi kecantikan yang membuat
                            <br />
                            Anda tampil lebih percaya diri setiap hari.
                        </p>
                        <p className="lg:hidden text-base lg:text-lg text-gray-600 mb-5">
                            Kami menghadirkan solusi kecantikan yang membuat anda tampil lebih percaya diri setiap hari.
                        </p>
                        {/* Row 4: Call-to-Action Button */}

                        <button className="bg-black text-white px-6 py-3 rounded-full text-sm lg:text-base hover:bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] hover:text-black transition lg:w-60">
                            Booking Sekarang
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
