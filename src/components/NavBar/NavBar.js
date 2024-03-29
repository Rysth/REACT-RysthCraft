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
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="sticky top-0 z-[2000] backdrop-blur-xl"
    >
      <div className="container flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto sm:py-6">
        <Link to="/">
          <img className="w-24 lg:w-32" src={BrandLogo} alt="" />
        </Link>
        <Nav variant="desktop" handleNavMenu={handleNavMenu} />
        <button
          type="button"
          name="toggle"
          className="btn md:hidden"
          onClick={handleMobileMenu}
        >
          <span className="hidden">Toggle Button</span>
          <i className="text-2xl fa-solid fa-bars" />
        </button>
        {isOpen && (
          <>
            <Nav variant="mobile" handleNavMenu={handleNavMenu} />
            <div className="w-full md:hidden">
              <button
                type="button"
                className="flex items-center justify-center w-full gap-1 btn btn-neutral md:hidden"
                onClick={handleLanguageChange}
              >
                {t('language')}
                <i className="fa-solid fa-language" />
              </button>
            </div>
          </>
        )}
        <button
          type="button"
          className="items-center hidden gap-1 md:flex btn btn-neutral"
          onClick={handleLanguageChange}
        >
          {t('language')}
          <i className="fa-solid fa-language" />
        </button>
      </div>
    </motion.div>
  );
}

export default NavBar;
