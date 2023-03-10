import { useState } from "react";
import { FaCode, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Navbar.css';
import { socials } from '../constants';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const burgerMenu = (
    <div
      className={`menu-btn  ${isOpen ? 'open' : ''}`}
      onClick={mobileMenuHandler}
    >
      <div
        className={`menu-btn__burger md:hidden z-20 bg-accent before:bg-accent after:bg-accent ${
          isOpen ? 'open' : ''
        }`}
      ></div>
    </div>
  );

  // fullscreen nav
  const desktopMenu = (
    <ul className="md:flex hidden gap-6 md:gap-10">
      <li className="hover:text-accent cursor-pointer text-xl">
        <Link to="home" spy={true} offset={-75} duration={500} smooth={true}>
          Home
        </Link>
      </li>
      <li className="hover:text-accent cursor-pointer text-xl">
        <Link
          to="projects"
          spy={true}
          offset={-100}
          duration={500}
          smooth={true}
        >
          Projects
        </Link>
      </li>
      <a
        href="https://resume.creddle.io/resume/20aimu9xvnb"
        target="_blank"
        rel="noreferrer noopener"
      >
        <li className="hover:text-accent cursor-pointer text-xl">Resume</li>
      </a>
      <li className="hover:text-accent cursor-pointer text-xl">
        <Link to="contact" offset={-75} duration={500} smooth={true}>
          Contact
        </Link>
      </li>
    </ul>
  );

  // mobile menu
  const mobile = (
    <div
      className={`w-full absolute top-0 right-[-3rem] md:hidden bg-greyDark p-4 rounded-lg shadow-sm shadow-gray-500 mobile ${
        isOpen ? 'open' : ''
      }`}
    >
      <ul className="mt-20 text-center flex flex-col gap-5">
        <li className="text-4xl hover:text-accent cursor-pointer">
          <Link to="home" spy={true} offset={-75} duration={500} smooth={true}>
            HOME
          </Link>
        </li>
        <li className="text-4xl hover:text-accent cursor-pointer">
          <Link
            to="projects"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}
          >
            PROJECTS
          </Link>
        </li>
        <a
          href="https://resume.creddle.io/resume/20aimu9xvnb"
          target="_blank"
          rel="noreferrer noopener"
        >
          <li className="text-4xl hover:text-accent cursor-pointer">RESUME</li>
        </a>
        <li className="text-4xl hover:text-accent cursor-pointer">
          <Link to="contact" offset={-75} duration={500} smooth={true}>
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="mt-8">
        <h2 className="text-center">FOLLOW ME ON</h2>
      </div>
      <div className="flex mt-8 mb-5 mx-10 gap-5 justify-center">
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>
        <a
          href={socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaInstagram />
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );

  return (
    <nav className="sticky top-0 w-full h-24 bg-greyDark text-greyLight px-4 md:px-14 z-10">
      <div className="flex h-full justify-between items-center border-b border-b-gray-600">
        <div className="flex gap-1 items-center justify-center">
          <span className="flex justify-center items-center bg-black rounded-full text-2xl text-accent w-10 h-10">
            <FaCode />
          </span>
          <h3 className="font-bold text-gray-400">CHRISBELL</h3>
        </div>
        {burgerMenu}
        {desktopMenu}
        {mobile}
      </div>
    </nav>
  );
}

export default Navbar;
