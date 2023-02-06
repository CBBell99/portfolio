import React from 'react';
import { projects } from '../constants';
import { FaGithub } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl';

function ProjectListItem() {
  return projects.map((project) => {
    return (
      <div className="w-full bg-black my-5 bg-opacity-25 rounded-lg">
        <div className="relative overflow-hidden z-1">
          <img
            className="h-full w-full mx-auto p-5 rounded-2xl hover:scale-110 duration-300 "
            src={project.img}
            alt=""
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-accent pl-5">{project.name.toUpperCase()}</h3>
          <div className="flex gap-3 pr-5">
            <a
              href={project.code}
              className="flex justify-center items-center bg-black rounded-full text-2xl text-greyLight w-10 h-10 hover:text-accent hover:scale-110 duration-300"
            >
              <FaGithub />
            </a>
            {project.liveSite ? (
              <a
                href={project.liveSite}
                className="flex justify-center items-center bg-black rounded-full text-2xl text-greyLight w-10 h-10 hover:text-accent hover:scale-110 duration-300"
              >
                <SlGlobe />
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
        <p
          className="text-greyLight text-sm pb-3
        m-5"
        >
          {project.description}
        </p>
      </div>
    );
  });
}

export default ProjectListItem;
