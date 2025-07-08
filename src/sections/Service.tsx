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
    const phoneNumber = "6281398522058";
    const services = [
        {
            title: "Sulam Alis",
            description: "Membentuk alis indah yang natural dan tahan lama.",
            image: sulamalis,
            message:
                "Halo! Saya tertarik dengan layanan *Sulam Alis*. Boleh info lebih lanjut?",
        },
        {
            title: "Sulam Bibir",
            description: "Memberikan warna bibir cantik yang segar dan alami.",
            image: sulambibir,
            message:
                "Halo! Saya ingin booking untuk layanan *Sulam Bibir*. Mohon informasinya, ya!",
        },
        {
            title: "Nails",
            description: "Percantik kuku dengan desain unik dan elegan.",
            image: nails,
            message:
                "Halo! Saya tertarik dengan layanan *Nail Art*. Bisa info jadwal & harganya?",
        },
        {
            title: "Eyelash Extension",
            description: "Bulu mata lentik untuk tampilan memukau setiap hari.",
            image: eyelashext,
            message:
                "Halo! Saya mau tanya tentang layanan *Eyelash Extension*. Kapan jadwal available?",
        },
        {
            title: "Lash Lift",
            description: "Angkat bulu mata untuk efek natural dan menawan.",
            image: lashlift,
            message:
                "Halo! Saya ingin booking layanan *Lash Lift*. Mohon info selengkapnya ya!",
        },
        {
            title: "Spa",
            description:
                "Relaksasi tubuh dan pikiran dengan perawatan spa terbaik.",
            image: spa,
            message:
                "Halo! Saya ingin reservasi layanan *Spa*. Bisa dikirim detailnya?",
        },
        {
            title: "Academy",
            description:
                "Pelatihan profesional untuk kecantikan dan perawatan.",
            image: academy,
            message:
                "Halo! Saya tertarik ikut kelas di *Academy*. Bisa info lebih lanjut?",
        },
    ];

    return (
        <section
            className="p-4 relative overflow-hidden lg:px-27 lg:py-48 py-16"
            id="layanan"
        >
            <img
                src={decor1}
                alt="Hero"
                className="absolute z-0 -top-1 -left-10 w-auto h-[132px] lg:top-36 lg:left-80"
            />
            <img
                src={decor2}
                alt="Hero"
                className="absolute z-0 -top-1 -right-10 w-auto h-[132px] lg:top-36 lg:right-80"
            />
            {/* Heading Row */}
            <div className="text-center pb-8">
                <h1 className="text-black text-3xl lg:text-5xl xl:6xl font-bold">
                    Layanan Kami
                </h1>
            </div>

            {/* Grid Row */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                            service.message
                        )}`;

                        return (
                            <div key={index}>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="p-2 lg:p-1 bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-xl my-4 shadow-xl group-hover:scale-[1.02] transition-all duration-300">
                                        <div className="bg-white rounded-xl max-w-[300px] text-left overflow-hidden">
                                            {/* Image Container */}
                                            <div className="relative overflow-hidden">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-48 object-cover rounded-lg transition-all duration-300 group-hover:brightness-25"
                                                />
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="px-3 py-1 rounded-full">
                                                        Booking Layanan
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-black">
                                                    {service.title}
                                                </h3>
                                                <p className="text-sm text-gray-700">
                                                    {service.description}
                                                </p>

                                                {/* Mobile-only Book Button */}
                                                <a
                                                    href={waLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="lg:hidden mt-6 bg-black text-white text-sm font-medium px-2 py-2 rounded-lg border border-transparent hover:border-[#9C6F22] hover:bg-[#1a1a1a] transition block text-center"
                                                >
                                                    Book
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Service;
