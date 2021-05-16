import React, {Component} from 'react';

import Everlane from './Everlane';

import narratives from './../constants/narratives';

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
        else {
            return (
                <div>
                    Not a valid narrative
                </div>
            );
        }
    }

    render () {
        return this.getNarrative(this.props.narrative);
    }

}

export default Narrative;