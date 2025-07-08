import { useState } from 'react';
import logo from '../assets/imgs/Word_Logo.png';
import burger from '../assets/imgs/burger_menu.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="w-full sticky top-0 z-50 bg-white px-5 md:px-27">
            <div className="flex items-center justify-between py-6">
                <img src={logo} alt="Logo Newlook Browlash" className="h-8 w-auto" />

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-4 text-white font-medium">
                    {["Home", "Layanan", "Portfolio", "Lokasi", "Hubungi"].map((label, index) => (
                        <div className='transition duration-400 hover:bg-gradient-to-br from-[#9C6F22] via-[#F4D88D] to-[#9C6F22] rounded-full p-1' key={index}>
                            <button
                                key={index}
                                onClick={() => {
                                    const target = document.getElementById(label.toLowerCase());
                                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-5 pb-1 rounded-full bg-white text-black hover:bg-[#1D1D1D] hover:text-white transition duration-200 outline-none focus:outline-none"
                            >
                                {label}
                            </button>
                        </div>
                    ))}
                </nav>


                {/* Burger button (mobile only) */}
                <button onClick={toggleMenu} aria-label="Toggle menu" className="md:hidden">
                    <img src={burger} alt="burger menu" className="h-9 w-auto" />
                </button>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-[#ffffff] to-[#FAE4E9] text-black text-xl font-semibold md:hidden 
                   animate-slideIn space-y-8"
                >
                    <button
                        onClick={closeMenu}
                        className="absolute top-6 right-6 text-6xl text-black h-15 w-15 shadow-md rounded-full bg-white flex items-center justify-center hover:bg-[#1D1D1D] hover:text-white transition duration-200 focus:outline-none"
                        aria-label="Close menu"
                    >
                        X
                    </button>

                    {["Home", "Layanan", "Portfolio", "Lokasi", "Hubungi"].map((label, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const target = document.getElementById(label.toLowerCase());
                                if (target) {
                                    target.scrollIntoView({ behavior: "smooth" });
                                    closeMenu();
                                }
                            }}
                            className="hover:text-[#9C6F22] transition text-black font-light"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}

        </header>
    );
};

export default Navbar;
