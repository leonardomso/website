import styled from "@emotion/styled";

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 700px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 20px;
  align-self: flex-start;
  justify-self: center;
`;

export const ContactTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: calc(64px + (48 - 64) * ((100vw - 300px) / (1600 - 300)));
  line-height: 87px;
  letter-spacing: -0.03em;
  color: #101010;
`;

export const ContactText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: calc(18px + (14 - 18) * ((100vw - 300px) / (1600 - 300)));
  line-height: 30px;
  letter-spacing: -0.03em;
  color: #101010;
`;

export const ContactLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.03em;
  color: #101010;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
