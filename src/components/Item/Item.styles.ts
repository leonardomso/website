import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  width: 100%;
  height: min-content;
  max-height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 10px;
  align-items: center;
  justify-content: flex-start;
  border: #f3f3f3;
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

export const ItemTitle = styled.a`
  width: 100%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.03em;
  color: #101010;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ItemDescription = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: #6f6f6f;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
`;
