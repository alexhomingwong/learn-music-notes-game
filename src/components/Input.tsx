import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  text-align: center;
`;
interface IProps {
  checkInputToNote: (event: React.ChangeEvent<HTMLInputElement>) => void;
  answer: string;
}

export const Input = (props: IProps) => {
  return (
    <StyledInput
      type="text"
      onChange={props.checkInputToNote}
      value={props.answer}
      onFocus={(event) => {
        event.currentTarget.select();
      }}
    />
  );
};
