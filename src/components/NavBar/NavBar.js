import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from './Nav/Nav';
import BrandLogo from '../../assets/PNG/brand.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => setIsOpen(!isOpen);
  const handleNavMenu = () => setIsOpen(false);

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="sticky container max-w-[1300px] mx-auto px-4 py-2 md:py-6 flex flex-wrap justify-between items-center">
        <Link to="/">
          <img className="w-24 lg:w-32" src={BrandLogo} alt="" />
        </Link>
        <Nav variant="desktop" handleNavMenu={handleNavMenu} />
        <button type="button" className="btn md:hidden" onClick={handleMobileMenu}>
          <i className="fa-solid fa-bars text-2xl" />
        </button>
        {isOpen && <Nav variant="mobile" handleNavMenu={handleNavMenu} />}
        <a
          href="https://docs.google.com/document/d/1EPlymsJEe9xrWX4LtRBMx1arWRSH2HSVSXRW73-yZDw/edit?usp=sharing"
          type="button"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block btn btn-neutral"
        >
          See Resume
        </a>
      </div>
    </motion.div>
  );
}

export default NavBar;
