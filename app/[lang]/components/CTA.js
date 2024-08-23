
'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { parisienne } from '../fonts';

const CTA = ({ name }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [animationKey, setAnimationKey] = useState(0);

  const buttonVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const handleInViewChange = (inView) => {
    if (!inView) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <div className="flex justify-center">
      <motion.button
        key={animationKey}
        ref={ref}
        className="border-solid border-2 text-2xl bg-white text-gray-800 py-4 px-4 rounded-lg mt-8"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={buttonVariants}
        onChange={handleInViewChange}
        whileHover={{
          backgroundColor: 'black',
          color: 'white',
          transition: { duration: 0.5 },
        }}
      >
        <p >
        {name}
        </p>
      </motion.button>
    </div>
  );
};

export default CTA;