import { skillsList } from "../constants";

function Skills() {
  return (
    <section>
      <div className="text-center">
        <h3 className="text-3xl py-1">Skills</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Languages, Libraries, Frameworks and Tools
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  items-center">
        {skillsList.map((skill) => (
          <div className="mt-10 mx-auto" key={skill.name}>
            <img width={100} src={skill.src} alt="" />
            <h5 className="text-center mt-4">{skill.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
