import React from "react";
import heroImg from '../assets/imgs/hero_image.png';


const Hero: React.FC = () => {
    return (
        <section className="py-8 text-center justify-center mx-5">
            {/* Row 1: Image */}
            <div>
                <img
                    src={heroImg}
                    alt="Hero"
                    className="w-full px-8 rounded-xl"
                />
            </div>
            {/* Row 2: Heading */}
            <h1 className="text-3xl font-bold mt-6 mb-2 font-weight-light">
                Cantik Alami, Tampilan Lebih Anggun
            </h1>
            {/* Row 3: Subheading */}
            <p className="text-base text-gray-600 mb-5">
                Perawatan alis, bulu mata, dan kuku yang<br />
                dirancang untuk menonjolkan versi terbaik dari<br />
                dirimu
            </p>

            {/* Row 4: Call to Action Button */}
            <div className="inline-block rounded-full bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] p-[4px]">
                <button className="px-8 py-3 bg-black text-white rounded-full font-semibold w-full h-full">
                    Booking Sekarang
                </button>
            </div>


        </section>
    );
};

export default Hero;