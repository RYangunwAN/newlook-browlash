import React from "react";
import sulamalis from "../assets/imgs/sulam_alis.png";
import decor1 from "../assets/imgs/service_decor_left.png";
import decor2 from "../assets/imgs/service_decor_right.png";

const Service = () => {
    return (
        <section className="p-4 relative pt-8">
            <img
                src={decor1}
                alt="Hero"
                className="absolute z-0 -top-0.5 -left-5 w-auto h-[132px]"
            />
            <img
                src={decor2}
                alt="Hero"
                className="absolute z-0 -top-0.5 -right-5 w-auto h-[132px]"
            />
            {/* Heading Row */}
            <div className="text-center py-8">
                <h1 className="text-black text-3xl font-bold">Layanan Kami</h1>
            </div>

            {/* Grid Row */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array.from({ length: 7 }, (_, index) => (
                        <div className="p-[4px] bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl my-4">
                            <div className="bg-white rounded-xl shadow-md max-w-[300px] text-left">
                                {/* Image */}
                                <img
                                    src={sulamalis}
                                    alt="Sulam Alis"
                                    className="w-full h-48 object-cover"
                                />
                                {/* Content */}
                                <div className="p-4 ">
                                    <h3 className="text-lg font-semibold text-black">
                                        Sulam Alis
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        Dan kami di sini untuk mendukung itu
                                        setiap hari.
                                    </p>
                                    {/* Book Button */}
                                    <button className="mt-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-lg border border-transparent hover:border-[#9C6F22] hover:bg-[#1a1a1a] transition">
                                        Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
