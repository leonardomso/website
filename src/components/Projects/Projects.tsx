import React from "react";

import { ProjectsContainer, ProjectsTitle } from "./Projects.styles";

import Item from "src/components/Item/Item";

import projects from "src/data/projects";

const Projects = () => (
  <ProjectsContainer>
    <ProjectsTitle>Projects</ProjectsTitle>
    {projects.map(({ date, title, description, link }) => (
      <Item
        key={date}
        date={date}
        title={title}
        description={description}
        link={link}
      />
    ))}
  </ProjectsContainer>
);

export default Projects;
