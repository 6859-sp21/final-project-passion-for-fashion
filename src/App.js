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
      pageState: states.introduction,
    }
  }

  getView(page) {
    if (page === states.introduction) {
      return <Intro/>;
    } else if (page === states.narrative) {
      return <Narrative/>;
    } else {
      return <Visualization/>; // default value if state transitions ever mess up
    }
  }

  updateState(newPagetate) {
    this.setState({
      pageState: newPageState
    });
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
