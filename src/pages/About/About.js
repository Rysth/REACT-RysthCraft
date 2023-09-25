import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BannerImage from '../../assets/PNG/banner.png';
import ProfileImage from '../../assets/PNG/profile.jpeg';

function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
        type: 'spring',
      }}
      className="text-gray-300 body-font"
    >
      <div className="container max-w-[1300px] flex flex-col px-4 py-16 mx-auto">
        <div className="w-5/6 mx-auto lg:w-3/4">
          <div>
            <img
              alt="content"
              className="object-center rounded-lg"
              src={BannerImage}
            />
          </div>
          <div className="flex flex-col mt-10 sm:flex-row">
            <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 overflow-hidden text-gray-400 bg-gray-200 rounded-full">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src={ProfileImage}
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mt-4 text-lg font-medium text-white title-font">
                  John Palacios
                </h2>
                <div className="w-12 h-1 mt-2 mb-4 bg-indigo-500 rounded" />
                <p className="text-sm lg:text-base">{t('aboutTech')}</p>
              </div>
            </div>
            <div className="pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
              <p className="mb-4 text-sm leading-relaxed lg:text-lg">
                {t('aboutDescription')}
              </p>
              <a
                href="https://www.linkedin.com/in/john-rysthcraft/"
                target="_blank"
                rel="noreferrer"
                className="inline-block btn btn-secondary"
                type="button"
              >
                <i className="mr-1.5 fa-brands fa-linkedin" />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
