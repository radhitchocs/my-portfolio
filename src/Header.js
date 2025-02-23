// Header.js

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="https://instagram.com/radhitchocs" className="font-bold text-lg text-primary block py-6" target="_blank" rel="noopener noreferrer">radhitchocs</a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute right-4 lg:hidden ${isMenuOpen ? 'hamburger-active' : ''}`}
              onClick={toggleMenu}
            >
              <span className="hamburger-line duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line duration-300 ease-in-out"></span>
              <span className="hamburger-line duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${isMenuOpen ? '' : 'hidden'}`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
                </li>
                <li className="group">
                  <a href="#about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">About Me</a>
                </li>
                <li className="group">
                  <a href="#portofolio" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portofolio</a>
                </li>
                <li className="group">
                  <a href="#blog" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Blog</a>
                </li>
                <li className="group">
                  <a href="#contact" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
