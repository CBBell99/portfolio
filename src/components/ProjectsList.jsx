import React from 'react';
import ProjectListItem from './ProjectListItem';

function Projects() {
  return (
    <section id="projects" className="mt-10 mx-5">
      <h2 className="text-greyLight text-2xl text-center">PROJECTS</h2>
      <div className="md:grid md:grid-cols-2 gap-5">
        <ProjectListItem />
      </div>
    </section>
  );
}
export default Projects;
