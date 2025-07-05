import React from "react";
import sulamalis from "../assets/imgs/sulam_alis.png";
import decor1 from "../assets/imgs/service_decor_left.png";
import decor2 from "../assets/imgs/service_decor_right.png";
import sulambibir from "../assets/imgs/sulam_bibir.png";
import nails from "../assets/imgs/nails.png";
import eyelashext from "../assets/imgs/eyelash_extension.jpg";
import lashlift from "../assets/imgs/lash_lift.png";
import spa from "../assets/imgs/spa.jpg";
import academy from "../assets/imgs/academy.png";

const Service = () => {
    const services = [
        {
            title: "Sulam Alis",
            description: "Membentuk alis indah yang natural dan tahan lama.",
            image: sulamalis,
        },
        {
            title: "Sulam Bibir",
            description: "Memberikan warna bibir cantik yang segar dan alami.",
            image: sulambibir,
        },
        {
            title: "Nails",
            description: "Percantik kuku dengan desain unik dan elegan.",
            image: nails,
        },
        {
            title: "Eyelash Extension",
            description: "Bulu mata lentik untuk tampilan memukau setiap hari.",
            image: eyelashext,
        },
        {
            title: "Lash Lift",
            description: "Angkat bulu mata untuk efek natural dan menawan.",
            image: lashlift,
        },
        {
            title: "Spa",
            description:
                "Relaksasi tubuh dan pikiran dengan perawatan spa terbaik.",
            image: spa,
        },
        {
            title: "Academy",
            description:
                "Pelatihan profesional untuk kecantikan dan perawatan.",
            image: academy,
        },
    ];

    return (
        <section className="p-4 relative pt-8 overflow-hidden">
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
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-[4px] bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl my-4 shadow-md"
                        >
                            <div className="bg-white rounded-xl max-w-[300px] text-left">
                                {/* Image */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover"
                                />
                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-black">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        {service.description}
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
