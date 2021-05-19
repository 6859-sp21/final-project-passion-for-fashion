import React from "react";
import brandData from '../Visualization/brand_page_info.json';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

import colors from './../constants/colors';
import states from './../constants/states';

import './../App.css';

import BrandTable from "./BrandTable";
import RatingChart from "./RatingChart";
import BarChart from "./BarChart";
import SankeyChart from "./SankeyChart";
import Map from "./Map";
import { Sankey } from "react-vis";

const MAX_VIZ_INDEX = 3; // 4 total

class VisualizationNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCompanies: [], // max length 5
            vizIndex: 0, // which visualization to display
        }
    }

    componentDidMount() {

    }

    setSelectedBrands = (rows) => {
        this.setState({
            selectedCompanies: (rows.length <= 5) ? rows : [],
        })

    }

    onSubmit = () => {
        this.props.updateState(states.introduction);
        this.setState({
            selectedCompanies: [],
        })
    }

    switchViz = (value) => {
        this.setState({
            vizIndex: value,
        })
    }

    previousButton = (text) => {
        return (
            <div style={{display: 'flex'}}>
                <ArrowBackIosIcon/>
                <div style={{fontSize:'20px'}}>{text}</div>
            </div>
        );
    }

    nextButton = (text) => {
        return (
            <div style={{display: 'flex'}}>
                <div style={{fontSize:'20px'}}>{text}</div>
                <ArrowForwardIosIcon/>
            </div>
        );
    }

    render() {
        return (
            <div style={{height: "100vh", width: "100vw", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', alignContent: 'center'}}>
                    <BrandTable setSelectedBrands={this.setSelectedBrands}/>
                        {(this.state.vizIndex == 0) && (
                            <RatingChart selectedCompanies={this.state.selectedCompanies}/>
                        )}
                        {(this.state.vizIndex == 1) && (
                            <BarChart/>
                        )}
                        {(this.state.vizIndex == 2) && (
                            <SankeyChart/>
                        )}
                        {(this.state.vizIndex == 3) && (
                            <Map/>
                        )}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'center', margin: "0vw 16vw 0vw 0vw"}}>
                    {(this.state.vizIndex >= 1) ? 
                        <IconButton 
                            className="click" 
                            style={{fontSize:"20px", color:colors.soft_blue, backgroundColor: "transparent"}} 
                            onClick={() => this.switchViz(this.state.vizIndex - 1)}>
                            {this.previousButton("")}
                        </IconButton> : 
                        <IconButton 
                            className="click" 
                            disabled={true}
                            style={{fontSize:"20px", color:"transparent", backgroundColor: "transparent"}} 
                            onClick={() => this.switchViz(this.state.vizIndex - 1)}>
                            {this.previousButton("")}
                        </IconButton>}
                    {(this.state.vizIndex <= 2) ? 
                        <IconButton 
                            className="click" 
                            style={{fontSize:"20px", color:colors.soft_blue, backgroundColor: "transparent"}} 
                            onClick={() => this.switchViz(this.state.vizIndex + 1)}>
                            {this.nextButton("")}
                        </IconButton> : 
                        <IconButton 
                            className="click" 
                            disabled={true}
                            style={{fontSize:"20px", color:"transparent", backgroundColor: "transparent"}} 
                            onClick={() => this.switchViz(this.state.vizIndex + 1)}>
                            {this.nextButton("")}
                        </IconButton>}
                </div>
                <div style={{margin: '1vh 2vh', display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
                        <IconButton 
                            className="click" 
                            style={{fontSize:"20px", color:colors.soft_purple, backgroundColor: "transparent"}} 
                            onClick={this.onSubmit}>
                            {this.previousButton("Return to Home")}
                        </IconButton>
                </div>
            </div>
        );
    }
}

export default VisualizationNew;