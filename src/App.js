import React, {Component} from 'react';

import logo from './logo.svg';
import states from './constants/states';
// import './constants/fonts.css';
import Intro from './Introduction/Intro';
import Narrative from './Narrative/Narrative';
import Visualization from './Visualization/Visualization';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: states.introduction,
    }
  }

  getView(state) {
    if (state === state.introduction) {
      return <Intro/>;
    } else if (state === state.narrative) {
      return <Narrative/>;
    } else {
      return <Visualization/>; // default value if state transitions ever mess up
    }
  }

  updateState(newState) {
    this.setState({
      state: newState
    });
  }

  render(viewState) {
    return (
      <div>
        {this.getView(this.state)}
      </div>
    );
  }

}

export default App;
