import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import cbell from "../images/chrisProfilePic.jpg";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState();

  const mobileMenu = (
    <span className="md:hidden absolute top-7 right-4 text-xl  text-accent bg-black w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer">
      <FiMenu />
    </span>
  );

  const desktopMenu = (
    <ul className="md:flex hidden gap-6">
      <li className="hover:text-accent cursor-pointer">Home</li>
      <li className="hover:text-accent cursor-pointer">Projects</li>
      <li className="hover:text-accent cursor-pointer">Resume</li>
      <li className="hover:text-accent cursor-pointer">Contact</li>
    </ul>
  );

  if (window.innerWidth < 769) {
  }

  return (
    <nav className="w-full h-24 bg-customGrey text-lightText px-4">
      <div className="flex h-full justify-between items-center border-b border-b-gray-600">
        <div className="flex items-center">
          <img className="rounded-full border mx-2 h-16" src={cbell} alt="" />
          <h3 className="text-gray-400">CHRISBELL</h3>
        </div>
        {mobileMenu}
        {desktopMenu}
      </div>
    </nav>
  );
}

export default Navbar;
