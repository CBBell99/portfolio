import { useState } from "react";
import {
  FaBars,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const burgerMenu = (
    <span
      onClick={mobileMenuHandler}
      className="md:hidden absolute top-7 right-4 text-xl  text-accent bg-black w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer"
    >
      <FaBars />
    </span>
  );

  // fullscreen nav
  const desktopMenu = (
    <ul className="md:flex hidden gap-6 md:gap-10">
      <li className="hover:text-accent cursor-pointer">Home</li>
      <li className="hover:text-accent cursor-pointer">Projects</li>
      <a href="https://resume.creddle.io/resume/20aimu9xvnb">
        <li className="hover:text-accent cursor-pointer">Resume</li>
      </a>
      <li className="hover:text-accent cursor-pointer">Contact</li>
    </ul>
  );

  // mobile menu
  const mobile = (
    <div
      className="w-[40%] min-h-[400px] absolute top-3 right-1 bg-black
     p-4 z-10 rounded-lg"
    >
      <div className="w-full text-gray-400 hover:text-designColor text-4xl cursor-pointer flex justify-end">
        <span className="" onClick={mobileMenuHandler}>
          <MdClose />
        </span>
      </div>
      <div className="flex justify-end my-5">
        <ul className="flex flex-col gap-5">
          <a href="#home">
            <li className="text-2xl">Home</li>
          </a>
          <li className="text-2xl">Projects</li>
          <a
            href="https://resume.creddle.io/resume/20aimu9xvnb"
            target="_blank"
            rel="noreferrer"
          >
            <li className="text-2xl">Resume</li>
          </a>
          <li className="text-2xl">Contact</li>
        </ul>
      </div>
      <div className="flex justify-between mt">
        <FaGithub />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </div>
  );

  return (
    <nav className="sticky top-0 w-full h-24 bg-greyDark text-greyLight px-4 z-10">
      <div className="flex h-full justify-between items-center border-b border-b-gray-600">
        <div className="flex gap-1 items-center justify-center">
          <span className="flex justify-center items-center bg-black rounded-full text-2xl text-accent w-10 h-10">
            <FaCode />
          </span>
          <h3 className="font-bold text-gray-400">CHRISBELL</h3>
        </div>
        {burgerMenu}
        {desktopMenu}
        {isOpen && mobile}
      </div>
    </nav>
  );
}

export default Navbar;
