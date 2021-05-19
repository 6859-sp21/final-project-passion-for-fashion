import React from "react";
import brandData from '../Visualization/brand_page_info.json';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

import colors from './../constants/colors';
import states from './../constants/states';

import BrandTable from "./BrandTable";

class VisualizationNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    onSubmit = () => {
        this.props.updateState(states.introduction);
    }

    render() {
        return (
            <div>
                <BrandTable/>
                <div style={{margin: '1vh 2vh', display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
                    <IconButton
                        children={<ArrowBackIosIcon/>}
                        color="primary"
                        variant="contained" 
                        onClick={this.onSubmit} 
                        style={{
                            color: colors.soft_purple,
                            size: "small",
                            backgroundColor: "transparent",}}
                    />
                    <div style={{fontSize:'20px', marginTop: '10px', color: colors.soft_purple}}>Back to Home</div>
                </div>
                
            </div>
        );
    }
}

export default VisualizationNew;