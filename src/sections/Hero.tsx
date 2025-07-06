import React from "react";
import heroImg from "../assets/imgs/hero_image.png";
import decorleft from "../assets/imgs/hero_decor_left.png";
import decorright from "../assets/imgs/hero_decor_right.png";
import decor2left from "../assets/imgs/hero_decor2_left.png";
import decor2right from "../assets/imgs/hero_decor2_right.png";
import "../style/about.css";

const Hero: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-[#ffffff] to-[#FAE4E9] pb-20 overflow-hidden relative">
            <section className="relative p-4 overflow-hidden">
                {/* Decorative Images */}
                <img
                    src={decorleft}
                    alt="Hero"
                    className="absolute z-0 left-23 top-40 -translate-x-1/2 w-auto h-[320px] md:h-[400px]"
                />
                <img
                    src={decorright}
                    alt="Hero"
                    className="absolute z-0 top-20 -right-26 -translate-x-1/2 w-auto h-[320px] md:h-[400px]"
                />
                <img
                    src={decor2left}
                    alt="Hero"
                    className="absolute z-0 left-10 top-137 -translate-x-1/2 w-auto h-[120px] md:h-[160px]"
                />
                <img
                    src={decor2right}
                    alt="Hero"
                    className="absolute z-0 top-137 -right-18 -translate-x-1/2 w-auto h-[120px] md:h-[160px]"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center  md:justify-between items-center md:flex-row-reverse md:items-start md:space-x-8">
                    {/* Row 1: Image */}
                    <div className="w-full md:w-1/4">
                        <img
                            src={heroImg}
                            alt="Hero"
                            className="w-full px-8 rounded-xl md:px-0 md:rounded-2xl"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left md:w-2xl mt-6 md:mt-0  ">
                        {/* Row 2: Heading */}
                        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-black md:text-transparent md:bg-clip-text md:bg-gradient-to-br md:from-[#9C6F22] md:via-[#F4D88D] md:to-[#9C6F22]">
                            Cantik Alami, Tampilan
                            <br />
                            Lebih Anggun
                        </h1>
                        {/* Row 3: Subheading */}
                        <p className="text-base md:text-lg text-gray-600 mb-5">
                            Kami menghadirkan solusi kecantikan yang membuat
                            Anda tampil lebih percaya diri setiap hari.
                        </p>
                        {/* Row 4: Call-to-Action Button */}

                        <button className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] hover:text-black transition">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
