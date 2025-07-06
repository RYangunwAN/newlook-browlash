import React from "react";

const CTA: React.FC = () => {
    return (
        <section className="bg-[#1D1D1D] text-white text-center px-6 py-12 space-y-6 max-w-md mx-auto">
            {/* Heading */}
            <h2 className="text-3xl leading-snug">
                Siap tampil lebih <br /> percaya diri?
            </h2>

            {/* Subheading */}
            <p className="text-sm text-gray-300">
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
    );
};

export default CTA;
