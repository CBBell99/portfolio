import { useState } from "react";
import { FaBars, FaCode } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuHandler = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
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

  const mobile = (
    <div
      className="w-[80%] h-screen absolute top-0 right-0 bg-black
     p-4 opacity-100"
    >
      <span className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer">
        <MdClose onClick={mobileMenuHandler} />
      </span>
    </div>
  );

  return (
    <nav className="sticky w-full h-24 bg-greyDark text-greyLight px-4">
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
