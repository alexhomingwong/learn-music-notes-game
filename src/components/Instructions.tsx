import React from "react";
import styled from "styled-components";

const StyledInstructions = styled.div`
  font-size: 1rem;
  font-style: italic;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Instructions = () => {
  return (
    <StyledInstructions>
      Guess the note by pressing the key on your keyboard
    </StyledInstructions>
  );
};
