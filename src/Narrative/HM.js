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
const subtitle = "Turning a Blind Eye"

// text
const susEarth = "H&M has been criticised over its plans to start making clothes from Circulose, a sustainable fabric made from up-cycled clothing and fashion waste."
const susEarth2 = "The clothes sold by H&M will comprise a Circulose/Viscose blend that uses 50 per cent Circulose sourced from upcycled cotton jeans fabric and 50 per cent viscose sourced from FSC-certified wood. "
const susEarth3 = "“Circulose is an absolute box-ticker,” La Manna says. “Not only is it creating something from waste, it’s also vegan-friendly, non-toxic, durable and biodegradable. As a ‘new’ material, it’s much more planet friendly than a lot of the sustainable yarns that are already on the market."
const susEarth4 = "“With this in mind, it’s a real shame to hear that Circulose chose to partner with H&M on such an exciting, circular and innovative yarn. Sustainable fashion absolutely needs to be as accessible for as many people as possible, but the fast fashion model will never reach that all important net zero target that we need to be aiming for.”"
const susEarth5 = "“Ultimately, the sheer amount of product H&M produces is causing irreversible harm to both planet and people, and completely outweighs their sustainability efforts,” she explained. “Fashion this fast can never and will never be sustainable.”"

const brand1 = "H&M has been trying to position itself as a brand that cares about the environment. It has done so with its Conscious Collection, a line of clothing within the brand, made of sustainably sourced materials, and in-store recycle bins. In these recycle bins, customers can drop off their old clothes and get a coupon that they can redeem when they next shop at the store. What H&M is doing is greenwashing to distance itself from its role in damaging the environment; H&M is a fast fashion brand and fast-fashion products are unsustainable."
const brand2 = "The Conscious Collection and the goal of only using sustainably sourced cotton by 2020 are admirable, but it does little to address the harm fast-fashion causes. More to the point, the Conscious Collection and the push towards using sustainably-sourced cotton makes it is easier for H&M to lie through the use of half-truths. On its website, H&M states that their recycle bins are a way to ensure that customers’ textiles are reused and don’t end up in landfills. Nowhere does it state that it is only a percentage that is recycled."

const covid1 = "After a spate of damning news reports out of Bangladesh, H&M was the first major brand to commit to paying for all of its orders already produced or in production, followed by Target, Marks & Spencer, Zara and PVH Corp. But as we reported last week, the exact details of when suppliers will get paid and how much is still being worked out; the lack of clarity leaves consumers and advocates alike unsure of whether to celebrate or criticise the few brands who are honouring their contracts."

// sources
const susfashion = "Sustainable Fasion"
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
    'ten': 10,
    'eleven': 11,
}

const elemOne = scrollItemCenterTitle(title, subtitle, colors.bold_yellow, colors.soft_yellow);
const elemTwo = scrollItemCenterImageOnly(concious2, hm);
const elemThree = scrollItemCenterImageOnly(concious1, hm);
const elemFour = scrollItemCenterTextOnly([susEarth2, susEarth3], [mappings.reg, mappings.reg], susfashion)
const elemFive = scrollItemCenterTextOnly([susEarth4], [mappings.reg], susfashion);
const elemSix = scrollItemCenterTextOnly([susEarth5], [mappings.reg], susfashion);
const elemSeven = scrollItemCenterTextOnly([brand1], [mappings.reg], brandingMag);
const elemEight = scrollItemCenterImageOnly(recycling, hmgroup);
const elemNine = scrollItemCenterTextOnly([brand2], [mappings.reg], brandingMag);
const elemTen = null;
// const elemTen = scrollItemCenterTextOnly([covid1], [mappings.reg], vogueB);
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
                        {(this.state.elemIndex <= elemIndices.ten) ? 
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