import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ project, image }) {
  const isLeft = project.layout === "left";

  return (
    <div
      className={`relative mt-[10%] flex ${
        isLeft ? "" : "flex-row-reverse"
      } max-[767px]:text-left`}
    >
      {/* Image */}
      <div
        className={`relative cursor-pointer ${
          isLeft ? "" : ""
        } hover:before:delay-100 hover:before:duration-100 before:content-[''] before:block before:w-[100%] before:h-[100%] 
          before:absolute before:bg-[#0a272f] before:opacity-50 before:z-[3] before:rounded-md hover:before:hidden before:transition-all max-[767px]:absolute max-[767px]:before:bg-[--green/50]`}
      >
        <a href={project.link} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt={project.title}
            className="rounded-md xl:w-[720px] h-auto lg:w-[500px] md:w-[400px] max-[767px]:min-h-[300px]"
          />
        </a>
      </div>

      {/* Content */}
      <div
        className={`absolute z-30 ${
          isLeft ? "right-0 text-right" : "left-0"
        } w-[55%] xl:top-20 lg:top-5 md:top-[-20px] md:w-[75%] max-[767px]:static max-[767px]:w-full max-[767px]:p-5 max-[767px]:bg-[#0a192fe8] max-[767px]:min-h-[300px] max-[767px]:shadow-lg`}
      >
        <a href={project.link} target="_blank" rel="noreferrer">
          <p className="font-mono text-[--green] text-base mb-2">
            Featured Project
          </p>
          <h3 className="font-semibold text-white/90 text-xl">
            {project.title}
          </h3>
          <div
            className={`bg-[--light-navy] rounded-sm py-6 px-7 my-5 max-[767px]:bg-transparent max-[767px]:p-0 w-[70%] ${
              isLeft ? "float-right " : ""
            } hover:shadow-lg`}
          >
            <div
              className="text-white/50"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></div>
          </div>
          <ul
            className={`flex gap-5 text-[--green] font-mono ${
              isLeft ? "float-right mr-5" : "ml-5"
            } max-[767px]:float-none flex-wrap`}
          >
            {project.tech.map((t, i) => (
              <li key={i} className="text-sm">
                {t}
              </li>
            ))}
          </ul>
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
