import React from "react";
import styled from "styled-components";

interface ISheetLine {
  hide: boolean;
}

const StyledSheetLine = styled.hr<ISheetLine>`
  border: none;
  border-bottom: 1px solid black;
  margin: 0 0 20px;
  padding: 0;
  opacity: ${({ hide }) => (hide ? "0.3" : "1")};
`;

interface IProps extends Partial<ISheetLine> {}

export const SheetLine = (props: IProps) => {
  const { hide = true } = props;
  return <StyledSheetLine hide={hide} />;
};
