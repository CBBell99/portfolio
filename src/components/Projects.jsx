import { projects } from "../constants";

function Project() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 mt-5 text-center">Projects</h3>
        {projects.map((project) => (
          <div className="grid-cols-1" key={project.name}>
            <h3>{project.name}</h3>
            <img src="" alt="" />
            {!project.livesite ? <></> : <button>LiveSite</button>}
            <a href={project.code}>code</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
