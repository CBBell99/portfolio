import { FiMenu } from "react-icons/fi";
import cbell from "../images/chrisProfilePic.jpg";

function Navbar() {
  return (
    <nav className="w-screen h-24 bg-customGrey flex">
      <div className="w-screen flex bg-customGrey">
        <img className="rounded-full h-16" src={cbell} alt="" />
        <h3 className="text-lightText">Chris Bell</h3>
      </div>
      <FiMenu className="text-lightText" />
    </nav>
  );
}

export default Navbar;
