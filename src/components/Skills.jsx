import skillsList from "../constants";

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
        {skillsList.map((skill) => (
          <div className="mt-10 mx-auto" key={skill.skill}>
            <img width={100} src={skill.src} alt="" />
            <h5 className="text-center mt-4">{skill.skill}</h5>
          </div>
        ))}
        {/* 
          <h5 className="text-center mt-4">CSS</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="TailwindCSS"
          />
          <h5 className="text-center">TailwindCSS</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
            alt="Node.JS"
          />
          <h5 className="text-center">Node.JS</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="React.JS"
          />
          <h5 className="text-center">React.JS</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
            alt="PostgreSQL"
          />
          <h5 className="text-center">PostgreSQL</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src=
            alt="Git"
          />
          <h5 className="text-center">Git</h5>
        </div>
        <div className="mt-10 mx-auto">
          <img
            width={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            alt="Express"
          />
          <h5 className="text-center">Express</h5>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
