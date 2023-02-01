import React from 'react';
import { projects } from '../constants';
import { FaGithub } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl';

function ProjectListItem() {
  return projects.map((project) => {
    return (
      <div className="w-full bg-black my-5 bg-opacity-25 rounded-lg ">
        <div>
          <img
            className="mx-auto p-5 rounded-2xl group-hover:scale-125 duration-300"
            src={project.img}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-accent pl-5">{project.name.toUpperCase()}</h3>
          <FaGithub />
          <SlGlobe />
        </div>
        <p className="text-greyLight text-sm">{project.description}</p>
      </div>
    );
  });
}

export default ProjectListItem;
