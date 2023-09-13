import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Nav({ variant, handleNavMenu }) {
  const index = variant === 'mobile' ? 1 : 0;
  const navClassList = [
    {
      id: 'desktop',
      navClassList: 'hidden flex-1 justify-center md:flex text-white gap-5',
      navLinkClassList:
        'text-sm p-2 rounded-md md:hover:scale-110 transition-transform duration-150',
    },
    {
      id: 'mobile',
      navClassList: 'grid px-3 my-3 py-3 basis-full bg-white md:hidden rounded-lg',
      navLinkClassList: 'text-sm p-2 rounded-md',
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={navClassList[index].navClassList}
    >
      <NavLink to="/" className={navClassList[index].navLinkClassList} onClick={handleNavMenu}>
        <i className="fa-solid fa-home w-4 mr-2 text-center md:hidden" />
        Home
      </NavLink>
      <NavLink to="/about" className={navClassList[index].navLinkClassList} onClick={handleNavMenu}>
        <i className="fa-solid fa-user w-4 mr-2 text-center md:hidden" />
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={navClassList[index].navLinkClassList}
        onClick={handleNavMenu}
      >
        <i className="fa-solid fa-star w-4 mr-2 text-center md:hidden" />
        Projects
      </NavLink>
    </motion.nav>
  );
}

Nav.propTypes = {
  variant: PropTypes.string.isRequired,
  handleNavMenu: PropTypes.func.isRequired,
};

export default Nav;
