import React from "react";
import logo from "../assets/imgs/NewLook_Gold_Logo.png"; // Replace with your logo path
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black pt-10     text-sm max-w-md mx-auto">
            {/* Logo */}
            <div className="px-6">
                <div className="flex justify-center">
                    <img src={logo} alt="Newlook Logo" className="h-30" />
                </div>
                {/* Visit Us Section */}
                <div>
                    <h3 className="text-xl font-medium mb-4">Kunjungi Kami</h3>
                    {/* Kemayoran */}
                    <div className="mb-4">
                        <p className="font-semibold">Jakarta - Kemayoran</p>
                        <p>Senin - Jumat pukul 10:00 - 21:00</p>
                        <p>Sabtu pukul 10:00 - 20:00</p>
                        <p>Minggu pukul 10:00 - 19:00</p>
                    </div>
                    {/* Sedayu City */}
                    <div>
                        <p className="font-semibold">Jakarta - Sedayu City</p>
                        <p>Senin - Jumat pukul 10:00 - 21:00</p>
                        <p>Sabtu pukul 10:00 - 20:00</p>
                        <p>Minggu pukul 10:00 - 19:00</p>
                    </div>
                </div>
                {/* Follow Us Section */}
                <div>
                    <h3 className="text-xl font-medium mb-3">Ikuti Kami</h3>
                    <div className="flex justify-start gap-4">
                        <a href="#" className="bg-black p-2 rounded-lg">
                            <FaInstagram className="text-white w-5 h-5" />
                        </a>
                        <a href="#" className="bg-black p-2 rounded-lg">
                            <FaWhatsapp className="text-white w-5 h-5" />
                        </a>
                        <a href="#" className="bg-black p-2 rounded-lg">
                            <FaTiktok className="text-white w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-white bg-[#1D1D1D] px-6 py-4 mt-6">
                © 2025 NewLook Browlash. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
