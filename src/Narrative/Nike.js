import React, {Component} from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import ArrowKeysReact from 'arrow-keys-react';
import {
    scrollItemCenter,
    scrollItemCenterImageOnly,
    scrollItemCenterTextOnly,
    scrollItemCenterTitle,
    scrollItemLTR,
    scrollItemRTL,
    scrollItemRTLTextOnly,
} from './Scroll';

import mappings from './../constants/textMappings';
import colors from './../constants/colors';
import states from './../constants/states';

// images
import sweatshopIm from './Images/Nike/Nike_Thailand.jpeg';

// labels
const title = "Nike";
const subtitle = "Considering the Planet and People. [TBD]"

// text
const sweatshop = "In 1991, American labour activist Jeffrey Ballinger published a report on Nike’s factory practices in Indonesia, exposing a scandal: below-minimum wages, child labour and appalling conditions likened to a sweatshop – a factory or workshop where employees work long hours for low money in conditions that are hazardous to health."
const sweatshop2 = "Sweatshops are common in developing countries, including in Indonesia, India, Thailand, Bangladesh and Cambodia, where labour laws are rarely enforced. The factories, which are often housed in deteriorating buildings, are cramped with workers and pose fire dangers. Workers are also restricted access to the toilet and drinking water during the day. Companies such as Nike and Adidas will spruik the line that their factories have strict codes of conduct, but it is difficult to know if those codes are enforced in developing countries."
const sweatshop3 = "In 2001, Leila Salazar, corporate accountability director for Global Exchange, told The Guardian: \"During the last three years, Nike has continued to treat the sweatshop issue as a public relations inconvenience rather than as a serious human rights matter.\"";


// sources
const newidea = "New Idea"

const elemIndices = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6, 
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
}

const elemOne = scrollItemCenterTitle(title, subtitle);
const elemTwo = scrollItemCenterTextOnly([sweatshop], [mappings.reg], newidea);
const elemThree = scrollItemLTR(sweatshopIm, [sweatshop2], [mappings.reg], newidea, newidea);
const elemFour = scrollItemCenterTextOnly([sweatshop3], [mappings.reg], newidea);
const elemFive = null;
const elemSix = null;
const elemSeven = null;
const elemEight = null;
const elemNine = null;
const elemTen = null;
const elemEleven = null;

const elemMappings = {
    1: elemOne,
    2: elemTwo,
    3: elemThree,
    4: elemFour,
    5: elemFive,
    6: elemSix,
    7: elemSeven,
    8: elemEight,
    9: elemNine,
    10: elemTen,
    11: elemEleven,
}

class Nike extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transitionStyle: {
                opacity: '0'
            },
            elemIndex: elemIndices.one,
            elem: elemOne,
        }

        // Use this reference to autofocus on our container (and let us use arrow keys)
        this.ref = React.createRef();

        ArrowKeysReact.config({
            left: () => {
                this.updateElemBackwards(this.state.elemIndex);
            },
            right: () => {
                this.updateElemForward(this.state.elemIndex);
            },
            up: () => {
                this.updateElemBackwards(this.state.elemIndex);
            },
            down: () => {
                this.updateElemForward(this.state.elemIndex);
            }
        });
    }

    focusonMe() {
        // Explicitly focus the input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.ref.current.focus();
    }


    handleTransition = () => {
        this.setState({
            transitionStyle: {
                opacity: '0'
            },
        });

        setTimeout(() => this.setState({
                transitionStyle: {
                    transition: 'opacity 2.5s',
                    opacity: '1'
                }
            }), 3);
    }

    componentDidMount() {
        this.handleTransition();
        this.focusonMe();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.elemIndex !== prevState.elemIndex) {
            this.handleTransition();
        }
    }

    // for invalid moves/incrementations, do nothing
    updateElemForward = (elemIndex) => {
        var newIndex = elemIndex

        if (elemIndex < elemIndices.eleven){
            newIndex = elemIndex + 1;
        }

        this.setState({
            elemIndex: newIndex,
            elem: elemMappings[newIndex],
        });
    }

    updateElemBackwards = (elemIndex) => {
        var newIndex = elemIndex
        if (elemIndex > elemIndices.one){
            newIndex = elemIndex - 1;
        }

        this.setState({
            elemIndex: newIndex,
            elem: elemMappings[newIndex],
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
        this.updateElemBackwards(this.state.elemIndex);
    }

    render() {
        
        return (
            // remove google chrome's highlight and allows for key commands
            <div style={{outline: 'none'}} {...ArrowKeysReact.events} tabIndex="1" ref ={this.ref}>
                {/* Overall Container */}
                <div style={{marginTop: '20px', marginLeft:'40px', marginRight:'40px', marginBottom:'20px'}}>
                    {/* Narrative Viewbox */}
                    <div style={{marginTop: '100px', marginLeft:'20px', marginRight:'20px', display: 'flex', alignItems: 'center', justifyContent: 'center', height:'70vh', width: '88vw'}}>
                        <div style={this.state.transitionStyle} id="element">
                            {this.state.elem}
                        </div>
                    </div>   
                    {/* Navigation Buttons */}
                    <div style = {{display: 'flex', justifyContent: 'center'}}>
                        {(this.state.elemIndex >= elemIndices.two) ? 
                            <IconButton
                            children={<ArrowBackIosIcon/>}
                            disabled={false}
                            color="primary"
                            variant="contained" 
                            onClick={this.onPreviousSubmit} 
                            style={{
                                color: colors.soft_pink,
                                size: "small",
                                backgroundColor: "transparent",
                            }}
                            /> :  <IconButton
                            children={<ArrowBackIosIcon/>}
                            disabled={true}
                            color="primary"
                            variant="contained" 
                            onClick={this.onPreviousSubmit} 
                            style={{
                                color: "transparent",
                                size: "small",
                                backgroundColor: "transparent",
                            }}
                            />}
                        {(this.state.elemIndex <= elemIndices.ten) ? 
                            <IconButton
                            children={<ArrowForwardIosIcon/>}
                            disabled={false}
                            color="primary"
                            variant="contained" 
                            onClick={this.onNextSubmit} 
                            style={{
                                color: colors.soft_pink,
                                size: "small",
                                backgroundColor: "transparent",
                            }}
                            /> : <IconButton
                            children={<ArrowForwardIosIcon/>}
                            disabled={true}
                            color="primary"
                            variant="contained" 
                            onClick={this.onNextSubmit} 
                            style={{
                                color: "transparent",
                                size: "small",
                                backgroundColor: "transparent",
                            }}
                            />}
                    </div>
                    {/* Home and Visualization Buttons */}
                    <div style={{marginTop:'20px'}}>
                        <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                            <div style = {{display: 'flex'}}>
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
                            <div style = {{display: 'flex'}}>
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
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}


export default Nike;