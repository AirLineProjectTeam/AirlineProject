import React from 'react';
import Logo from "./assets/LOGO.png"

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold text-gray-800">Base</span>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#home" className="text-red-500">Home</a>
          <a href="#features" className="text-gray-600">Features</a>
          <div className="relative">
            <button className="text-gray-600">Pages</button>
            {/* Dropdown Menu for Pages */}
            <div className="absolute hidden mt-2 bg-white shadow-lg">
              <a href="#page1" className="block px-4 py-2 text-gray-600">Page 1</a>
              <a href="#page2" className="block px-4 py-2 text-gray-600">Page 2</a>
            </div>
          </div>
          <a href="#support" className="text-gray-600">Support</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">Sign In</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;


