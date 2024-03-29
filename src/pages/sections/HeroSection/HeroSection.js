import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroImage from '../../../assets/PNG/hero/hero.png';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="container flex flex-col items-center justify-center max-w-screen-xl px-4 py-16 mx-auto text-white sm:flex-row ">
      <div className="text-center md:text-left max-w-[30rem] mx-auto md:max-w-[45rem] lg:mx-0 md:pr-16 :pr-32">
        <h2 className="text-4xl font-bold md:text-6xl lg:text-7xl xl:text-8xl lg:leading-none">
          {t('elevatingUserJourneys')}
        </h2>
        <p className="my-5 text-xs text-gray-300 sm:text-base lg:text-lg">
          {t('welcomeMessage')}
        </p>
        <div className="flex justify-center gap-5 mt-5 md:justify-start">
          <a
            href="https://github.com/Rysth"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary rounded-2xl"
            type="button"
          >
            <i className="fa-brands fa-github mr-1.5" />
            {t('githubLink')}
          </a>
          <a
            href="https://www.linkedin.com/in/john-rysthcraft/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            type="button"
          >
            <i className="fa-brands fa-linkedin mr-1.5" />
            {t('linkedinLink')}
          </a>
        </div>
      </div>
      <div className="mt-10 md:place-items-end lg:mt-0 ">
        <motion.div
          initial={{ backgroundColor: '#3081ed', scale: 0.95 }}
          animate={{ backgroundColor: '#fb37ff', scale: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className="rounded-2xl relative bg-gradient-to-tl from-[var(--CL-primary-blue)]  via-transparent to-[var(--CL-primary-purple)] p-1"
        >
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.4 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            className="absolute w-[10rem] h-[10rem] rounded-full bg-[var(--CL-primary-pink)] -top-0 -left-0 lg:-top-16 lg:-left-16 blur-3xl z-10"
          />
          <img
            className="relative z-50 w-full rounded-2xl"
            src={HeroImage}
            alt=""
          />
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.4 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            className="absolute w-[10rem] h-[10rem] rounded-full bg-[var(--CL-primary-blue)] -bottom-0 -right-0 lg:-bottom-16 lg:-right-16 blur-3xl z-10 opacity-40"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
