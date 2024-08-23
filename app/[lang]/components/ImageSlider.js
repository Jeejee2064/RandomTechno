'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';





const ImageSlider = ({images}) => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };




    return (
        <div className={`  pt-12`}>


            <div className="   ">

                <div className=" mx-auto items-center justify-center mt-8 ">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                        className="items-center justify-center"
                    >
                        <Slider {...settings} className="md:w-3/4 w-full lg:w-3/5 h-1/2 mx-auto ">
                        {images && images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
                        </Slider>
                    </motion.div>
                </div>
              
            </div>
        </div>
    );
};

export default ImageSlider;

