import React from "react";
import styled from "styled-components";

interface ISheetLine {
  hide: boolean;
}

const SheetLine = styled.line<ISheetLine>`
  stroke: rgb(0, 0, 0);
  stroke-width: 1px;
  stroke: "black";
  opacity: ${({ hide }) => (hide ? "0.1" : "1")};
`;

const renderSheetLines = () => {
  const sheetLines = [];
  const GAP_NUMBERS = 4;
  const interval = 100 / GAP_NUMBERS;
  const middleLine = Math.ceil(GAP_NUMBERS / 2);

  for (let i = 0; i <= GAP_NUMBERS; i++) {
    const yPosition = `${interval * i}%`;
    const isOuterLines = i < middleLine - 2 || i > middleLine + 2;

    sheetLines.push(
      <SheetLine
        key={yPosition}
        x1="0%"
        x2="100%"
        y1={yPosition}
        y2={yPosition}
        hide={isOuterLines}
      />
    );
  }

  return sheetLines;
};

export const SheetLines = () => {
  return <>{renderSheetLines()}</>;
};
