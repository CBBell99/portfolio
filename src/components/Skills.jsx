import React from "react";

function Skills() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1">Skills</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Languages, Libraries, Frameworks and Tools
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            alt="JavaScript"
          />
          <h5>JavaScript</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg"
            alt="Ruby"
          />
          <h5>Ruby</h5>
        </div>
        <div className="mt-10 mx-auto ">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
            alt="CSS"
          />
          <h5 className="text-center">CSS</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="TailwindCSS"
          />
          <h5>TailwindCSS</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
            alt="Node.JS"
          />
          <h5>Node.JS</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="React.JS"
          />
          <h5>React.JS</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
            alt="PostgreSQL"
          />
          <h5>PostgreSQL</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
            alt="Git"
          />
          <h5>Git</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            alt="Express"
          />
          <h5>Express</h5>
        </div>
      </div>
    </section>
  );
}

export default Skills;
