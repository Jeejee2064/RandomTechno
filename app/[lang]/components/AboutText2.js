'use client'

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutText2  = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className='flex' >

      <motion.ul
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="text-lg flex items-center  mx-4 l:mx-8 text-gray-200 "
      >

      <h1>
        {text}
        </h1>
      </motion.ul>
    </div>
  );
};

export default AboutText2 ;
