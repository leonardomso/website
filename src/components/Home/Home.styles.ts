import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 30px;
  align-self: center;
  justify-self: center;
`;

export const HomeTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: calc(64px + (48 - 64) * ((100vw - 300px) / (1600 - 300)));
  line-height: 87px;
  letter-spacing: -0.03em;
  color: #000000;
`;

export const HomeSubTitlesContainer = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 10px;
`;

export const HomeSubTitle = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: calc(24px + (16 - 24) * ((100vw - 300px) / (1600 - 300)));
  line-height: 45px;
  letter-spacing: -0.03em;
  color: #000000;
`;
