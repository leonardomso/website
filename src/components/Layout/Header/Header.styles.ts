import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 800px;
  height: fit-content;
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 799px) {
    justify-content: start;
  }
`;
