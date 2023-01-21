import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: [
      " a Chef.",
      "a Full Stack Web Developer.",
      "a friend.",
      "a Full Stack Web Developer.",
    ],
    loop: false,
  });

  return (
    <div className="pt-10 px-5">
      <h1 className="text-6xl text-lightText font-bold font-titleText">
        Hi, I'm <span className="text-accent">Chris </span>and I'm
        <span> {text}</span>
        <Cursor cursorColor="#ff014f" />
      </h1>
      <p></p>
    </div>
  );
}

export default Home;
