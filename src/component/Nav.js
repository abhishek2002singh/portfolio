import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Portfolio Name */}
        <Link to='/'>
        <div className="text-2xl font-bold text-blue-600">
          <a href="#home" className="hover:text-blue-800 transition">MyPortfolio</a>
        </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          
          <a
            href="#projects"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Contact
          </a>
        </div>

        {/* Download Resume Button */}
        <div>
          <a
            href="https://drive.google.com/file/d/1rDF_CHPOUAf0WAPHnsYxmyY_kWCPkGmt/view?usp=drive_link"
            download
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition font-medium"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-btn"
            className="focus:outline-none"
            onClick={() => {
              document.getElementById("menu").classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="menu"
        className="hidden flex flex-col space-y-3 px-4 py-4 md:hidden bg-white shadow-md"
      >
        <a
          href="#projects"
          className="text-gray-600 hover:text-blue-600 transition font-medium"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="text-gray-600 hover:text-blue-600 transition font-medium"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="text-gray-600 hover:text-blue-600 transition font-medium"
        >
          Contact
        </a>
        <a
          href="/path-to-resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition font-medium"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Nav;
