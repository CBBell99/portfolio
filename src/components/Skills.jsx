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

function Skills() {
  return (
    <section className="mx-5">
      <h2 className="pt-10 px-5 text-greyLight">SKILLS</h2>
      <div className="grid grid-cols-4 gap-5 mt-10">
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
  );
}

export default Skills;
