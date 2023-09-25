import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from './Nav/Nav';
import BrandLogo from '../../assets/PNG/brand.png';

function NavBar() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = () => {
    const actualLang = i18n.language;
    if (actualLang === 'es') i18n.changeLanguage('en');
    if (actualLang === 'en') i18n.changeLanguage('es');
  };
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
        <button
          type="button"
          className="btn md:hidden"
          onClick={handleMobileMenu}
        >
          <i className="text-2xl fa-solid fa-bars" />
        </button>
        {isOpen && <Nav variant="mobile" handleNavMenu={handleNavMenu} />}
        <button
          type="button"
          className="hidden md:inline-block btn btn-neutral"
          onClick={handleLanguageChange}
        >
          {t('language')}
        </button>
      </div>
    </motion.div>
  );
}

export default NavBar;
