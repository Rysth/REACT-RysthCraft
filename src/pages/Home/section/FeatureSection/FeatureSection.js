import React from 'react';
import ProjectOne from '../../../../assets/PNG/projects/project_1.jpg';

function FeatureSection() {
  return (
    <div className="container max-w-[1300px] mx-auto text-white p-4 py-16 lg:py-28">
      <header className="mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left font-bold">
          Featured Projects
        </h2>
      </header>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        <div className="rounded-xl">
          <picture>
            <img className="w-full rounded-xl" src={ProjectOne} alt="" />
          </picture>
          <div className="flex justify-between text-base my-4">
            <p className="font-bold">UpdateEC</p>
            <p className="font-bold">REACT</p>
          </div>
          <hr className="my-2" />
          <ul className="py-3 grid gap-2">
            <li className="flex justify-between items-center text-xs">
              <p>
                <i className="fa-solid fa-star w-3 mr-2" />
                Live Preview
              </p>
              <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-badge border"
              >
                Watch
              </a>
            </li>
            <li className="flex justify-between items-center text-xs">
              <p>
                <i className="fa-brands fa-github w-3 mr-2" />
                GitHub
              </p>
              <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-badge border"
              >
                Watch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
