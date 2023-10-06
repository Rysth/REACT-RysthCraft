import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Nav({ variant, handleNavMenu }) {
  const { t } = useTranslation();
  const index = variant === 'mobile' ? 1 : 0;
  const navClassList = [
    {
      id: 'desktop',
      navClassList: 'hidden flex-1 justify-center md:flex text-white gap-5',
      navLinkClassList:
        'text-xs p-2 rounded-md md:hover:scale-110 transition-transform duration-150 uppercase font-bold',
    },
    {
      id: 'mobile',
      navClassList:
        'grid px-3 my-3 py-3 basis-full bg-white md:hidden rounded-lg',
      navLinkClassList: 'text-xs p-2 rounded-md',
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={navClassList[index].navClassList}
    >
      <NavLink
        to="/"
        className={navClassList[index].navLinkClassList}
        onClick={handleNavMenu}
      >
        <i className="w-4 mr-2 text-center fa-solid fa-home md:hidden" />
        {t('home')}
      </NavLink>
      <NavLink
        to="/about"
        className={navClassList[index].navLinkClassList}
        onClick={handleNavMenu}
      >
        <i className="w-4 mr-2 text-center fa-solid fa-user md:hidden" />
        {t('about')}
      </NavLink>
      <NavLink
        to="/projects"
        className={navClassList[index].navLinkClassList}
        onClick={handleNavMenu}
      >
        <i className="w-4 mr-2 text-center fa-solid fa-star md:hidden" />
        {t('projects')}
      </NavLink>
    </motion.nav>
  );
}

Nav.propTypes = {
  variant: PropTypes.string.isRequired,
  handleNavMenu: PropTypes.func.isRequired,
};

export default Nav;
