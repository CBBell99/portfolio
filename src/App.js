import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import cbell from "./images/chrisProfilePic.jpg";

import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="bg-white px-10 ">
      <section className="min-h-screen">
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
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Chris Bell
          </h2>
          <h3 className="text-2xl py-2">Full-Stack Web Developer</h3>
          <p className="text-medium py-5 leading-8 text-gray-800">
            Hi I'm Chris. I build full stack web apps that you will love to use.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillInstagram />
          <a href="https://github.com/CBBell99">
            <AiFillGithub className="" />
          </a>
        </div>
        <div className="relative mx-auto  mt-20  w-80 h-80 flex rounded-full justify-center align-center">
          <img className="rounded-full" src={cbell} alt="" />
        </div>
      </section>
      <Skills />
    </div>
  );
}

export default App;
