import React, {Component} from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import colors from './../constants/colors';
import states from './../constants/states';
import narratives from './../constants/narratives';

import './../App.css';

const summary = "With the continually increasing popularity of \"fast-fashion\" companies, it is becoming more and more important to understand the social and ethical context in which such companies operate, as well as the influence they have on the planet, animals, and people. After a curated narrative experience, we invite you to explore the policies several clothing companies have with respect to animal welfare, environmental responsibility, and workers' rights, within a visualization containing data gathered from ";
const goodOnYouURL = "https://goodonyou.eco/";


class Intro extends Component {
    constructor(props) {
        super(props);
    }

    onEverlaneSubmit = () => {
        this.props.updateState(states.narrative);
        this.props.updateNarrative(narratives.everlane)
    }

    onNikeSubmit = () => {
        this.props.updateState(states.narrative);
        this.props.updateNarrative(narratives.nike)
    }

    onHMSubmit = () => {
        this.props.updateState(states.narrative);
        this.props.updateNarrative(narratives.hm)
    }

    onVisualizationSubmit = () => {
        this.props.updateState(states.visualization);
    }

    buttonChildrenLTR = (text) => {
        return (
            <div style={{display: 'flex'}}>
                <div style={{fontSize:'20px'}}>{text}</div>
                <ArrowForwardIosIcon/>
            </div>
        );
    } 

    render() {
        return (
        <div>
            <h1 style={{fontSize:'48px', margin: ['20px','0px','20px','0px'], textAlign: 'center', color: colors.black}}>Passion for Fashion</h1>
            <div style={{ marginLeft:'20px', marginRight:'20px', textAlign: 'center'}}>
                <i style={{fontSize:'20px', color: colors.medium_grey}}>
                    {summary}
                    <a href={goodOnYouURL} target="_blank" style={{color:colors.bold_blue}} rel="noreferrer">good on you</a>
                    <a>.</a>
                </i>
            </div>
            <div style={{ marginLeft:'40px'}} >
                <h2>Narrative Experiences</h2>
                <div style={{display: 'flex'}}>
                    <IconButton 
                        className="click" 
                        style={{fontSize:"20px", color:colors.soft_green, backgroundColor: "transparent"}} 
                        onClick={this.onEverlaneSubmit}>
                        {this.buttonChildrenLTR("Everlane")}
                    </IconButton>
                    <IconButton 
                        className="click" 
                        style={{fontSize:"20px", color:colors.soft_pink, backgroundColor: "transparent"}} 
                        onClick={this.onNikeSubmit}>
                        {this.buttonChildrenLTR("Nike")}
                    </IconButton>
                    <IconButton 
                        className="click" 
                        style={{fontSize:"20px", color:colors.soft_yellow, backgroundColor: "transparent"}} 
                        onClick={this.onHMSubmit}>
                        {this.buttonChildrenLTR("H&M")}
                    </IconButton>
                </div>
                <div style={{display: 'flex'}}>
                    <IconButton 
                        className="click" 
                        style={{fontSize:"20px", color:colors.soft_blue, backgroundColor: "transparent"}} 
                        onClick={this.onVisualizationSubmit}>
                        {this.buttonChildrenLTR("No Thanks, Let's Explore")}
                    </IconButton>
                </div>
            </div>
            
        </div>
        );
    }

}

export default Intro;