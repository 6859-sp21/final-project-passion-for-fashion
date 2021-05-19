import React, {Component} from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import colors from './../constants/colors';
import states from './../constants/states';
import narratives from './../constants/narratives';

import './../App.css';

// images
import everlane from './Images/everlane_logo.png';
import nike from './Images/nike_logo2.png';
import hm from './Images/hm_logo.png';

const summary = "With the continually increasing popularity of \"fast-fashion\" companies, it is becoming more and more important to understand the social and ethical context in which such companies operate, as well as the influence they have on the planet, animals, and people. After a curated narrative experience, we invite you to explore the policies several clothing companies have with respect to animal welfare, environmental responsibility, and workers' rights, within a visualization containing data gathered from ";
const goodOnYouURL = "https://goodonyou.eco/about/";
const githubURL = "https://github.com/6859-sp21/final-project-passion-for-fashion";
const linkTreeURL = "https://linktr.ee/passionforfashion";

const narrative_summary = "Click on a company's logo to learn more about their ethical fashion policies through a step-through narrative experience. You may navigate the narrative by clicking the left and right buttons or using arrow keys. If you wish to skip ahead to the main visualization, click the \"No Thanks, Let's Explore\" button down below."

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

    buttonChildrenImage = (image, imageSize) => {
        return (
            <div style={{}}>
                <img style={{height: imageSize}} src ={image}/>
                {/* <div style={{fontSize: textSize}}>{text}</div> */}
            </div>
        );
    }

    render() {
        return (
        <div>
            <div style={{marginLeft:'10vw', width: '80vw', height: '80vh'}}>
                <h1 style={{fontSize:'48px', margin: ['20px','0px','20px','0px'], textAlign: 'center', color: colors.black}}>Passion for Fashion</h1>
                <div style={{ marginLeft:'20px', marginRight:'20px', display:'flex', justifyContent:'center'}}>
                    <i style={{fontSize:'20px', color: colors.medium_grey}}>
                        {summary}
                        <a href={goodOnYouURL} target="_blank" style={{color:colors.bold_blue}} rel="noreferrer">good on you</a>
                        <a>.</a>
                    </i>
                </div>
                <div style={{ marginLeft:'40px'}} >
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <h1>Narrative Experiences</h1>
                    </div>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <i style={{fontSize:'20px', color: colors.medium_grey}}>
                            {narrative_summary}
                        </i>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop:'20px'}}>
                        <IconButton 
                            className="click" 
                            style={{color:colors.soft_pink, backgroundColor: "transparent"}} 
                            onClick={this.onNikeSubmit}>
                            {this.buttonChildrenImage(nike, "60px")}
                        </IconButton>
                        <IconButton 
                            className="click" 
                            style={{color:colors.soft_green, backgroundColor: "transparent"}} 
                            onClick={this.onEverlaneSubmit}>
                            {this.buttonChildrenImage(everlane, "90px")}
                        </IconButton>
                        <IconButton 
                            className="click" 
                            style={{color:colors.soft_yellow, backgroundColor: "transparent"}} 
                            onClick={this.onHMSubmit}>
                            {this.buttonChildrenImage(hm,  "90px",)}
                        </IconButton>
                    </div>
                    
                </div>
            </div>
            <div style={{marginLeft:'10vw', width: '80vw', height: '20vh'}}>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <div>
                        <div style={{fontStyle:'italic', fontFamily:'sans-serif', color:colors.light_grey}}>
                        Melody Phu
                        </div>
                        <div style={{fontStyle:'italic', fontFamily:'sans-serif', color:colors.light_grey}}>
                        Magdalena Price
                        </div>
                        <div style={{fontStyle:'italic', fontFamily:'sans-serif', color:colors.light_grey}}>
                        Spring 2021 6.859 Final Project
                        </div>
                        <div>
                            <a href = {githubURL} target="_blank" style={{color:colors.soft_blue, fontStyle:'italic', fontFamily:'sans-serif'}} rel="noreferrer">
                                Project Github
                            </a>
                        </div>
                        <div>
                            <a href = {linkTreeURL} target="_blank" style={{color:colors.soft_blue, fontStyle:'italic', fontFamily:'sans-serif'}} rel="noreferrer">
                            Narrative Sources
                        </a>
                        </div>
                    </div>
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