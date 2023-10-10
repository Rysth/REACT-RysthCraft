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
      className="mt-auto bg-[var(--CL-primary-dark)] body-font fade-in"
    >
      <div className="container flex flex-col items-center max-w-screen-xl px-4 py-8 mx-auto lg:pt-32 sm:flex-row">
        <div className="w-full text-white">
          <div className="grid md:grid-cols-[1fr_65%] gap-10">
            <a href="/" rel="noopener noreferrer">
              <img
                src={BrandLogo}
                className="w-48 mx-auto sm:w-72 lg:w-full"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-around gap-8 text-center sm:gap-20 md:text-left md:justify-end sm:flex-row lg:gap-28">
              <ul className="flex flex-col gap-3 p-0 lg:gap-6">
                <li className="mb-2 text-lg font-bold md:text-2xl lg:text-3xl">
                  Marketplace
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Home
                  </a>
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Activity
                  </a>
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Discover
                  </a>
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Learn More
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-3 p-0 lg:gap-6">
                <li className="mb-2 text-lg font-bold md:text-2xl lg:text-3xl">
                  Company
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    About Us
                  </a>
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Services
                  </a>
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-3 p-0 lg:gap-6">
                <li className="mb-2 text-lg font-bold md:text-2xl lg:text-3xl">
                  Contact
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Instagram
                  </a>
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    GitHub
                  </a>
                </li>
                <li className="text-base font-light tracking-wider text-gray-300 ">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="h-0.5 my-10 border-0 outline-none bg-gray-400" />
          <div className="flex flex-col items-center justify-between gap-3 text-gray-400 sm:flex-row">
            <ul className="flex justify-center gap-5 md:justify-start">
              <li className="transition-transform lg:hover:scale-110">
                <a
                  href="https://www.instagram.com/rysthcraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-2xl fa-brands fa-instagram" />
                </a>
              </li>
              <li className="transition-transform lg:hover:scale-110">
                <a
                  href="https://www.linkedin.com/in/john-palacios-rysthcraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-2xl fa-brands fa-linkedin" />
                </a>
              </li>
              <li className="transition-transform lg:hover:scale-110">
                <a
                  href="https://github.com/Rysth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-2xl fa-brands fa-github" />
                </a>
              </li>
            </ul>
            <p>Copyright RysthCraft | 2023</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
