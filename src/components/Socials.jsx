import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

function Socials() {
  return (
    <div className="text-5xl flex justify-center gap-12 py-3 text-gray-600">
      <a href="https://twitter.com/Humperpump">
        <AiFillTwitterCircle />
      </a>
      <a href="https://www.linkedin.com/in/chrisbeckertonbell/">
        <AiFillLinkedin />
      </a>
      <a href="https://www.instagram.com/humperpump/">
        <AiFillInstagram />
      </a>
      <a href="https://github.com/CBBell99">
        <AiFillGithub className="" />
      </a>
    </div>
  );
}

export default Socials;
