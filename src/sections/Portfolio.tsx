import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import sulamalisporto1 from "../assets/imgs/sulam_alis_1.png";
import sulamalisporto2 from "../assets/imgs/sulam_alis_2.png";
import sulambibirporto1 from "../assets/imgs/sulam_bibir_porto_1.png";
import sulambibirporto2 from "../assets/imgs/sulam_bibir_porto_4.png";
import nailporto1 from "../assets/imgs/nail_porto_1.png";
import nailporto2 from "../assets/imgs/nail_porto_2.png";
import eyelashporto1 from "../assets/imgs/eyelash_porto_1.png";
import eyelashporto2 from "../assets/imgs/eyelash_porto_2.png";
import decorleft from "../assets/imgs/porto_decor_left.png";
import decorright from "../assets/imgs/porto_decor_right.png";
import instagram from "../assets/imgs/instagram_icon.png";
import tiktok from "../assets/imgs/tiktok_icon.png";
import decordesktopleft from "../assets/imgs/porto_decor_desktop_left.png";
import decordesktopright from "../assets/imgs/porto_decor_desktop_right.png";

const Portfolio = () => {
    const flickityOptions = {
        cellAlign: "center",
        autoPlay: true,
        pageDots: false,
        prevNextButtons: false,
        initialIndex: 1,
        contain: true,
    };

    return (
        <div className="bg-[#1D1D1D] relative">
            <img
                src={decordesktopleft}
                alt="Hero"
                className="hidden lg:block absolute z-0 -left-25  bottom-0 w-auto h-[379px]"
            />
            <img
                src={decordesktopright}
                alt="Hero"
                className="hidden lg:block  absolute z-0 bottom-0 -right-0 w-auto h-[379px]"
            />
            <section
                className="p-4  relative pt-16 pb-32 lg:px-27 lg:h-175"
                id="portfolio"
            >
                <img
                    src={decorleft}
                    alt="Hero"
                    className="absolute lg:hidden z-0 -left-4 bottom-0 w-auto h-[407x]"
                />
                <img
                    src={decorright}
                    alt="Hero"
                    className="absolute lg:hidden z-0 top-10 -right-0 w-auto h-[407x]"
                />

                {/* First Row: Heading */}
                <div className="text-center py-8">
                    <h1 className="text-3xl lg:text-5xl xl:6xl font-bold text-white">
                        Portfolio
                    </h1>
                </div>
                {/* Second Row: Flickity Carousel */}
                <div className="my-8 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-8">
                    <div className="">
                        <Flickity
                            options={flickityOptions}
                            className="lg:w-120 lg:h-60"
                        >
                            <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2 w-full px-2 lg:w-1/2 lg:p-1">
                                <img
                                    src={sulamalisporto1}
                                    alt="Portfolio Image 1"
                                    className="w-full h-auto lg:w-auto lg:h-1/2 object-cover rounded-lg"
                                />
                            </div>
                            <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2  w-full px-2 lg:w-1/2 lg:p-1">
                                <img
                                    src={sulamalisporto2}
                                    alt="Portfolio Image 2"
                                    className="w-full h-auto lg:w-auto lg:h-1/2 object-cover rounded-lg"
                                />
                            </div>
                            <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2  w-full px-2 lg:w-1/2 lg:p-1">
                                <img
                                    src={sulambibirporto1}
                                    alt="Portfolio Image 3"
                                    className="w-full h-auto lg:w-auto lg:h-1/2 object-cover rounded-lg"
                                />
                            </div>
                            <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2  w-full px-2 lg:w-1/2 lg:p-1">
                                <img
                                    src={sulambibirporto2}
                                    alt="Portfolio Image 4"
                                    className="w-full h-auto lg:w-auto lg:h-1/2 object-cover rounded-lg"
                                />
                            </div>
                            <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2  w-full px-2 lg:w-1/2 lg:p-1">
                                <img
                                    src={nailporto1}
                                    alt="Portfolio Image 5"
                                    className="w-full h-auto lg:w-auto lg:h-1/2 object-cover rounded-lg"
                                />
                            </div>
                            <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2  w-full px-2 lg:w-1/2 lg:p-1">
                                <img
                                    src={nailporto2}
                                    alt="Portfolio Image 5"
                                    className="w-full h-auto lg:w-auto lg:h-1/2 object-cover rounded-lg"
                                />
                            </div>
                            <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2  w-full px-2 lg:w-1/2 lg:p-1">
                                <img
                                    src={eyelashporto1}
                                    alt="Portfolio Image 5"
                                    className="w-full h-auto lg:w-auto lg:h-1/2 object-cover rounded-lg"
                                />
                            </div>
                            <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl p-2 mx-2  w-full px-2 lg:w-1/2 lg:p-1">
                                <img
                                    src={eyelashporto2}
                                    alt="Portfolio Image 5"
                                    className="w-full h-auto lg:w-auto lg:h-1/2 object-cover rounded-lg"
                                />
                            </div>
                        </Flickity>
                    </div>
                    <div className="flex flex-col gap-y-4 lg:gap-y-8 lg:flex lg:flex-col lg:justify-center mt-8">
                        {/* Third Row: Body Text */}
                        <div className="text-center my-6 px-4">
                            <h2 className="text-4xl lg:text-5xl text-white mb-2 text-left lg:block hidden">
                                Portfolio Kecantikan Newlook Browlash
                            </h2>
                            <p className="text-sm text-white lg:hidden">
                                Temukan lebih banyak hasil karya Newlook di
                                sosial media kami
                            </p>
                            <p className="hidden text-lg text-white lg:block text-left">
                                Setiap treatment adalah karya personal yang
                                dirancang untuk mempertegas kecantikan alami
                                klien kami.
                            </p>
                        </div>
                        {/* Fourth Row: Social Media Icons */}
                        <div className="flex justify-center space-x-4 lg:items-start lg:justify-start lg:px-4">
                            <a
                                href="https://www.instagram.com/newlook_browlash/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={instagram}
                                    alt="instagram"
                                    className="w-12"
                                />
                            </a>
                            <a
                                href="https://www.tiktok.com/@newlookbrowlash"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={tiktok}
                                    alt="tiktok"
                                    className="w-12"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
