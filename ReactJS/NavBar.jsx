import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-indigo-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">MyApp</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-indigo-200 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-indigo-200 transition duration-300">About</a>
          <a href="#services" className="text-white hover:text-indigo-200 transition duration-300">Services</a>
          <a href="#contact" className="text-white hover:text-indigo-200 transition duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-600 p-4">
          <a href="#" className="block text-white py-2 px-4 hover:bg-indigo-700 transition duration-300">Home</a>
          <a href="#about" className="block text-white py-2 px-4 hover:bg-indigo-700 transition duration-300">About</a>
          <a href="#services" className="block text-white py-2 px-4 hover:bg-indigo-700 transition duration-300">Services</a>
          <a href="#contact" className="block text-white py-2 px-4 hover:bg-indigo-700 transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
