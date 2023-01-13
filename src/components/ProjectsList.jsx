import { projects } from "../constants";

function ProjectsList() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 mt-5 text-center">Projects</h3>
        <div className="mt-3 grid gap-10 grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <div className="mt-5 shadow shadow-slate-200" key={project.name}>
              <h3>{project.name}</h3>
              <img src={project.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsList;
