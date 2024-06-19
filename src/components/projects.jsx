import React from "react";
import { PROJECTS } from "../constants";

const projects = () => {
  return (
    <div name="Projects" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap md:justify-center">
            <div className=" ml-12 w-1/3 md:w-1/6 shadow-md shadow-gray-600 rounded-lg">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="w-full h-auto"
              />
              <div className=" bg-zinc-800 h-8 flex justify-between items-center">
                <button
                  className="w-1/4 pt-1 ml-8 bg-zinc-700 rounded-lg hover:shadow-black hover:shadow-inner"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  Demo
                </button>
                <button className="w-1/4 pt-1 mr-8 bg-zinc-700 rounded-lg hover:shadow-black hover:shadow-inner">
                  Code
                </button>
              </div>
            </div>
            {/* NOW THE DIV FOR THE TEXT BESIDES */}
            <div className="w-full max-w-xl md:w-3/4 pl-12 md:pl-24 pt-4 pb-8 md:pt-0 md:pb-0">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
