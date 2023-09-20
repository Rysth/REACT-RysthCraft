import React from 'react';
import { motion } from 'framer-motion';
import BannerImage from '../../assets/PNG/banner.png';
import ProfileImage from '../../assets/PNG/profile.jpeg';

function About() {
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
        <div className="w-3/4 mx-auto">
          <div className="overflow-hidden rounded-lg h-50">
            <img alt="content" className="object-center h-full" src={BannerImage} />
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
                <h2 className="mt-4 text-lg font-medium text-white title-font">John Palacios</h2>
                <div className="w-12 h-1 mt-2 mb-4 bg-indigo-500 rounded" />
                <p className="text-sm lg:text-base">
                  Software Developer | Front-End Technologies | Crafting Engaging Web Experiences |
                  React
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
              <p className="mb-4 text-sm leading-relaxed lg:text-lg">
                I&apos;m John Palacios, known as RysthCraft, a passionate software developer
                specializing in creating websites and applications using
                <span className="font-bold">
                  {' '}
                  React, Redux, Astro, NextJS, TailwindCSS, and Strapi.
                  {/* prettier-ignore */ ' '}
                </span>
                With a focus on innovative solutions and clean, efficient code, I&apos;m dedicated
                to bringing your digital ideas to life, ensuring seamless user experiences and
                stunning visuals. Let&apos;s collaborate to turn your vision into a digital reality
                that leaves a lasting impact.
              </p>
              <a
                href="https://www.linkedin.com/in/john-rysthcraft/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
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
