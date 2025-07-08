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
import "../style/hero.css";

const Hero: React.FC = () => {
    const phoneNumber = "6281398522058";
    const message =
        "Halo! Saya ingin melakukan booking. Mohon info lebih lanjut ya. Terima kasih!";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <div className="bg-gradient-to-b from-[#ffffff] to-[#FAE4E9] pb-20 overflow-hidden relative pt-8">
            <header
                className="relative p-4 overflow-hidden lg:overflow-visible lg:h-130"
                id="home"
            >
                {/* Decorative Images */}
                <img
                    src={decorleft}
                    alt=""
                    aria-hidden="true"
                    className="absolute z-0 left-23 top-40 -translate-x-1/2 w-auto h-[320px] lg:hidden"
                />
                <img
                    src={decorright}
                    alt=""
                    aria-hidden="true"
                    className="absolute z-0 top-20 -right-26 -translate-x-1/2 w-auto h-[320px] lg:hidden"
                />
                <img
                    src={decor2left}
                    alt=""
                    aria-hidden="true"
                    className="absolute z-0 left-10 top-137 -translate-x-1/2 w-auto h-[120px] lg:hidden"
                />
                <img
                    src={decor2right}
                    alt=""
                    aria-hidden="true"
                    className="absolute z-0 top-137 -right-18 -translate-x-1/2 w-auto h-[120px] lg:hidden"
                />
                <img
                    src={decordesktopleft}
                    alt=""
                    aria-hidden="true"
                    className="hidden lg:block absolute z-0 -left-50 -top-15 h-[400px] w-auto"
                />
                <img
                    src={decordesktopright}
                    alt=""
                    aria-hidden="true"
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
                        <h2 className="hidden lg:block text-base lg:text-lg text-gray-600 mb-5">
                            Kami menghadirkan solusi kecantikan yang membuat
                            <br />
                            Anda tampil lebih percaya diri setiap hari.
                        </h2>
                        <h2 className="lg:hidden text-base lg:text-lg text-gray-600 mb-5">
                            Kami menghadirkan solusi kecantikan yang membuat
                            anda tampil lebih percaya diri setiap hari.
                        </h2>

                        <div className="flex w-fit mx-auto lg:mx-0 bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-full p-1">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="booking-btn"
                            >
                                Booking Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Hero;
