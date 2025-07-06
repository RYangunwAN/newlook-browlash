import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const Testimonial = () => {
    const flickityOptions = {
        cellAlign: "center",
        autoPlay: true,
        contain: false,
        pageDots: false,
        prevNextButtons: false,
        initialIndex: 1,
    };

    const reviews = [
        {
            id: 1,
            name: "Nurisa Aqila",
            date: "March 02, 2025",
            initial: "N",
            rating: 5,
            review: "Recomendedd bgtt sama sulam alisnyaa. Bener2 natural hasilnyaa 😍 🥰 …",
            avatarBg: "bg-blue-500",
        },
        {
            id: 2,
            name: "Lia Natalia",
            date: "6 months ago",
            initial: "L",
            rating: 5,
            review: "Udah langgganan eyelash disini dan selalu bagus, ga pernah gagal. Bulunya halus tahan lama, yang terpenting bisa langsung cuci muka. Sekarang cobain extension kukunya... bagus banget pelayanannya ramah dan cepat.. tempat cozy dan nyaman.",
            avatarBg: "bg-pink-400",
        },
        {
            id: 3,
            name: "Kartika Chandra",
            date: "6 months ago",
            initial: "K",
            rating: 5,
            review: "Bagus bgt selalu repeat treatment eyelash & nail art di newlook, rapih, harga terjangkau dan pelayananya ramah ❤️❤️❤️",
            avatarBg: "bg-yellow-500",
        },
        {
            id: 4,
            name: "Liana Darmawan",
            date: "5 months ago",
            initial: "L",
            rating: 5,
            review: "Selalu puas kalo treatment di sini. Eyelash nya oke banget. Rapi, ga sakit dan awet. Mani Pedi nya juga cakep cakep. Semua bisa di-adjust sesuai request customer. Pokoknya the best. Udah dari 2thn ini ga pernah pindah ke tempat lain... Ter the best deh....",
            avatarBg: "bg-purple-500",
        },
        {
            id: 5,
            name: "Welda Eleanor",
            date: "a month ago",
            initial: "W",
            rating: 5,
            review: "Pertama kali mencoba sulam alis di Newlook sama ci ferra, hasilnya mantap banget, langsung keliatan seger, makasi banyak newlook hehehe",
            avatarBg: "bg-green-400",
        },
        {
            id: 6,
            name: "Putri Maulia",
            date: "a year ago",
            initial: "P",
            rating: 5,
            review: "Very good service!! First time nail art immediately suited me and I will become a regular customer too. Plus it's really close to where I live. I really like it. I want to be beautiful, I don't need to go far, just get there 🥰⭐️⭐️⭐️⭐️⭐️",
            avatarBg: "bg-red-400",
        },
    ];

    return (
        <section className=" bg-gradient-to-b from-[#FAE4E9] via-[#FAE4E9] to-[#ffffff] pt-16 pb-16">
            {/* First Row: Heading */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-black">Testimonial</h1>
            </div>

            {/* Second Row: Flickity Carousel */}
            <div className="mb-6">
                <Flickity
                    options={flickityOptions}
                    className="flex h-90 items-center"
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className=" py-5 px-4 rounded-xl shadow-lg border border-gray-200 bg-white mx-4 h-80 w-70"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-2">
                                <div
                                    className={`w-10 h-10 rounded-full ${review.avatarBg} text-white flex items-center justify-center font-bold`}
                                >
                                    {review.initial}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-gray-800">
                                        {review.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {review.date}
                                    </p>
                                    <div className="flex mt-1 text-yellow-400">
                                        {Array.from({
                                            length: review.rating,
                                        }).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="text-sm text-gray-700 mt-3">
                                {review.review}
                            </p>

                            {/* View on Google */}
                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 hover:underline cursor-pointer">
                                <span>Review from Google</span>
                            </div>
                        </div>
                    ))}
                </Flickity>
            </div>
        </section>
    );
};

export default Testimonial;
