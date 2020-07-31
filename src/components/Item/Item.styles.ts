import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const ItemContainer = styled.div<StyleProps>`
  width: 100%;
  height: min-content;
  max-height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 10px;
  align-items: center;
  justify-content: flex-start;
  border: ${({ theme }) => `1px solid ${theme.lightGray}`};
  border-radius: 5px;
  padding: 20px;
`;

export const ItemDate = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #b7b7b7;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`;

export const ItemTitle = styled.a<StyleProps>`
  width: 100%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ItemDescription = styled.p<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: ${({ theme }) => theme.darkGray};
  grid-row: 3 / 4;
  grid-column: 1 / 2;
`;
