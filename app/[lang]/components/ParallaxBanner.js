'use client'
import { Parallax } from 'react-parallax';
import { allura } from '../fonts';
import AniText from './AnimatedTextCharacter';
const ParallaxBanner = ({image,text}) => {
  return (
    <div className="relative">
      <Parallax bgImage={image} strength={500} bgClassName='object-cover'>
        <div style={{ height: '47vh' }} className={allura.className}>
         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="flex items-center justify-center h-full text-white text-center z-10">
            <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl">{text}</h1>
          </div>
        </div>
      </Parallax>
     
    </div>
  );
};

export default ParallaxBanner;
