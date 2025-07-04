import React from "react";
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import about1 from '../assets/imgs/about_1.png';
import about2 from '../assets/imgs/about_2.png';
import about3 from '../assets/imgs/about_3.png';
import '../style/about.css'

const About: React.FC = () => {
    const flickityOptions = {
        wrapAround: true,
        cellAlign: 'center',
        autoPlay: true,
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        initialIndex: 1,
        freeScroll: true,
    };



    return (
        <section className="py-8 px-4 flex flex-col items-center">
            {/* Row 1: Spacer or could be a background/empty row */}
            <div className="mb-6 w-full" >
                <Flickity className="carousel w-full" options={flickityOptions} reloadOnUpdate>
                    <div className="carousel-cell">
                        <img src={about1} alt="1" />
                    </div>
                    <div className="carousel-cell">
                        <img src={about2} alt="2" />
                    </div>
                    <div className="carousel-cell">
                        <img src={about3} alt="3" />
                    </div>
                </Flickity>
            </div>
            {/* Row 2: Contains 3 rows */}
            <div className="w-full max-w-xs flex flex-col items-center gap-4">
                {/* Row 2.1: h2 tag */}
                <h2 className="text-xl font-bold">About Us</h2>
                {/* Row 2.2: Image */}
                <img
                    src="/assets/about-image.jpg"
                    alt="About"
                    className="w-full rounded-lg"
                />
                {/* Row 2.3: p tag */}
                <p className="text-base text-gray-600">
                    We provide the best brow, lash, and nail care to help you look and feel your best.
                </p>
            </div>
        </section>
    );
};

export default About;