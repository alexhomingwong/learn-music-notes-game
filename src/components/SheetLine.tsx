import React from "react";
import styled from "styled-components";

interface ISheetLine {
  defaultLines: boolean;
  showLine: boolean;
}

const StyledSheetLine = styled.hr<ISheetLine>`
  border: none;
  border-bottom: 1px solid black;
  margin: 0 auto 20px;
  padding: 0;
  width: ${({ defaultLines }) => (defaultLines ? "100%" : "60px")};
  opacity: ${({ defaultLines, showLine }) =>
    defaultLines || showLine ? "1" : "0"};
`;

interface IProps {
  defaultLines: boolean;
  lineIndex: number;
  noteIndex: number;
}

export const SheetLine = (props: IProps) => {
  const { defaultLines, noteIndex, lineIndex } = props;
  let showLine = false;
  if (!defaultLines) {
    if (noteIndex < 4 && noteIndex / 2 < lineIndex && lineIndex < 3) {
      showLine = true;
    }
    if (noteIndex > 14 && (noteIndex + 1) / 2 >= lineIndex && lineIndex > 7) {
      showLine = true;
    }
  }
  return <StyledSheetLine defaultLines={defaultLines} showLine={showLine} />;
};
