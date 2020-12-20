import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1024px;
  justify-self: center;
  height: 70px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  align-items: center;
`;

export const HeaderNameContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const HeaderLinksContainer = styled.div`
  display: none;

  @media screen and (min-width: 700px) {
    width: 100%;
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: repeat(5, max-content);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const HeaderLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.03em;
  color: #101010;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderSwitchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;
