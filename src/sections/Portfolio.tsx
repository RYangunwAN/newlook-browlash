import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import sulamalisporto1 from "../assets/imgs/sulam_alis_1.png";
import sulamalisporto2 from "../assets/imgs/sulam_alis_2.png";
import sulambibirporto1 from "../assets/imgs/sulam_bibir_porto_1.png";
import sulambibirporto2 from "../assets/imgs/sulam_bibir_porto_4.jpg";
import nailporto1 from "../assets/imgs/nail_porto_1.jpg";
import nailporto2 from "../assets/imgs/nail_porto_2.jpg";
import eyelashporto1 from "../assets/imgs/eyelash_porto_1.jpg";
import eyelashporto2 from "../assets/imgs/eyelash_porto_2.png";
import decorleft from "../assets/imgs/porto_decor_left.png";
import decorright from "../assets/imgs/porto_decor_right.png";
import instagram from "../assets/imgs/instagram_icon.png";
import tiktok from "../assets/imgs/tiktok_icon.png";

const Portfolio = () => {
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
        <section className="p-4 bg-[#1D1D1D] relative pt-16 pb-32">
            <img
                src={decorleft}
                alt="Hero"
                className="absolute z-0 -left-4 bottom-0 w-auto h-[407x]"
            />
            <img
                src={decorright}
                alt="Hero"
                className="absolute z-0 top-10 -right-0 w-auto h-[407x]"
            />

            {/* First Row: Heading */}
            <div className="text-center py-8">
                <h1 className="text-3xl font-bold text-white">Portfolio</h1>
            </div>

            {/* Second Row: Flickity Carousel */}
            <div className="my-8">
                <Flickity options={flickityOptions} className="carousel px-4">
                    <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2">
                        <img
                            src={sulamalisporto1}
                            alt="Portfolio Image 1"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2">
                        <img
                            src={sulamalisporto2}
                            alt="Portfolio Image 2"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2">
                        <img
                            src={sulambibirporto1}
                            alt="Portfolio Image 3"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2">
                        <img
                            src={sulambibirporto2}
                            alt="Portfolio Image 4"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2">
                        <img
                            src={nailporto1}
                            alt="Portfolio Image 5"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2">
                        <img
                            src={nailporto2}
                            alt="Portfolio Image 5"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2">
                        <img
                            src={eyelashporto1}
                            alt="Portfolio Image 5"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2">
                        <img
                            src={eyelashporto2}
                            alt="Portfolio Image 5"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </Flickity>
            </div>

            {/* Third Row: Body Text */}
            <div className="text-center my-6 px-4">
                <p className="text-sm text-white">
                    Temukan lebih banyak hasil karya Newlook di sosial media
                    kami
                </p>
            </div>

            {/* Fourth Row: Social Media Icons */}
            <div className="flex justify-center space-x-4">
                <a
                    href="https://www.instagram.com/newlook_browlash/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={instagram} alt="instagram" className="w-12" />
                </a>

                <a
                    href="https://www.tiktok.com/@newlookbrowlash"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={tiktok} alt="tiktok" className="w-12" />
                </a>
            </div>
        </section>
    );
};

export default Portfolio;
