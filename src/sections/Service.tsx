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
            description:
                "Layanan sulam alis natural di Kelapa Gading dan Sedayu City, Jakarta. Dapatkan bentuk alis sempurna yang tahan lama dan terlihat alami.",
            image: sulamalis,
            message:
                "Halo, aku mau reservasi untuk treatment Sulam Alis, available kapan ya?",
        },
        {
            title: "Sulam Bibir",
            description:
                "Sulam bibir profesional di Jakarta, tersedia di cabang Kelapa Gading dan Sedayu City. Hasil warna bibir cantik, segar, dan natural setiap hari.",
            image: sulambibir,
            message:
                "Halo, aku mau reservasi untuk treatment Sulam Bibiir, available kapan ya?",
        },
        {
            title: "Nails",
            description:
                "Jasa nailart di Kelapa Gading dan Sedayu City dengan desain kuku unik, elegan, dan kekinian untuk semua gaya.",
            image: nails,
            message:
                "Halo, aku mau reservasi untuk treatment Nails, available kapan ya?",
        },
        {
            title: "Eyelash Extension",
            description:
                "Eyelash extension di Kelapa Gading dan Sedayu City Jakarta dengan hasil lentik natural dan tahan lama. Bikin mata makin menawan tiap hari.",
            image: eyelashext,
            message:
                "Halo, aku mau reservasi untuk treatment Eyelash Extension, available kapan ya?",
        },
        {
            title: "Lash Lift",
            description:
                "Lash lift natural untuk efek bulu mata terangkat indah tanpa ekstensi. Tersedia di Kelapa Gading dan Sedayu City, Jakarta.",
            image: lashlift,
            message:
                "Halo, aku mau reservasi untuk treatment Lash Lift, available kapan ya?",
        },
        {
            title: "Spa",
            description:
                "Relaksasi maksimal dengan layanan spa terbaik di Jakarta. Tersedia di lokasi Kelapa Gading dan Sedayu City.",
            image: spa,
            message:
                "Halo, aku mau reservasi untuk treatment Spa, available kapan ya?",
        },
        {
            title: "Academy",
            description:
                "Kursus sulam alis, eyelash, dan nailart di Jakarta. Pelatihan profesional tersedia di cabang Kelapa Gading dan Sedayu City.",
            image: academy,
            message: "Halo, bisa minta pricelist untuk kursus?",
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
                                        <div className="bg-white rounded-xl max-w-[300px] text-left overflow-hidden h-85">
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
