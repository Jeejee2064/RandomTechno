'use client'
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import AnimatedTextCharacter from './AnimatedTextCharacter';
import AniText from './AniText';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../public/loadingAnimation.json'; // Replace with your Lottie JSON file path

const BGSlider = ({ images, title }) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
  };

  useEffect(() => {
    if (loadedImages === images.length) {
      setAllImagesLoaded(true);
    }
  }, [loadedImages, images.length]);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  return (
    <div className="w-full h-screen relative justify-center align-center overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="relative" key={index}>
            <motion.div
              className="w-full h-screen relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: allImagesLoaded ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={`/img/${image}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <div className="absolute bottom-0 w-full h-1/5 bg-gradient-to-t from-gray-800 to-transparent"></div>
            </motion.div>
            <div
              className="text-gray-800"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <div className="p-12">
                <div className="w-full flex items-center justify-center">
<div
      style={{
        width: '300px',
        height: '225px', // 75% of the original 300px height
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Lottie
        animationData={loadingAnimation}
        loop={0}
        style={{
          width: '300px',
          height: '300px', // Original height
          position: 'absolute',
          top: '0', // Align to the bottom of the container
        }}
      />
    </div>
                </div>
                <AnimatedTextCharacter text={title} />
                <AniText text="Playa Bluff, Bocas del Toro" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BGSlider;
