'use client'

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { allura } from "../fonts";

const Title  = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className={allura.className}>
      <motion.h1
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="px-4 text-6xl text-center  text-gray-200 font-bold"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default Title ;
