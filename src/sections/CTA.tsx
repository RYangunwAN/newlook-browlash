import React from "react";
import decordesktopleft from "../assets/imgs/porto_decor_desktop_left.png";
import decordesktopright from "../assets/imgs/porto_decor_desktop_right.png";

const CTA: React.FC = () => {
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
                className=" text-white text-center px-6 py-12 space-y-6 max-w-md mx-auto lg:py-32"
                id="hubungi"
            >
                {/* Heading */}
                <h2 className="text-3xl lg:text-5xl xl:6xl leading-snug">
                    Siap tampil lebih <br className="lg:hidden" /> percaya diri?
                </h2>
                {/* Subheading */}
                <p className="text-sm lg:text-xl text-white">
                    Booking sekarang dan rasakan perawatan <br />
                    terbaik dari NewLook Browlash.
                </p>
                {/* WhatsApp Button */}
                <div className="inline-block p-[4px] rounded-full bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22]">
                    <button
                        onClick={() =>
                            window.open("https://wa.me/6281234567890", "_blank")
                        }
                        className="block w-full px-6 py-3 rounded-full font-medium text-black bg-white hover:bg-white transition focus:outline-none"
                    >
                        Book via Whatsapp
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CTA;
