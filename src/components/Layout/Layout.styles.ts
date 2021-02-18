import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LayoutInnerContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 80px;
`;
