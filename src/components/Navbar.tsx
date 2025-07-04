import { useState } from 'react';
import logo from '../assets/imgs/Word_Logo.png';
import burger from '../assets/imgs/burger_menu.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);


    return (
        <header className="w-full sticky top-0 z-50 bg-white px-5">
            <div className="flex items-center justify-between py-6">
                <img src={logo} alt="Logo Newlook Browlash" className="h-9 w-auto" />

                <button onClick={toggleMenu} aria-label="Toggle menu" className="md:hidden">
                    <img src={burger} alt="burger menu" className="h-9 w-auto" />
                </button>

            </div>

            {isOpen && (
                <nav className="flex flex-col gap-4 pb-4 md:hidden text-gray-700 font-medium">
                    <a href="#about" onClick={closeMenu}>Tentang</a>
                    <a href="#services" onClick={closeMenu}>Layanan</a>
                    <a href="#gallery" onClick={closeMenu}>Galeri</a>
                    <a href="#contact" onClick={closeMenu}>Hubungi</a>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
