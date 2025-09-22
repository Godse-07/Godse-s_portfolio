"use client";

import React from "react";
import Image from "next/image";
import ProjectCardProps from "../types/project-card";

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectLogo,
  projectName,
  projectDescription,
  projectSoureceCode,
  projectLiveLink,
  projectTechStack,
}) => {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className="bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl hover:shadow-2xl transition-all duration-300 w-4/5 p-6 flex flex-col gap-4">
        {/* Image and Project Name */}
        <div className="flex items-center justify-center gap-4">
          {projectLogo && (
            <Image
              src={projectLogo}
              alt={projectName}
              className="object-contain rounded-lg"
              width={30}
              height={30}
            />
          )}
          <h2 className="text-2xl font-semibold text-[#f3de8a]">
            {projectName}
          </h2>
        </div>

        {/* Project Description */}
        <p className="text-gray-300">{projectDescription}</p>

        {/* Source Code & Live Link */}
        <div className="flex gap-4 justify-center items-center">
          {projectSoureceCode && (
            <a
              href={projectSoureceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Source Code
            </a>
          )}
          {projectLiveLink && (
            <a
              href={projectLiveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Live Demo
            </a>
          )}
        </div>

        <div>
          {/* Tech Stack */}
          {projectTechStack && projectTechStack.length > 0 && (
            <div className="text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-[#f3de8a] text-xl">Tech Stack</span>:
              </p>
              <div className="flex items-center gap-3 mt-2">
                {projectTechStack.map((tech, index) => (
                  <Image
                    key={index}
                    src={tech}
                    alt={`tech-${index}`}
                    className=" h-10 w-10"
                    width={32}
                    height={32}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
