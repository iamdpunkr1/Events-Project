import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo2.png';
import Hamburger from 'hamburger-react';

const navStyles = "cursor-pointer hover:text-red-500 font-medium";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`sticky top-0 z-40 text-white ${scrolled ? 'bg-black' : ''}`}>
      <nav className='max-w-[1200px] mx-auto flex justify-between'>
        <div className='text-xl font-bold'>
          <img src={logo2} alt='logo' className='w-48' />
        </div>
        <div className="flex items-center lg:hidden">
                 <Hamburger toggled={isOpen} toggle={setOpen} size={30} color={"#fff"}  />
        </div>
        <div className='hidden lg:flex' >
        <ul className='flex items-center gap-x-8  '>
          <li className={navStyles}><a href="#home">Home</a></li>
          <li className={navStyles}><a href="#about">About</a></li>
          <li className={navStyles}><a href="#event">Event</a></li>
          <li className={navStyles}><a href="#gallery">Gallery</a></li>
          <li className={navStyles}><a href="#team">Team</a></li>
          <li className={navStyles}><a href="#contactus">Contact Us</a></li>
        </ul>
        </div>
      </nav>

      <div className={`absolute lg:hidden sidenav ${isOpen? "show": ""}`}>
                   
                   <ul className="font-semibold flex flex-col text-white gap-8 px-8 mt-28">
                      <li className={navStyles}><a href="#home">Home</a></li>
                      <li className={navStyles}><a href="#about">About</a></li>
                      <li className={navStyles}><a href="#event">Event</a></li>
                      <li className={navStyles}><a href="#gallery">Gallery</a></li>
                      <li className={navStyles}><a href="#team">Team</a></li>
                      <li className={navStyles}><a href="#contactus">Contact Us</a></li>
                   </ul>
     </div>
    </header>
  );
};

export default Navbar;
