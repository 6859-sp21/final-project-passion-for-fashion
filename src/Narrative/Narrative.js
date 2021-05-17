import React, {Component} from 'react';

import Everlane from './Everlane';
import Nike from './Nike';
import HM from './HM';


import narratives from './../constants/narratives';
import states from './../constants/states';

class Narrative extends Component {

    constructor(props) {
        super(props);
    }

    getNarrative = (narrative) => {
        if (narrative === narratives.everlane) {
            return <Everlane
                    updateState = {this.props.updateState}
                    />;
        }
        else if (narrative === narratives.nike) {
            return <Nike
                updateState = {this.props.updateState}
                />;
        }
        else if (narrative === narratives.hm) {
            return <HM
                updateState = {this.props.updateState}
                />;
        }
        // Not a valid narrative, we'll just go to the visualization
        else {
            this.props.updateState(states.visualization);
            return null;
        }
    }

    render () {
        return this.getNarrative(this.props.narrative);
    }

}

export default Narrative;