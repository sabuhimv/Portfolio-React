import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./Header.css";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="header"
      className="my-container w-full flex items-center justify-between lg:px-16 md:px-12 sm:px-8 lg:justify-center"
    >
      
      {isOpen ? (
        <div className="overlay-menu z-30 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 py-40 rounded-lg backdrop-blur-md">
          <nav className="flex flex-col items-center text-white">
            <Link to={"/"} className={location.pathname == "/" ? "active" : ""} onClick={handleClick}>
              Home
            </Link>
            <Link
              to={"/about"}
              className={location.pathname == "/about" ? "active" : ""} onClick={handleClick}
            >
              About Me
            </Link>
            <Link
              to={"/projects"}
              className={location.pathname == "/projects" ? "active" : ""} onClick={handleClick}
            >
              Projects
            </Link>
          </nav>

          <div className="flex items-center justify-center mt-2">
            <a
              href={"https://www.linkedin.com/in/sabuhimammadov0"}
              target={"_blank"}
              className="w-6 mr-3 text-2xl text-[#0A66C2] sm:mx-1"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/sabuhimv"
              target="_blank"
              className="className='w-6 ml-3 text-2xl bg-light rounded-full"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      ) : null}

      <div className="text-3xl cursor-pointer hidden lg:inline-block absolute top-15 left-10" onClick={handleClick}>
          <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </div>

      <div className="nav-links lg:hidden">
        <ul className="text-lg font-medium flex justify-between items-center">
          <li>
            <Link to={"/"} className={location.pathname == "/" ? "active" : ""}>
              Home
            </Link>
          </li>

          <li>
            <Link
              to={"/about"}
              className={location.pathname == "/about" ? "active" : ""}
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              to={"/projects"}
              className={location.pathname == "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>

      <div className="logo lg:flex lg:justify-between">
        <Logo />
      </div>

      <div className="contacts flex justify-center lg:hidden">
        <a
          href="https://www.linkedin.com/in/sabuhimammadov0"
          className="text-3xl mr-3 text-[#0A66C2]"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sabuhimv"
          className="text-3xl ml-3"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
