import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Professional Chef.",
      "Full Stack Web Developer.",
      "friend.",
      "Full Stack Web Developer.",
    ],
    loop: false,
  });

  return (
    <section id="home" className="pt-10 px-5">
      <div>
        <h1 className=" text-3xl sm:text-6xl  text-greyLight font-bold font-titleText ">
          Hi, I'm <span className="text-accent">Chris </span>and I'm a
          <span> {text}</span>
          <Cursor cursorColor="#ff014f" />
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
    </section>
  );
}

export default Home;
