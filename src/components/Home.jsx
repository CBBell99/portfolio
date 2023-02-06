import { useTypewriter, Cursor } from 'react-simple-typewriter';

import Skills from './Skills';
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
        <h1 className=" text-3xl sm:text-6xl  text-greyLight font-bold font-titleText ">
          Hi, I'm <span className="text-accent">Chris </span>and I'm a
          <span> {text}</span>
          <Cursor cursorBlinking="false" cursorColor="#ff014f" />
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="pt-5 text-greyLight max-w-5xl">
          I am a <b>Full Stack Web Developer</b> transitioning from a career as
          a chef with a passion for creating innovative and visually appealing
          digital experiences. I've always had a passion for technology and
          decided to take a leap of faith and make a career change. I graduated
          from Lighthouse Labs in 2022, where I went through an intensive and
          fast-paced training program for 12 weeks.
        </p>
      </div>
      <div className="md:flex md:flex-row-reverse justify-between">
        <div className="flex justify-center items-center mt-10 md:object-contain">
          <img src={cbell} alt="" className="profile rounded-full " />
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default Home;
