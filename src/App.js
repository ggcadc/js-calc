import React from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display'

class App extends React.Component {
  constructor() {
    super();
    this.clearButton = this.clearButton.bind(this)
    this.problemState = this.problemState.bind(this)

    this.state = {
      calc : [],
    }
  }
  problemState(probArr) {
    // update state
    this.setState({ calc: probArr });
  }

  clearButton() {
    this.setState({ calc: [0] });
  }

  render() {
    return (
      <div className="App">
        <Display
          calcState={this.state.calc}

        />
        <Buttons
          calcState={this.state.calc}
          clearButton={this.clearButton}
          problemState={this.problemState}
        />
      </div>
    );
  }
}

export default App;
