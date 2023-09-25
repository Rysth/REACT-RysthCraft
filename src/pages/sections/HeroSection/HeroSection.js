import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroImage from '../../../assets/PNG/hero/hero.png';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
        type: 'spring',
      }}
      className="container max-w-[1300px] mx-auto text-white p-4 py-16 lg:py-20 grid lg:grid-cols-[55%_1fr] items-center gap-2"
    >
      <div className="text-center lg:text-left max-w-[35rem] mx-auto lg:max-w-full lg:mx-0">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-8xl lg:leading-none tracking-in-expand">
          {t('elevatingUserJourneys')}
        </h2>
        <p className="my-5 text-xs text-gray-300 sm:text-base lg:text-xl">
          {t('welcomeMessage')}
        </p>
        <div className="flex justify-center gap-5 mt-5 lg:justify-start">
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
      <div className="grid mt-10 place-items-center lg:place-items-end lg:mt-0">
        <motion.div
          initial={{ backgroundColor: '#3081ed', scale: 0.95 }}
          animate={{ backgroundColor: '#fb37ff', scale: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className="rounded-2xl p-[0.1em] relative bg-gradient-to-tl from-[var(--CL-primary-blue)]  via-transparent to-[var(--CL-primary-purple)] w-[18rem] lg:w-[32rem]"
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
    </motion.div>
  );
}

export default HeroSection;
