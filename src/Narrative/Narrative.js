import React, {Component} from 'react';
import colors from './../constants/colors'

class Narrative extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return (<div><h2 style={{color: colors.black}}>Welcome to the Narrative</h2></div>);
    }

}

export default Narrative;