import React from "react";
import styled from "styled-components";

interface IProps {
  streak: number;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 1rem 2rem;
  align-items: flex-end;
  max-width: 1200px;
`;
const StreakMessage = styled.div`
  font-size: 1rem;
  font-style: italic;
  font-weight: 300;
  margin: 0 0.5rem 0.3rem 0;
`;

const StreakCounter = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 2rem;
  text-align: right;
`;

export const Score = (props: IProps) => {
  return (
    <Container>
      <StreakMessage>Streak:</StreakMessage>
      <StreakCounter>{props.streak}</StreakCounter>
    </Container>
  );
};
