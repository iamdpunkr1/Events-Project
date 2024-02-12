import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo2.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <header className={`sticky top-0 z-50 text-white ${scrolled ? 'bg-black' : ''}`}>
      <nav className='max-w-[1200px] mx-auto flex justify-between'>
        <div className='text-xl font-bold'>
          <img src={logo2} alt='logo' className='w-48' />
        </div>
        <ul className='flex items-center gap-x-8'>
          <li className='font-medium'>Home</li>
          <li className='font-medium'>About</li>
          <li className='font-medium'>Services</li>
          <li className='font-medium'>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
