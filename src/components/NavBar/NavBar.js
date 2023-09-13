import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import BrandLogo from '../../assets/PNG/brand.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => setIsOpen(!isOpen);
  const handleNavMenu = () => setIsOpen(false);

  return (
    <div className=" bg-black">
      <div className="container max-w-[1240px] mx-auto px-4 py-2 md:py-4 flex flex-wrap justify-between items-center">
        <Link to="/">
          <img className="w-24 lg:w-32" src={BrandLogo} alt="" />
        </Link>
        <button type="button" className="btn md:hidden" onClick={handleMobileMenu}>
          <i className="fa-solid fa-bars text-2xl" />
        </button>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="my-3 py-3 basis-full bg-white md:hidden rounded-lg"
          >
            <ul className="grid px-3 py-1">
              <NavLink to="/" className="text-sm p-2 rounded-md" onClick={handleNavMenu}>
                <i className="fa-solid fa-home w-4 mr-2 text-center" />
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm p-2 rounded-md" onClick={handleNavMenu}>
                <i className="fa-solid fa-user w-4 mr-2 text-center" />
                About
              </NavLink>
              <NavLink to="/projects" className="text-sm p-2 rounded-md" onClick={handleNavMenu}>
                <i className="fa-solid fa-star w-4 mr-2 text-center" />
                Projects
              </NavLink>
            </ul>
          </motion.nav>
        )}
        <button type="button" className="hidden md:inline-block btn btn-neutral">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default NavBar;
