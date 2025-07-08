import React from "react";
import decordesktopleft from "../assets/imgs/porto_decor_desktop_left.png";
import decordesktopright from "../assets/imgs/porto_decor_desktop_right.png";
import "../style/cta.css";

const CTA: React.FC = () => {
    const phoneNumber = "6281398522058";
    const message =
        "Halo! Saya ingin melakukan booking. Mohon info lebih lanjut ya. Terima kasih!";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

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
                <div className="flex w-fit mx-auto bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-full p-1">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-booking-btn text-black w-60"
                    >
                        Booking Sekarang
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CTA;
