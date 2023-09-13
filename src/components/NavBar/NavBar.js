import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandLogo from '../../assets/PNG/brand.png';

function NavBar() {
  return (
    <div className=" bg-black">
      <div className="container max-w-[1240px] mx-auto px-4 py-2 md:py-4 flex flex-wrap justify-between items-center">
        <Link to="/">
          <img className="w-24 lg:w-32" src={BrandLogo} alt="" />
        </Link>
        <button type="button" className="btn">
          <i className="fa-solid fa-bars text-2xl" />
        </button>
        <nav className="my-3 py-3 basis-full bg-white md:hidden rounded-lg">
          <ul className="grid px-3 py-1">
            <NavLink to="/" className="text-sm p-2 rounded-md">
              <i className="fa-solid fa-home w-4 mr-2 text-center" />
              Home
            </NavLink>
            <NavLink to="/about" className="text-sm p-2 rounded-md">
              <i className="fa-solid fa-user w-4 mr-2 text-center" />
              About
            </NavLink>
            <NavLink to="/projects" className="text-sm p-2 rounded-md">
              <i className="fa-solid fa-star w-4 mr-2 text-center" />
              Projects
            </NavLink>
          </ul>
        </nav>
        <button type="button" className="hidden md:inline-block btn btn-neutral">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default NavBar;
