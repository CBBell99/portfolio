import { FiMenu } from "react-icons/fi";
import cbell from "../images/chrisProfilePic.jpg";

function Navbar() {
  return (
    <nav className=" h-24 bg-customGrey">
      <div className="flex w-screen justify-between items-center">
        <div className="flex content-center">
          <img className="rounded-full h-16" src={cbell} alt="" />
          <h3 className="text-lightText">Chris Bell</h3>
        </div>
        <FiMenu className="text-lightText text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;
