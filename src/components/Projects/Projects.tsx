import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { ProjectsContainer, ProjectsTitle } from "./Projects.styles";

import Item from "src/components/Item/Item";

import projects from "src/data/projects";

const Projects = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
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
  </Scrollbars>
);

export default Projects;
