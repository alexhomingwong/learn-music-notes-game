import React from "react";
import styled from "styled-components";
import { SheetLine } from "./SheetLine";
import { Note } from "./Note";

const StyledMusicSheet = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 0 1rem;
  position: relative;
`;

interface IProps {
  index: number;
}
interface IState {
  gapHeight: number;
}

export class MusicSheet extends React.Component<IProps, IState> {
  intervals = 10.5;

  renderLines = () => {
    const lines = [];
    const MAX_LINES = 10;
    for (let i = 0; i <= MAX_LINES; i++) {
      lines.push(
        <SheetLine
          key={i}
          hide={i < MAX_LINES / 2 - 2 || i > MAX_LINES / 2 + 2}
        />
      );
    }
    return lines;
  };

  render = () => {
    return (
      <StyledMusicSheet>
        {this.renderLines()}
        <Note yPosition={this.intervals * this.props.index} />
      </StyledMusicSheet>
    );
  };
}
