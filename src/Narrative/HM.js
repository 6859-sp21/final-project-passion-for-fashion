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
} from './Scroll'

import mappings from './../constants/textMappings';
import colors from './../constants/colors';
import states from './../constants/states';

import './../App.css';

// images
import concious1 from './Images/HM/concioushm.jpeg'
import concious2 from './Images/HM/conscious2hm.jpeg'
import recycling from './Images/HM/recyclinghm.jpeg'
import washing from './Images/HM/washhm.jpeg'

// titles
const title = "H&M";
const subtitle = "Half-Truth and All Lies";

// text
const susEarth = "H&M has been criticised over its plans to start making clothes from Circulose, a sustainable fabric made from up-cycled clothing and fashion waste."

const susEarth21 = "The clothes sold by H&M will comprise a ";
const susEarth22 = "Circulose/Viscose blend";
const susEarth23 = " that uses 50 per cent Circulose sourced from upcycled cotton jeans fabric and 50 per cent viscose sourced from FSC-certified wood. "

const susEarth31 = "“Circulose is an absolute box-ticker,” La Manna says. ";
const susEarth32 = "“Not only is it creating something from waste, it’s also vegan-friendly, non-toxic, durable and biodegradable";
const susEarth33 = ". As a ‘new’ material, it’s much more planet friendly than a lot of the sustainable yarns that are already on the market."

const susEarth41 = "“With this in mind, it’s ";
const susEarth42 = "a real shame to hear that Circulose chose to partner with H&M";
const susEarth43 = " on such an exciting, circular and innovative yarn. Sustainable fashion absolutely needs to be as accessible for as many people as possible, but the fast fashion model will never reach that all important net zero target that we need to be aiming for.”"

const susEarth51 = "“Ultimately, ";
const susEarth52 = "the sheer amount of product H&M produces is causing irreversible harm";
const susEarth53 = " to both planet and people, and completely outweighs their sustainability efforts,” she explained. ";
const susEarth54 = "“Fashion this fast can never and will never be sustainable.”"

const brand11 = "H&M has been trying to position itself as a brand that cares about the environment. It has done so with its ";
const brand12 = "Conscious Collection";
const brand13 = ", a line of clothing within the brand, made of sustainably sourced materials, and ";
const brand14 = "in-store recycle bins";
const brand15 = ". In these recycle bins, customers can drop off their old clothes and get a coupon that they can redeem when they next shop at the store. ";
const brand16 = "What H&M is doing is ";
const brand17 = "greenwashing";
const brand18 = " to distance itself from its role in damaging the environment; ";
const brand19 = "H&M is a fast fashion brand and fast-fashion products are unsustainable.";

const brand21 = "The Conscious Collection and the goal of only using sustainably sourced cotton by 2020 are admirable, but it does little to address the harm fast-fashion causes. More to the point, ";
const brand22 = "the Conscious Collection and the push towards using sustainably-sourced cotton makes it is easier for H&M to lie through the use of half-truths";
const brand23 = ". On its website, H&M states that their recycle bins are a way to ensure that customers’ textiles are reused and don’t end up in landfills. ";
const brand24 = "Nowhere does it state that it is only a percentage that is recycled.";

const covid1 = "After a spate of damning news reports out of Bangladesh, H&M was the first major brand to commit to paying for all of its orders already produced or in production, followed by Target, Marks & Spencer, Zara and PVH Corp. But as we reported last week, the exact details of when suppliers will get paid and how much is still being worked out; the lack of clarity leaves consumers and advocates alike unsure of whether to celebrate or criticise the few brands who are honouring their contracts.";

// sources
const susfashion = "Sustainable Fashion"
const brandingMag = "Branding Mag"
const vogueB = "Vogue Business"
const hm = "H&M"
const hmgroup = "H&M Group"

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
}

const elemOne = scrollItemCenterTitle(title, subtitle, colors.bold_yellow, colors.soft_yellow);
const elemTwo = scrollItemCenterImageOnly(concious1, hm);
const elemThree = scrollItemCenterTextOnly([susEarth21, susEarth22, susEarth23, susEarth31, susEarth32, susEarth33], [mappings.reg, mappings.bold, mappings.reg, mappings.bold, mappings.reg, mappings.bold], susfashion);
const elemFour = scrollItemCenterImageOnly(concious2, hm);
const elemFive = scrollItemCenterTextOnly([susEarth41, susEarth42, susEarth43], [mappings.reg, mappings.bold, mappings.reg], susfashion);
const elemSix = scrollItemCenterTextOnly([susEarth51, susEarth52, susEarth53, susEarth54], [mappings.reg, mappings.bold, mappings.reg, mappings.bold], susfashion);
const elemSeven = scrollItemCenterImageOnly(recycling, hmgroup);
const elemEight = scrollItemCenterTextOnly([brand21, brand22, brand23, brand24], [mappings.reg, mappings.bold, mappings.reg, mappings.bold], brandingMag);
const elemNine = scrollItemCenterTextOnly([brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19], [mappings.reg, mappings.bold, mappings.reg, mappings.bold, mappings.reg, mappings.reg, mappings.bold, mappings.reg, mappings.bold], brandingMag);

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
}

class HM extends Component {

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

        if (elemIndex < elemIndices.nine){
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

    buttonChildrenLTR = (text) => {
        return (
            <div style={{display: 'flex'}}>
                <div style={{fontSize:'20px'}}>{text}</div>
                <ArrowForwardIosIcon/>
            </div>
        );
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
                                className="click" 
                                style={{fontSize:"20px", color:colors.soft_yellow, backgroundColor: "transparent"}} 
                                onClick={this.onPreviousSubmit}>
                                {this.buttonChildrenRTL("")}
                            </IconButton> : 
                            <IconButton 
                                className="click" 
                                disabled={true}
                                style={{fontSize:"20px", color:"transparent", backgroundColor: "transparent"}} 
                                onClick={this.onPreviousSubmit}>
                                {this.buttonChildrenRTL("")}
                            </IconButton>}
                        {(this.state.elemIndex <= elemIndices.eight) ? 
                            <IconButton 
                                className="click" 
                                style={{fontSize:"20px", color:colors.soft_yellow, backgroundColor: "transparent"}} 
                                onClick={this.onNextSubmit}>
                                {this.buttonChildrenLTR("")}
                            </IconButton> : 
                            <IconButton 
                                className="click" 
                                disabled={true}
                                style={{fontSize:"20px", color:"transparent", backgroundColor: "transparent"}} 
                                onClick={this.onNextSubmit}>
                                {this.buttonChildrenLTR("")}
                            </IconButton>}
                    </div>
                    {/* Home and Visualization Buttons */}
                    <div style={{marginTop:'20px'}}>
                        <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                            <div style = {{display: 'flex'}}>
                                <IconButton 
                                    className="click" 
                                    style={{fontSize:"20px", color:colors.soft_purple, backgroundColor: "transparent"}} 
                                    onClick={this.onHomeSubmit}>
                                    {this.buttonChildrenRTL("Back Home")}
                                </IconButton>
                            </div>
                            <div style = {{display: 'flex'}}>
                                <IconButton 
                                    className="click" 
                                    style={{fontSize:"20px", color:colors.soft_blue, backgroundColor: "transparent"}} 
                                    onClick={this.onSkipSubmit}>
                                    {this.buttonChildrenLTR("Let's Explore")}
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}


export default HM;