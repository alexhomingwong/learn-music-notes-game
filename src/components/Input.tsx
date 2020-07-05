import React from "react";

interface IProps {
  checkInputToNote: (event: React.ChangeEvent<HTMLInputElement>) => void;
  answer: string;
}

export const Input = (props: IProps) => {
  return (
    <input type="text" onChange={props.checkInputToNote} value={props.answer} />
  );
};
