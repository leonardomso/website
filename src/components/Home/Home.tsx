import React from "react";

import {
  HomeContainer,
  HomeTitle,
  HomeSubTitlesContainer,
  HomeSubTitle,
} from "./Home.styles";

const Home = () => (
  <HomeContainer>
    <HomeTitle>Leonardo Maldonado</HomeTitle>

    <HomeSubTitlesContainer>
      <HomeSubTitle>Software Engineer</HomeSubTitle>
      <HomeSubTitle>Focused on build web experiences</HomeSubTitle>
      <HomeSubTitle>Using modern technologies</HomeSubTitle>
    </HomeSubTitlesContainer>
  </HomeContainer>
);

export default Home;
