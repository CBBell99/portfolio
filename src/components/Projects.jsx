import { projects } from "../constants";

function Project() {
  return (
    <>
      {projects.map((project) => (
        <div className="grid-cols-1">
          <h3>{project.name}</h3>
          <img src="" alt="" />
          {!project.livesite ? <></> : <button>LiveSite</button>}
          <button>code</button>
        </div>
      ))}
    </>
  );
}

export default Project;
