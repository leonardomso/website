import React from "react";

import { AboutContainer, AboutTitle, AboutText } from "./About.styles";

const About = () => (
  <AboutContainer>
    <AboutTitle>About</AboutTitle>

    <AboutText>
      Software Engineer living in Franca, São Paulo, Brazil. Graduated in
      Computer Science at the University of Franca (Unifran).
      <br />
      <br />
      Creator of the "33 Concepts Every JavaScript Developer Should Know"
      project, a project that helps developers to master their concepts and get
      better in JavaScript.
      <br />
      <br />
      Author of more than 30 articles about various topics such as JavaScript,
      React, Jest, Redux, GraphQL, etc. Currently writing for two different blog
      sites. Love open source code, doing and working to create more content and
      help people.
    </AboutText>
  </AboutContainer>
);

export default About;
