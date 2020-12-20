import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  width: auto;
  max-width: 1024px;
  justify-self: center;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
`;
