const FloatingCTA = () => {
    const phoneNumber = "6281398522058";
    const message = encodeURIComponent("Halo, saya ingin booking layanan di NewLook");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110  md:hidden"
        >
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-auto h-10" />
        </a>
    );
};

export default FloatingCTA;
