import React, { useState } from "react";

const Location: React.FC = () => {
    const [activeMap, setActiveMap] = useState("newlook");

    const mapSrcs: Record<string, string> = {
        newlook:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19421.81246691605!2d106.8515338626372!3d-6.1708913880452885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f55b5ef8cacb%3A0xb90cce18bfe04244!2sNewlook%20Browlash!5e0!3m2!1sen!2sid!4v1751774408159!5m2!1sen!2sid",
        branch: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63467.840082751936!2d106.9281109!3d-6.1655622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b728fa2ddd3%3A0x91f2fd8c2e0f6014!2sNewlook%20Browlash!5e0!3m2!1sen!2sid!4v1751774498928!5m2!1sen!2sid",
    };

    const locationDetails: Record<string, { title: string; address: string }> =
    {
        newlook: {
            title: "Kemayoran",
            address:
                "Jl. Sumur Batu Raya No.20, RT.3/RW.1, Sumur Batu, Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640",
        },
        branch: {
            title: "Sedayu City",
            address:
                "Ruko sedayu city boulevard selatan blok C no 18, Daerah Khusus Ibukota Jakarta 13920",
        },
    };

    return (
        <section
            className="p-4 space-y-4 max-w-md bg-white pt-16 pb-32 lg:px-27"
            id="lokasi"
        >
            {/* Row 1: Heading */}
            <h2 className="text-3xl lg:text-5xl xl:6xl font-bold text-center text-black lg:mb-8">
                Lokasi Kami
            </h2>

            {/* Row 2: Buttons */}
            <div className="flex justify-center gap-4 lg:justify-start">
                <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] p-1  rounded-2xl">
                    <button
                        onClick={() => setActiveMap("newlook")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium ${activeMap === "newlook"
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        Kemayoran
                    </button>
                </div>
                <div className="bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] p-1  rounded-2xl">
                    <button
                        onClick={() => setActiveMap("branch")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium ${activeMap === "branch"
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        Sedayu City
                    </button>
                </div>
            </div>

            {/* Row 3: Google Map Embed */}
            <div className="lg:flex lg:flex-row lg:gap-4 space-y-4">
                <div className="lg:w-1/2 h-64 overflow-hidden rounded-xl shadow bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] p-1">
                    <iframe
                        title="Map Location"
                        src={mapSrcs[activeMap]}
                        className="w-full h-full border-0 rounded-xl"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Text Column */}
                <div className="lg:w-1/2 flex flex-col justify-center px-2 space-y-2">
                    <h2 className="text-2xl lg:text-5xl xl:6xl font-bold text-black lg:mb-2">
                        {locationDetails[activeMap].title}
                    </h2>
                    <p className="text-base text-gray-600 lg:mb-8">
                        {locationDetails[activeMap].address}
                    </p>
                    <div className="text-base text-black font-bold leading-relaxed">
                        <p>Senin - Jumat pukul 10:00 - 21:00</p>
                        <p>Sabtu pukul 10:00 - 20:00</p>
                        <p>Minggu pukul 10:00 - 19:00</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
