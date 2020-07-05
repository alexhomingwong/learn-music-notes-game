import React from "react";
import { MusicSheet } from "./components/MusicSheet";
import styled from "styled-components";
import { treble, notes } from "./notePostion";
import { Input } from "./components/Input";
import { Score } from "./components/Score";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface IState {
  index: number;
  answer: string;
  streak: number;
  correct?: boolean;
}

class App extends React.Component<{}, IState> {
  state = {
    index: 0,
    answer: "",
    streak: 0,
    correct: undefined,
  };

  getRandomNoteIndex = () => {
    const nextNote = Math.floor(Math.random() * treble.length);
    if (nextNote === this.state.index) {
      this.getRandomNoteIndex();
    }
    return nextNote;
  };

  isInputValidNote = (input: string | undefined): boolean => {
    if (input) {
      return notes.includes(input.toLocaleUpperCase("en"));
    }
    return false;
  };

  checkInputToNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue =
      event.currentTarget.value[event.currentTarget.value.length - 1];

    if (this.isInputValidNote(inputValue)) {
      this.setState(
        {
          answer: inputValue.toLocaleUpperCase("en"),
        },
        this.handleScore
      );
    }
  };

  handleScore = () => {
    if (this.isInputCorrectNote(this.state.answer)) {
      const nextNote = this.getRandomNoteIndex();
      this.setState((prevState) => ({
        index: nextNote,
        correct: true,
        streak: prevState.streak + 1,
      }));
    } else {
      this.setState({ correct: false, streak: 0 });
    }
  };

  isInputCorrectNote = (answer: string) => answer === treble[this.state.index];

  render = () => {
    return (
      <AppContainer>
        <Score streak={this.state.streak} correct={this.state.correct} />
        <MusicSheet index={this.state.index} />
        <Input
          checkInputToNote={this.checkInputToNote}
          answer={this.state.answer}
        />
      </AppContainer>
    );
  };
}

export default App;
