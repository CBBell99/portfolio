import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import cbell from "../images/chrisProfilePic.jpg";

function Navbar() {

  const [showMobileMenu, setShowMobileMenu] = useState();

  return (
    <nav className="w-full h-24 bg-customGrey text-lightText px-4">
      <div className="flex h-full justify-between items-center border-b border-b-gray-600">
        <div className="flex items-center">
          <img className="rounded-full border mx-2 h-16" src={cbell} alt="" />
          <h3 className="text-gray-400">CHRISBELL</h3>
        </div>
        <span className="sm:hidden text-xl text-accent bg-black w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer">
          <FiMenu />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
