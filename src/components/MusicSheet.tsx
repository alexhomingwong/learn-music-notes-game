import React from "react";
import styled from "styled-components";
import { SheetLine } from "./SheetLine";
import { Note } from "./Note";
import Treble from "../assets/icons/trebleClef.svg";
import Bass from "../assets/icons/bassClef.svg";

const StyledMusicSheet = styled.div`
  width: 60%;
  margin: 1rem;
  padding: 0 1rem;
  position: relative;
`;

const TrebleClef = styled.img`
  width: 100%;
`;

const BassClef = styled.img`
  width: 60%;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  top: 50%;
  width: 100px;
  transform: translateY(-50%);
  left: 20%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IProps {
  index: number;
  clefType: "treble" | "bass";
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
          lineIndex={i}
          noteIndex={this.props.index}
          defaultLines={i <= MAX_LINES / 2 + 2 && i >= MAX_LINES / 2 - 2}
        />
      );
    }
    return lines;
  };

  render = () => {
    return (
      <StyledMusicSheet>
        <ImageWrapper>
          {this.props.clefType === "treble" ? (
            <TrebleClef src={Treble} />
          ) : (
            <BassClef src={Bass} />
          )}
        </ImageWrapper>
        {this.renderLines()}
        <Note yPosition={this.intervals * this.props.index} />
      </StyledMusicSheet>
    );
  };
}
