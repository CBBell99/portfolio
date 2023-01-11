import { projects } from "../constants";

function Project() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 mt-5 text-center">Projects</h3>
        {projects.map((project) => (
          <div className="grid-cols-1 mb-3" key={project.name}>
            <h3>{project.name}</h3>
            <img src={project.img} alt="" />
            {/* change below code */}
            {project.liveSite !== "" ? (
              <div className="flex justify-start p-2">
                <a href={project.code}>code</a>
                <a href={project.liveSite}>live site</a>
              </div>
            ) : (
              <div className="">
                <a href={project.code}>code</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
