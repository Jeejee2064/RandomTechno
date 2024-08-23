
'use client'


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher'
import Image from 'next/image'
const itemVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const NavBar = ({ hotel, resto, activite, about, contact, faune, bookNow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // Get the current path
  const currentPath = window.location.pathname;

  // Extract the language code from the path
  const lang = currentPath.split('/')[1];
  console.log('Current Language:', lang);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { y: -72, opacity: 0, transition: { duration: 0.3 } },
  };

  const menuVariants = {
    hidden: { y: -300, opacity: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120, damping: 20 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, type: 'spring', stiffness: 120, damping: 20 } },
  };

  return (
    <motion.nav
      initial={false}
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      className="flex w-screen justify-between items-center bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-transparent p-5"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
      >
        <Link href='/'>


          <Image
            src="/LogoSB.svg"
            alt="SVG Image"
            width={50}
            height={50}
          />
        </Link>
      </motion.div>
      <LanguageSwitcher />

      <div className="hidden lg:flex items-center space-x-12">

        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="relative hover-underline-animation"
          style={{ display: "inline-block" }}
        >
          <Link href='Hotel' className="text-lg">
            <span>{hotel}</span>
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="relative hover-underline-animation"
          style={{ display: "inline-block" }}
        >
          <Link href='Restaurant' className="text-lg">
            <span>{resto}</span>
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="relative hover-underline-animation"
          style={{ display: "inline-block" }}
        >
          <Link href='Activities' className="text-lg">
            <span>{activite}</span>
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="relative hover-underline-animation"
          style={{ display: "inline-block" }}
        >
          <Link href='About' className="text-lg">
            <span>{about}</span>
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="relative hover-underline-animation"
          style={{ display: "inline-block" }}
        >
          <Link href='Contact' className="text-lg">
            <span>{contact}</span>
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="relative hover-underline-animation"
          style={{ display: "inline-block" }}
        >
          <Link href='Faune' className="text-lg">
            <span>{faune}</span>
          </Link>
        </motion.div>

      </div>

      <div className="lg:hidden" onClick={toggleMenu} style={{ marginLeft: 'auto', marginRight: '4vw' }}>
        <div className="burger">
          <div className={isOpen ? "cross" : ""}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50"
            onClick={toggleMenu}
          >

            <div className="flex flex-col items-center text-white space-y-4">
            <motion.div
              variants={itemVariants}
              initial="initial"
              animate="animate"
            >
              <Link href='/'>


                <Image
                  src="/LogoSB.svg"
                  alt="SVG Image"
                  width={100}
                  height={100}
                />
              </Link>
            </motion.div>
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                className="relative hover-underline-animation"
                style={{ display: "inline-block" }}
              >
                <Link href='Hotel' className="text-lg">
                  <span>{hotel}</span>
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                className="relative hover-underline-animation"
                style={{ display: "inline-block" }}
              >
                <Link href='Restaurant' className="text-lg">
                  <span>{resto}</span>
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                className="relative hover-underline-animation"
                style={{ display: "inline-block" }}
              >
                <Link href='Activities' className="text-lg">
                  <span>{activite}</span>
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                className="relative hover-underline-animation"
                style={{ display: "inline-block" }}
              >
                <Link href='About' className="text-lg">
                  <span>{about}</span>
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                className="relative hover-underline-animation"
                style={{ display: "inline-block" }}
              >
                <Link href='Contact' className="text-lg">
                  <span>{contact}</span>
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                className="relative hover-underline-animation"
                style={{ display: "inline-block" }}
              >
                <Link href='Faune' className="text-lg">
                  <span>{faune}</span>
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
              >
                <Link href="https://b8dd875345308c59.sirvoy.me" passHref>
                  <button className=" bg-blue-500 text-white px-4 py-2 rounded">
                    {bookNow}
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
      >
        <Link href="https://b8dd875345308c59.sirvoy.me/" passHref>
          <button className="hidden lg:block bg-blue-500 text-white mr-4 px-4 py-2 rounded">
            {bookNow}
          </button>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
