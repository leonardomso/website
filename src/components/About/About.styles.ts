import styled from "@emotion/styled";

export const AboutContainer = styled.div`
  width: auto;
  max-width: 700px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 20px;
  align-self: flex-start;
  justify-self: center;
`;

export const AboutTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: calc(64px + (48 - 64) * ((100vw - 300px) / (1600 - 300)));
  line-height: 87px;
  letter-spacing: -0.03em;
  color: #000000;
`;

export const AboutText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: calc(18px + (14 - 18) * ((100vw - 300px) / (1600 - 300)));
  line-height: 30px;
  letter-spacing: -0.03em;
  color: #000000;
`;
