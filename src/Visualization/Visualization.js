import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import colors from './../constants/colors';
import states from './../constants/states';

class Visualization extends Component {

    onSubmit = () => {
        this.props.updateState(states.introduction);
    }

    render() {
        return (
            <div>
                <h2 style={{color: colors.black}}>Welcome to the Visualization</h2>
                <Button variant="contained" onClick={this.onSubmit} style={{
                color: colors.medium_grey,
                size: "small",
                backgroundColor: colors.soft_yellow,
                }}>Head to Introduction</Button>
            </div>
        );
    }

}

export default Visualization;