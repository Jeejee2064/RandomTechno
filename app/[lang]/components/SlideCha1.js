import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideCha1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const images = [
        'chambre1.jpg',
        'chambre2.jpg',
        'chambre3.jpg',
        'chambre4.jpg'
    ];

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img
                        src={`./img/${image}`}
                        alt={`chambre${index + 1}`}
                        className="w-full h-full rounded-lg"
                    />
                </div>
            ))}
        </Slider>
    );
};

export default SlideCha1;
