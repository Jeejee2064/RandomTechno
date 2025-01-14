'use client'


import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from './Title';
import CTA from './CTA';
import Link from 'next/link';



const ImaDroite = ({image, text,title,href, cta}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="w-full h:full md:h-3/4  py-12 lg:py-36 bg-gris">


            <div className="block md:flex justify-center">
                <motion.div
                    className="flex w-full md:w-1/2 p-10 items-center justify-center relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute top-50 left-50  z-0">
                        <svg
                            width="200"
                            height="200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-background"
                        >
                            <path
                                fill="#141414"
                                stroke="#141414"
                                strokeWidth="0.1"
                                strokeDasharray="0.600001, 0.600001"
                                d="m 116.07941,70.29495 c 4.10403,-2.247874 5.26214,-5.642964 5.26214,-5.642964 0,0 -1.41076,-13.752377 8.14842,-18.900089 6.81865,-3.671915 17.56391,-1.483686 19.35289,-0.897515 1.78898,0.586171 12.50397,-1.350267 18.14755,-2.42329 5.64357,-1.07302 9.96737,-1.886911 13.23043,-2.709815 2.89331,-0.729657 9.09876,-1.538439 9.1536,-0.278961 0.0548,1.259475 -15.10904,3.641824 -20.20271,4.954947 -4.87621,1.257062 -8.38913,2.049286 -13.77374,7.020775 -5.38462,4.971489 -10.69611,15.899746 -12.55516,22.704089 -1.85905,6.804339 -1.25592,10.167361 -8.21493,23.432834 -6.40598,12.211279 -17.98862,18.306559 -29.13613,22.022859 -13.612161,4.53795 -26.575804,2.30048 -34.604567,-2.05529 -5.477192,-2.9715 -12.099968,-3.21238 -18.081397,-3.54136 -6.851482,-0.37684 -21.650137,2.17285 -21.441137,1.05778 0.208999,-1.11506 7.135386,-2.36661 7.135386,-2.36661 0,0 -11.636448,1.67247 -12.225059,0.66403 -0.588607,-1.00843 29.1241,-5.77871 32.389476,-6.31614 3.265377,-0.53742 20.964461,-3.50971 25.635553,-5.8349 4.671092,-2.325189 6.299211,-4.906899 6.299211,-4.906899 0,0 -2.699314,-0.95482 -2.918061,-2.927203 -0.218749,-1.972387 -5.464056,-1.852927 -5.619744,-5.244077 -0.10526,-2.292741 -6.195077,-2.630393 -5.894069,-5.134721 0.301006,-2.504329 -4.51377,-3.368665 -5.356022,-4.774874 -0.752408,-1.256208 0.67883,-1.548555 0.67883,-1.548555 0,0 -6.210249,-2.774871 -6.680038,-3.872267 -0.469789,-1.097394 0.682445,-1.156499 0.682445,-1.156499 0,0 -7.285098,-3.410397 -7.692739,-5.27798 -0.407639,-1.867583 2.158232,-1.225354 2.158232,-1.225354 0,0 -10.490084,-5.355027 -10.427037,-7.313032 0.03827,-1.188578 2.671803,0.138968 1.38613,-0.721375 C 47.23989,54.621746 40.305132,46.483103 37.420939,43.93369 c -3.942336,-3.484734 -2.987461,-6.529419 -2.987461,-6.529419 0,0 -5.577303,-3.050442 -5.898729,-5.145042 -0.208447,-1.358364 0.605454,-2.57523 0.605454,-2.57523 0,0 -2.28313,-1.071726 -2.667615,-2.467083 -0.384485,-1.395354 -0.750094,-2.731686 -0.750094,-2.731686 0,0 6.464947,1.378297 9.763836,1.782887 3.298891,0.404593 27.7359,10.515137 35.292148,14.41482 7.556249,3.899686 26.185773,14.92178 30.527222,17.70335 4.34145,2.781573 10.45725,7.748188 11.82336,8.989994 1.36611,1.241806 2.95035,2.918669 2.95035,2.918669 z"
                                id="path303" />
                        </svg>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="px-10  z-10"
                    >
                        <div className="justify-center items-center">
                            <Title text={title} />
                            <p className=" text-gray-200 md:text-1xl lg:text-xl align-text-center">
                                {text}                         
                                   </p>
                            <Link href={href}>
                                <CTA name={cta} />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="w-screen md:w-1/2 xl:w-2/5 m-auto  h:full ">
                    <motion.img
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                        src={`/img/${image}`}
                        alt="Best Food in Bocas"
                        className="w-full rounded-lg h:full "
                    />
                </div>
            </div>
        </div>
    );
};

export default ImaDroite;

