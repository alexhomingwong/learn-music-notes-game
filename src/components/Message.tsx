import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

interface IProps {
  correct?: boolean;
  streak: number;
}

const FailedMessages = ["Unlucky.", "Better luck next time.", "Try again."];

const SuccessMessages = [
  ["Nice.", "Good job.", "Correct.", "That's right."],
  ["Keep going.", "You got it.", "You're getting it."],
  ["Superb!", "Excellent!", "Hot streak!", "You're a pro!"],
];

export const Message = (props: IProps) => {
  const getMessageStreak = () => {
    if (props.streak < 5) {
      return SuccessMessages[0][
        Math.floor(Math.random() * SuccessMessages[0].length)
      ];
    } else if (props.streak < 15) {
      return SuccessMessages[1][
        Math.floor(Math.random() * SuccessMessages[1].length)
      ];
    } else {
      return SuccessMessages[2][
        Math.floor(Math.random() * SuccessMessages[2].length)
      ];
    }
  };

  return (
    <StyledMessage>
      {props.correct === undefined
        ? ""
        : props.correct
        ? getMessageStreak()
        : FailedMessages[Math.floor(Math.random() * FailedMessages.length)]}
    </StyledMessage>
  );
};
