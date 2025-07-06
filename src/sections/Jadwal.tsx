import React from "react";

const Jadwal: React.FC = () => {
    return (
        <section className="px-4 py-8 max-w-md mx-auto">
            {/* Row 1: Heading */}
            <h2 className="text-2xl font-bold text-black mb-4 text-center">
                Galeri Kami
            </h2>

            {/* Row 2: Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2">
                {/* Placeholder Cards */}
                {Array.from({ length: 6 }, (_, index) => (
                    <div
                        key={index}
                        className="h-32 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-500 text-sm"
                    >
                        Placeholder {index + 1}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Jadwal;
