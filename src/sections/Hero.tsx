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
            <section className="py-8 text-center justify-center mx-5 overflow-x-hidden">
                <img
                    src={decorleft}
                    alt="Hero"
                    className="absolute z-0 left-23 top-40 -translate-x-1/2 w-auto h-[320px]"
                />
                <img
                    src={decorright}
                    alt="Hero"
                    className="absolute z-0 top-20 -right-23 -translate-x-1/2 w-auto h-[320px]"
                />
                <img
                    src={decor2left}
                    alt="Hero"
                    className="absolute z-0 left-10 top-137 -translate-x-1/2 w-auto h-[120px]"
                />
                <img
                    src={decor2right}
                    alt="Hero"
                    className="absolute z-0 top-137 -right-18 -translate-x-1/2 w-auto h-[120px]"
                />
                {/* Row 1: Image */}
                <div className="relative z-10">
                    <img
                        src={heroImg}
                        alt="Hero"
                        className="w-full px-8 rounded-xl "
                    />
                </div>
                {/* Row 2: Heading */}
                <h1 className="text-3xl font-bold mt-6 mb-2 font-weight-light text-black">
                    Cantik Alami, Tampilan Lebih Anggun
                </h1>
                {/* Row 3: Subheading */}
                <p className="text-base text-gray-600 mb-5">
                    Perawatan alis, bulu mata, dan kuku yang
                    <br />
                    dirancang untuk menonjolkan versi terbaik dari
                    <br />
                    dirimu
                </p>

                {/* Row 4: Call to Action Button */}
                <div className="inline-block rounded-full bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] p-[4px]">
                    <button className="px-8 py-3 bg-black text-white rounded-full font-semibold w-full h-full">
                        Booking Sekarang
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Hero;
