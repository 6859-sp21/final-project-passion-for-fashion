import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import colors from './../constants/colors';
import states from './../constants/states';


class Intro extends Component {
    constructor(props) {
        super(props);
    }

    onNarrativeSubmit = () => {
        this.props.updateState(states.narrative);
    }

    onVisualizationSubmit = () => {
        this.props.updateState(states.visualization);
    }

    render() {
        return (
        <div>
            <h2 style={{color: colors.black}}>Welcome to the Introduction</h2>
            <Button variant="contained" onClick={this.onNarrativeSubmit} style={{
            color: colors.medium_grey,
            size: "small",
            backgroundColor: colors.soft_green,
            }}>Head to Narrative</Button>
            <Button variant="contained" onClick={this.onVisualizationSubmit} style={{
            color: colors.medium_grey,
            size: "small",
            backgroundColor: colors.soft_blue,
            }}>Head to Visualization</Button>
        </div>
        );
    }

}

export default Intro;