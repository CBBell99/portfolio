import React from 'react';
import { projects } from '../constants';
import { FaGithub } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl';

function ProjectListItem() {
  console.log(projects);
  return projects.map((project) => {
    return (
      <div>
        <img src={project.img} alt="" />
        <div>
          <h3>{project.name}</h3>
          <FaGithub />
          <SlGlobe />
        </div>
        <p></p>
      </div>
    );
  });
}

export default ProjectListItem;
