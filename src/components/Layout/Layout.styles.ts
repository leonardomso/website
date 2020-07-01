import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const LayoutContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr 70px;
  grid-row-gap: 50px;
  background: ${({ theme }) => theme.secondary};
  padding: 10px 30px 10px 30px;
`;
