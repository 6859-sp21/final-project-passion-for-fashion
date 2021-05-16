import React, {Component} from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

import colors from './../constants/colors';
import states from './../constants/states';

const elemIndices = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5
}

class Everlane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elemIndex: elemIndices.one,
        }
    }

    // could change the button to dissappear if moving forwards/backwards isn't an option
    // or just have it be unresponsive (first edition)

    getElem = (elemIndex) => {
        switch(elemIndex){
            case (elemIndices.one):
                return (
                    <div>
                        Element One
                    </div>
                );
            case (elemIndices.two):
                return (
                    <div>
                        Element Two
                    </div>
                );
            case (elemIndices.three):
                return (
                    <div>
                        Element Three
                    </div>
                );
            case (elemIndices.four):
                return (
                    <div>
                        Element Four
                    </div>
                );   
            case (elemIndices.five):
                return (
                    <div>
                        Element Five
                    </div>
                );      
        }
    }

    // for invalid moves/incrementations, do nothing
    updateElemForward = (elemIndex) => {
        var newIndex = elemIndex
        switch(elemIndex){
            case (elemIndices.one):
                newIndex = elemIndices.two;
                break;
            case (elemIndices.two):
                newIndex = elemIndices.three
                break;
            case (elemIndices.three):
                newIndex = elemIndices.four;
                break;
            case (elemIndices.four):
                newIndex = elemIndices.five
                break;         
        }

        this.setState({
            elemIndex: newIndex
        });
    }

    updateElemBackwards = (elemIndex) => {
        var newIndex = elemIndex
        switch(elemIndex){
            case (elemIndices.two):
                newIndex = elemIndices.one;
                break;
            case (elemIndices.three):
                newIndex = elemIndices.two;
                break;
            case (elemIndices.four):
                newIndex = elemIndices.three;
                break;
            case (elemIndices.five):
                newIndex = elemIndices.four
                break;          
        }

        this.setState({
            elemIndex: newIndex
        });
    }

    onSkipSubmit = () => {
        this.props.updateState(states.visualization);
    }

    onHomeSubmit = () => {
        this.props.updateState(states.introduction); 
    }

    onNextSubmit = () => {
        this.updateElemForward(this.state.elemIndex);
    }

    onPreviousSubmit = () => {
        this.updateElemBackwards(this.state.elemIndex, false);
    }

    render() {
        
        return (
            <div>
                {this.getElem(this.state.elemIndex)}
                <div style = {{margin:'auto', width:'50%', display: 'flex'}}>
                    <IconButton
                        children={<ArrowBackIosIcon/>}
                        color="primary"
                        variant="contained" 
                        onClick={this.onPreviousSubmit} 
                        style={{
                            color: colors.soft_green,
                            size: "small",
                            backgroundColor: "transparent",
                        }}
                        />
                    <IconButton
                    children={<ArrowForwardIosIcon/>}
                    color="primary"
                    variant="contained" 
                    onClick={this.onNextSubmit} 
                    style={{
                        color: colors.soft_green,
                        size: "small",
                        backgroundColor: "transparent",
                    }}
                    />
                </div>
                <div style={{marginTop:'450px', marginLeft:'40px', marginRight:'40px', marginBottom:'100px'}}>
                    <div style = {{margin:'auto', width:'50%', display: 'flex'}}>
                        <div style = {{fontSize:'20px', marginTop: '10px', color: colors.soft_blue}}>
                            Let's Explore
                        </div>
                        <IconButton
                        children={<ArrowForwardIosIcon/>}
                        color="primary"
                        variant="contained" 
                        onClick={this.onSkipSubmit} 
                        style={{
                            color: colors.soft_blue,
                            size: "small",
                            backgroundColor: "transparent",
                        }}
                    />
                    </div>
                    <div style = {{margin:'auto', width:'50%', display: 'flex'}}>
                        <IconButton
                        children={<ArrowBackIosIcon/>}
                        color="primary"
                        variant="contained" 
                        onClick={this.onHomeSubmit} 
                        style={{
                            color: colors.soft_purple,
                            size: "small",
                            backgroundColor: "transparent",
                        }}
                        />
                        <div style = {{fontSize:'20px', marginTop: '10px', color: colors.soft_purple}}>
                            Back Home
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}


export default Everlane;