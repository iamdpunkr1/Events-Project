import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-800 py-8 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <a href="#" className="text-2xl font-bold hover:text-gray-300 transition">TREND MMS</a>
          <p className="text-sm text-gray-500 mt-2">© 2024 Your Company Name. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-xl hover:text-gray-300 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-300 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-300 transition">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-300 transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <address className="text-sm text-gray-500 mb-2 md:mb-0">
            <i className="fas fa-map-marker-alt"></i> TREND MMS
          </address>
          <a href="tel:+1234567890" className="text-sm text-gray-500 hover:text-gray-300 transition">
            <i className="fas fa-phone-alt"></i> +1 (234) 567-8900
          </a>
          <a href="mailto:info@yourcompany.com" className="text-sm text-gray-500 hover:text-gray-300 transition">
            <i className="fas fa-envelope"></i> info@yourcompany.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
