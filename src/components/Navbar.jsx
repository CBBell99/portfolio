import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import cbell from "../images/chrisProfilePic.jpg";

function Navbar() {
  return (
    <nav className="w-full h-24 bg-customGrey text-lightText px-4">
      <div className="flex h-full justify-between items-center border-b border-b-gray500">
        <div className="flex items-center">
          <img className="rounded-full border mx-2 h-16" src={cbell} alt="" />
          <h3 className="text-blue">Chris Bell</h3>
        </div>
        <span className="text-xl text-accent bg-black w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer">
          <FiMenu className="" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
