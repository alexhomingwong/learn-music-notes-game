import React from "react";
import styled from "styled-components";

interface IProps {
  streak: number;
  hiScore: number;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto 2rem;
  padding: 0 1rem;
  align-items: flex-end;
  max-width: 1200px;
`;

const Label = styled.div`
  font-size: 1rem;
  font-style: italic;
  font-weight: 300;
  margin: 0 0.5rem 0.3rem 0;
`;

const Point = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 2rem;
  text-align: right;
`;

const ScoreContainer = styled.div`
  display: flex;
`;

export const Score = (props: IProps) => {
  return (
    <Container>
      <ScoreContainer>
        <Label>Hi-Score:</Label>
        <Point>{props.hiScore}</Point>
      </ScoreContainer>
      <ScoreContainer>
        <Label>Streak:</Label>
        <Point>{props.streak}</Point>
      </ScoreContainer>
    </Container>
  );
};
