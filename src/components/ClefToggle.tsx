import React from "react";
import styled from "styled-components";

interface IButton {
  active: boolean;
}

const Button = styled.button<IButton>`
  border: none;
  font-family: "Josefin Slab", serif;
  font-weight: 700;
  background-color: transparent;
  outline: none;
  padding: 0.25rem 1rem;
  background-color: ${({ active }) => (active ? "black" : "transparent")};
  color: ${({ active }) => (active ? "white" : "black")};
  :hover {
    cursor: ${({ active }) => (active ? "default" : "pointer")};
  }
`;

const ButtonGroup = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
`;

interface IProps {
  activeClef: "treble" | "bass";
  switchClefType: (clefType: "treble" | "bass") => () => void;
}

export const ClefToggle = (props: IProps) => {
  return (
    <Container>
      <ButtonGroup>
        <Button
          onClick={props.switchClefType("treble")}
          active={props.activeClef === "treble"}
        >
          Treble
        </Button>
        <Button
          onClick={props.switchClefType("bass")}
          active={props.activeClef === "bass"}
        >
          Bass
        </Button>
      </ButtonGroup>
    </Container>
  );
};
