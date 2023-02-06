import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { socials } from '../constants';

import cbell from '../images/chrisProfilePic.jpg';

function Home() {
  const [text] = useTypewriter({
    words: [
      'Professional Chef.',
      'Full Stack Web Developer.',
      'friend.',
      'Full Stack Web Developer.',
    ],
    loop: 1,
  });

  return (
    <section id="home" className="pt-10 px-5">
      <div className="flex justify-center">
        <h1 className=" text-3xl sm:text-6xl  text-greyLight font-bold font-titleText max-w-4xl">
          Hi, I'm <span className="text-accent">Chris </span>and I'm a
          <span> {text}</span>
          <Cursor cursorBlinking="false" cursorColor="#ff014f" />
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="pt-5 text-greyLight max-w-4xl">
          I am a <b>Full Stack Web Developer</b> transitioning from a career as
          a chef with a passion for creating innovative and visually appealing
          digital experiences. I've always had a passion for technology and
          decided to take a leap of faith and make a career change. I graduated
          from Lighthouse Labs in 2022, where I went through an intensive and
          fast-paced training program for 12 weeks.
        </p>
      </div>
      <div className="max-h- flex justify-center rounded-full overflow-hidden mt-10">
        <img src={cbell} alt="" className="max-h-full max-w-full" />
      </div>
      <div className="mt-10">
        <h2 className="text-greyLight">LET'S GET IN TOUCH</h2>
        <div className="flex gap-4 mt-10 ">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaGithub />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaInstagram />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
