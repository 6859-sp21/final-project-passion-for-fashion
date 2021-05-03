import React from "react";
import countries from "i18n-iso-countries";

import { makeStyles } from '@material-ui/core/styles';
import {Modal, Paper} from '@material-ui/core';
import colors from './../constants/colors';

class BrandProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBrand: {},
            open: false,
        }
    }

    getBrandContent = () => {
        let {currentBrand} = this.state;

        return (
            <Paper style={{position: 'absolute',}}>
                {currentBrand.name}
            </Paper>
        )
    }

    render() {
        return (
            <div>
                <Modal
                    style = {{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: `50.5%`,
                        left: `50.5%`,
                        transform: `translate(-50.5%, -50.5%)`,
                    }}
                    open={this.props.showModal}
                    onClose={() => this.props.handleProfileClose}
                >
                    <div>
                        {this.getBrandContent()}
                    </div>
                    
                </Modal>
            </div>

        );
    }
}

export default BrandProfile;