import React from "react";
import countries from "i18n-iso-countries";

import {Paper} from '@material-ui/core';
import colors from './../constants/colors';

class BrandList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            field: "location"
        }
    }




    render() {
        const data = this.getData();
        console.log(data);
        return (
            <div>
                <Paper elevation={0}>
                    This is the brand list.
                </Paper>
            </div>
        );
    }
}

export default BrandList;