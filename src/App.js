import React, { Component } from "react";
import "./App.css";
import StepSlider from "./Slider";
import styled from "styled-components";

class App extends Component {
  render() {
    const steps = [
      { label: "1", value: "0" },
      { label: "2", value: "1" },
      { label: "3", value: "2" },
      { label: "4", value: "3" },
      { label: "5", value: "4" },
      { label: "6", value: "5" },
      { label: "7", value: "6" },
      { label: "8", value: "7" },
      { label: "9", value: "8" },
      { label: "10", value: "9" },
    ];
    return (
      <div className="App">
        <AppContainer>
          <StepSlider steps={steps}></StepSlider>
        </AppContainer>
      </div>
    );
  }
}

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 300px;
  width: 900px;
`;

export default App;
