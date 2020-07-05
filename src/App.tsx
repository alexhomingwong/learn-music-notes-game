import React from "react";
import { MusicSheet } from "./components/MusicSheet";
import styled from "styled-components";
import { treble, notes, bass } from "./notePostion";
import { Input } from "./components/Input";
import { Score } from "./components/Score";
import { Message } from "./components/Message";
import { ClefToggle } from "./components/ClefToggle";

const AppContainer = styled.div`
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
  clefType: "treble" | "bass";
}

class App extends React.Component<{}, IState> {
  state: IState = {
    index: Math.floor(Math.random() * treble.length),
    answer: "",
    streak: 0,
    correct: undefined,
    clefType: "treble",
  };

  getRandomNoteIndex = (): number => {
    let noteLength = 0;
    if (this.state.clefType === "treble") {
      noteLength = treble.length;
    } else {
      noteLength = bass.length;
    }
    const nextNote = Math.floor(Math.random() * noteLength);
    if (nextNote === this.state.index) {
      return this.getRandomNoteIndex();
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
      console.log("current note", this.state.index);
      console.log("next note", nextNote);
      this.setState((prevState) => ({
        index: nextNote,
        correct: true,
        streak: prevState.streak + 1,
      }));
    } else {
      this.setState({ correct: false, streak: 0 });
    }
  };

  switchClefType = (clefType: "treble" | "bass") => () => {
    this.setState({
      clefType,
      streak: 0,
      correct: undefined,
      index: this.getRandomNoteIndex(),
    });
  };

  isInputCorrectNote = (answer: string) => {
    if (this.state.clefType === "treble") {
      return answer === treble[this.state.index];
    } else {
      return answer === bass[this.state.index];
    }
  };

  render = () => {
    return (
      <>
        <Score streak={this.state.streak} />
        <Message correct={this.state.correct} streak={this.state.streak} />
        <ClefToggle
          activeClef={this.state.clefType}
          switchClefType={this.switchClefType}
        />
        <AppContainer>
          <MusicSheet clefType={this.state.clefType} index={this.state.index} />
          <Input
            checkInputToNote={this.checkInputToNote}
            answer={this.state.answer}
          />
        </AppContainer>
      </>
    );
  };
}

export default App;
