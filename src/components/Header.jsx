import React, { useEffect } from "react";
import LogoWhite from "../assets/img/header/logo-white.webp";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variants";
import { useState } from "react";
import Socials from "./Socials";
import Nav from "./Nav";

// Header Variants
const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};
const Header = () => {
  // Header State
  const [isActive, setIsActive] = useState(false);
  // nav state
  const [nav, setNav] = useState(false);

  // event listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <motion.header
      variants={headerVariants}
      initial='hidden'
      animate={isActive ? "show" : ""}
      className='bg-pink-200/20 fixed w-full max-w-[1800px] z-50 py-4'
    >
      <div className='container mx-auto'>
        {/* menu button */}
        <motion.div onClick={() => setNav(!nav)} className='cursor-pointer flex '>
          menu button
        </motion.div>
        {/* Logo */}
        <div className=''>
          <a href='/' className=''>
            {/* if header is active make logo 90 x 90 px else 107 x 107 px */}
            <img
              className={`${
                isActive ? "w-[90px] h-[90px]" : "w-[107px] h-[107px]"
              }`}
              src={LogoWhite}
              alt='logo'
            />
          </a>
        </div>
        {/* Social icon */}
        <div className=''>
          <Socials />
        </div>
        {/* Nav */}
        <motion.div
          variants={navVariants}
          initial='hidden'
          animate={nav ? "show" : ""}
          className='absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl'
        >
          <Nav />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
