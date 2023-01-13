import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl">Chris Bell</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="https://resume.creddle.io/resume/20aimu9xvnb"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;