import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import colors from './../constants/colors';
import states from './../constants/states';

class Narrative extends Component {

    constructor(props) {
        super(props);
      }

    onSubmit = () => {
        this.props.updateState(states.visualization);
    }

    render() {
        return (
            <div>
                <h2 style={{color: colors.black}}>Welcome to the Narrative</h2>
                <Button variant="contained" onClick={this.onSubmit} style={{
                color: colors.medium_grey,
                size: "small",
                backgroundColor: colors.soft_blue,
                }}>Head to Visualization</Button>
            </div>
        );
    }

}

export default Narrative;