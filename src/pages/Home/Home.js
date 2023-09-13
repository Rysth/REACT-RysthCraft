import React from 'react';
import HeroImage from '../../assets/PNG/hero/hero.png';

function Home() {
  return (
    <div>
      <div className="container max-w-[1300px] mx-auto text-white p-4 py-16 lg:py-28 grid lg:grid-cols-2 gap-5">
        <div className="text-center lg:text-left max-w-[30rem] mx-auto lg:max-w-full lg:mx-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-none">
            Elevating User Journeys through React Development Expertise
          </h2>
          <p className="my-5 text-xs sm:text-basetext-gray-400 lg:text-xl">
            Welcome to RysthCraft&apos;s Portfolio. I&apos;m John Palacios, a React Developer.
            Explore my web projects here.
          </p>
          <div className="flex justify-center gap-5 lg:justify-start mt-5">
            <button className="btn btn-primary rounded-2xl" type="button">
              <i className="fa-brands fa-github mr-1" />
              GitHub
            </button>
            <a
              href="https://www.linkedin.com/in/john-rysthcraft/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              type="button"
            >
              <i className="fa-brands fa-linkedin mr-1" />
              Linkedin
            </a>
          </div>
        </div>
        <div className="grid place-items-center mt-10 lg:mt-0">
          <div className=" rounded-2xl p-[0.1em] relative bg-gradient-to-tl from-[var(--CL-primary-blue)]  via-transparent to-[var(--CL-primary-purple)]  backdrop-blur">
            <div className="absolute w-[10rem] h-[10rem] rounded-full bg-[var(--CL-primary-pink)] -top-16 -left-16 blur-3xl z-10 opacity-40" />
            <img className=" w-60 lg:w-96 rounded-2xl z-50 relative" src={HeroImage} alt="" />
            <div className="absolute w-[10rem] h-[10rem] rounded-full bg-[var(--CL-primary-blue)] -bottom-16 -right-16 blur-3xl z-10 opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
