import React, {Component} from 'react';

// import logo from './logo.svg';
import states from './constants/states';
import narratives from './constants/narratives';
// import './constants/fonts.css';
import Intro from './Introduction/Intro';
import Narrative from './Narrative/Narrative';
import Visualization from './Visualization/Visualization';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageState: states.introduction,
      narrative: narratives.none,
    }
  }

  getView(page) {
    if (page === states.introduction) {
      return <Intro
        updateState = {this.updateState}
        updateNarrative = {this.updateNarrative}
        />;
    } else if (page === states.narrative) {
      return <Narrative
        updateState = {this.updateState}
        narrative = {this.state.narrative}
        />;
    } else {
      // default value if state transitions ever mess up
      return <Visualization
        updateState = {this.updateState}
        />;
    }
  }

  updateState = (newPageState) => {
    this.setState({
      pageState: newPageState
    })
  }

  updateNarrative = (newNarrative) => {
    this.setState({
      narrative: newNarrative
    })
  }

  render(viewState) {
    return (
      <div>
        {this.getView(this.state.pageState)}
      </div>
    );
  }

}

export default App;
