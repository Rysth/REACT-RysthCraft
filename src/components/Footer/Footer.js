import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/PNG/brand.png';

function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.25,
        delay: 1,
        type: 'spring',
      }}
      className="mt-auto bg-[var(--CL-primary-dark)] body-font fade-in"
    >
      <div className="container flex flex-col items-center max-w-screen-xl px-4 py-8 mx-auto lg:pt-24 sm:flex-row">
        <div className="w-full text-white">
          <div className="grid lg:grid-cols-[1fr_60%] gap-10">
            <Link to="/" rel="noopener noreferrer">
              <img
                src={BrandLogo}
                className="w-48 mx-auto lg:mx-0 sm:w-72 lg:w-96"
                alt="RysthCraft brand"
              />
            </Link>
            <div className="flex flex-col justify-around gap-8 text-center sm:gap-20 lg:gap-32 md:text-left lg:justify-end sm:flex-row ">
              <ul className="flex flex-col gap-3 p-0 lg:gap-6">
                <li className="mb-2 text-lg font-bold md:text-2xl ">
                  RysthCraft
                </li>
                <li className="text-sm font-light tracking-wider text-gray-300 ">
                  <Link
                    to="/"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    {t('home')}
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-3 p-0 lg:gap-6">
                <li className="mb-2 text-lg font-bold md:text-2xl ">
                  {t('quickAccess')}
                </li>
                <li className="text-sm font-light tracking-wider text-gray-300 ">
                  <Link
                    to="/about"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    {t('about')}
                  </Link>
                </li>
                <li className="text-sm font-light tracking-wider text-gray-300 ">
                  <Link
                    to="/projects"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    {t('projects')}
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-3 p-0 lg:gap-6">
                <li className="mb-2 text-lg font-bold md:text-2xl ">
                  {t('contacts')}
                </li>
                <li className="text-sm font-light tracking-wider text-gray-300 ">
                  <a
                    href="https://www.linkedin.com/in/john-palacios-rysthcraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-sm font-light tracking-wider text-gray-300 ">
                  <a
                    href="https://github.com/Rysth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    GitHub
                  </a>
                </li>
                <li className="text-sm font-light tracking-wider text-gray-300 ">
                  <a
                    href="mailto:johnpalacios.t@gmail.com"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform lg:hover:translate-x-1"
                  >
                    Gmail
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
                  <span className="hidden">Instagram</span>
                  <i className="text-2xl fa-brands fa-instagram" />
                </a>
              </li>
              <li className="transition-transform lg:hover:scale-110">
                <a
                  href="https://www.linkedin.com/in/john-palacios-rysthcraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hidden">LinkedIN</span>
                  <i className="text-2xl fa-brands fa-linkedin" />
                </a>
              </li>
              <li className="transition-transform lg:hover:scale-110">
                <a
                  href="https://github.com/Rysth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hidden">GitHub</span>
                  <i className="text-2xl fa-brands fa-github" />
                </a>
              </li>
            </ul>
            <p className="text-sm">Copyright RysthCraft | 2023</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
