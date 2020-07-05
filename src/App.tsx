import React from "react";
import { MusicSheet } from "./components/MusicSheet";
import styled from "styled-components";
import { treble, notes } from "./notePostion";
import { Input } from "./components/Input";

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
}

class App extends React.Component<{}, IState> {
  state = {
    index: 0,
    answer: "",
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
      console.log("correct");
      const nextNote = this.getRandomNoteIndex();
      this.setState({
        index: nextNote,
      });
    } else {
      console.log("wrong");
    }
  };

  isInputCorrectNote = (answer: string) => answer === treble[this.state.index];

  render = () => {
    return (
      <AppContainer>
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
