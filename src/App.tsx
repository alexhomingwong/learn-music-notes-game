import React from "react";
import { MusicSheet } from "./MusicSheet";
import styled from "styled-components";
import { treble } from "./notePostion";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

interface IState {
  index: number;
}

class App extends React.Component<{}, IState> {
  state = {
    index: 0,
  };

  checkScore = (answer: string) => answer === treble[this.state.index];

  render = () => {
    return (
      <AppContainer>
        <MusicSheet index={this.state.index} />
      </AppContainer>
    );
  };
}

export default App;
