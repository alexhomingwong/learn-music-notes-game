import React from "react";
import styled from "styled-components";

const MusicSheet = styled.svg`
  width: 100%;
`;

export const Sheet = () => {
  return (
    <MusicSheet>
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        style={{ stroke: "rgb(255, 0, 0)", strokeWidth: 2 }}
      />
    </MusicSheet>
  );
};
