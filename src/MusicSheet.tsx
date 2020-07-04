import React from "react";
import styled from "styled-components";
import { SheetLines } from "./SheetLines";

const StyledMusicSheet = styled.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
  padding: 1rem;
`;

export const MusicSheet: React.FC = (props) => {
  return (
    <StyledMusicSheet>
      <SheetLines />
      {props.children}
    </StyledMusicSheet>
  );
};
