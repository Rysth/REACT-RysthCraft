import React from 'react';
import { motion } from 'framer-motion';
import BrandLogo from '../../assets/PNG/brand.png';

function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
        type: 'spring',
      }}
      className="body-font"
    >
      <div className="container max-w-[1300px] flex flex-col items-center px-4 py-8 mx-auto lg:pt-16 sm:flex-row">
        <a
          className="flex items-center justify-center font-medium text-white title-font md:justify-start"
          href="/"
        >
          <img className="w-32" src={BrandLogo} alt="" />
        </a>
        <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © 2023 John Palacios —
          <a
            href="https://github.com/Rysth"
            className="ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @rysthcraft
          </a>
        </p>
        <span className="inline-flex justify-center gap-5 mt-4 text-white lg:gap-10 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            className="text-base transition-transform lg:text-2xl lg:hover:scale-125"
            href="https://www.instagram.com/rysthcraft/"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            className="text-base transition-transform lg:text-2xl lg:hover:scale-125"
            href="https://www.linkedin.com/in/john-rysthcraft/"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            className="text-base transition-transform lg:text-2xl lg:hover:scale-125"
            href="https://github.com/Rysth"
          >
            <i className="fa-brands fa-github" />
          </a>
        </span>
      </div>
    </motion.footer>
  );
}

export default Footer;
