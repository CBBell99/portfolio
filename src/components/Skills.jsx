import React from 'react';
import {
  SiJavascript,
  SiCss3,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiPython,
  SiFirebase,
  SiJest,
  SiCypress,
  SiRuby,
  SiRubyonrails,
  SiTailwindcss,
  SiReact,
} from 'react-icons/si';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { socials } from '../constants';

function Skills() {
  return (
    <section>
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
      <section>
        <h2 className="pt-10  text-greyLight">SKILLS</h2>
        <div className="grid grid-cols-4 md:grid-cols-3 gap-4 mt-10">
          <span className="icon">
            <SiJavascript />
          </span>
          <span className="icon">
            <SiReact />
          </span>
          <span className="icon">
            <SiCss3 />
          </span>
          <span className="icon">
            <SiPostgresql />
          </span>
          <span className="icon">
            <SiExpress />
          </span>
          <span className="icon">
            <SiNodedotjs />
          </span>
          <span className="icon">
            <SiRuby />
          </span>
          <span className="icon">
            <SiRubyonrails />
          </span>
          <span className="icon">
            <SiPython />
          </span>
          <span className="icon">
            <SiTailwindcss />
          </span>
          <span className="icon">
            <SiFirebase />
          </span>
          <span className="icon">
            <SiCypress />
          </span>
          <span className="icon">
            <SiJest />
          </span>
        </div>
      </section>
    </section>
  );
}

export default Skills;
