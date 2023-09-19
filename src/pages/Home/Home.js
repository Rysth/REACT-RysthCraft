import React from 'react';
import HeroSection from './section/HeroSection/HeroSection';
import FeatureSection from './section/FeatureSection/FeatureSection';
import ServicesSection from './section/ServicesSection/ServicesSection';
import BrandLogo from '../../assets/PNG/brand.png';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <footer className="body-font">
        <div className="container flex flex-col items-center px-4 py-8 mx-auto lg:pt-16 sm:flex-row">
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
            <a className="text-base lg:text-2xl" href="/">
              <i className="fa-brands fa-instagram" />
            </a>
            <a className="text-base lg:text-2xl" href="/">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a className="text-base lg:text-2xl" href="/">
              <i className="fa-brands fa-github" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
