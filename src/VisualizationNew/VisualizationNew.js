import React from "react";
import brandData from '../Visualization/brand_page_info.json';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

import colors from './../constants/colors';
import states from './../constants/states';

import './../App.css';

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

    buttonChildrenRTL = (text) => {
        return (
            <div style={{display: 'flex'}}>
                <ArrowBackIosIcon/>
                <div style={{fontSize:'20px'}}>{text}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <BrandTable/>
                <div style={{margin: '1vh 2vh', display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
                    <IconButton 
                        className="click" 
                        style={{fontSize:"20px", color:colors.soft_purple, backgroundColor: "transparent"}} 
                        onClick={this.onSubmit}>
                        {this.buttonChildrenRTL("Back to Home")}
                    </IconButton>
                </div>
                
            </div>
        );
    }
}

export default VisualizationNew;