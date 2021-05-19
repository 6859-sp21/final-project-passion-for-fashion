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

import './../App.css';

// all of the images
import intro from './Images/Everlane/everlane_about_intro.jpeg';
import about from './Images/Everlane/everlane_about_factory.jpeg';
import promise from './Images/Everlane/everlane_promises.jpeg';
// import factory from './Images/Everlane/everlane_ethical_approach_intro.jpeg';
import plastic from './Images/Everlane/everlane_no_new_plastic.jpeg';

// all of the text blurbs
const title = "Everlane";
const subtitle = "Lofty Goals and Unmet Promises"

const introText1 = '"At Everlane, we want the right choice to be as easy as putting on a great T-shirt. ';
const introText2 = 'That’s why we partner with the best, ethical factories around the world. Source only the finest materials. ';
const introText3 = 'And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it ';
const introText4 = 'Radical Transparency';
const introText5 = '."';

const customerPraise1 = '"Let me just say this. If you’re looking for a “no-frills” approach to clothing, look no further than Everlane ... As a customer, it finally feels like I’ve found my home and can see myself sticking around for a while. Here’s why. Initially I was looking for alternatives to fast fashion retailers (which comes with unethical fashion practices), and designer brands that carried too high of a price tag for what they’re selling. I was on the hunt for ';
const customerPraise2 = 'brands that believed in doing fashion ethically ';
const customerPraise3 = 'in addition to what they could offer their customers aesthetically. ';
const customerPraise4 = 'Everlane was one of those brands';
const customerPraise5 = ' that stood out to me."';

const cotton1 = 'Worldwide, ';
const cotton2 = 'cotton farming uses more toxic pesticides per acre than any other crop. ';
const cotton3 = 'These chemicals are harming our planet—stripping the land of nutrients, contaminating our water, and endangering the people who grow it. ';
const cotton4 = 'That’s why we’re moving all our cotton to certified organic ';
const cotton5 = 'by 2023.';


const factoryText1 = 'To ensure the continued integrity of our factory partners, we develop strong relationships with the people at the facility and work with third-party auditors to evaluate factors like ';
const factoryText2 = 'fair wages, labor conditions, reasonable hours, and a safe work environment.';

const wagesControversy1 = 'Since early 2020, Everlane has been embroiled in controversy for union busting its American workers while also preventing them from discussing their wages with one another. An important aspect of every sustainable brand is the allowance of workers to unionize. It’s disappointing that Everlane is against unions, unable to provide information about factory conditions, has no energy reduction policy, or essentially anything that confirms its the sustainable company it’s always said it was. As far as we can tell, ';
const wagesControversy2 = 'Everlane is just another brand utilizing greenwashing tactics for sales.';


const cottonControversy1 = 'While ';
const cottonControversy2 = 'most of the brands that pass our criteria use organic cotton ';
const cottonControversy3 = 'as a bare minimum, ';
const cottonControversy4 = 'many go above and beyond ';
const cottonControversy5 = 'with recycled fabrics, upcycled fabrics, hemp, linen, and Tencel. Everlane on the other hand makes virtually no effort on sustainable fabrics across their large and diverse product range.';


const workerControversy11 = 'Investigators found that insensitive terms were used while discussing Black models; that leaders violated employees’ personal space by touching them, and used inappropriate terms when referring to people of color; that new hires felt isolated and unwelcome; that there was lack of consistent policies around promotions; that ';
const workerControversy12 = 'there were no formal processes to effectively escalate harassment or discrimination.';

const workerControversy21 = 'Ms. Kwadzogah was one of a group of remote customer-experience workers who announced in December they were unionizing. Broadly speaking, they’d come to feel like “second-class citizens,” said Jon Foor, who joined Everlane’s customer experience team in 2018, with ';
const workerControversy22 = 'no opportunities for career growth and none of the start-up perks';
const workerControversy23 = '— annual retreats, kombucha on tap — enjoyed by full-time colleagues at headquarters. Everlane said that multiple members of this team have gone on to become full-time employees in other departments but did not specify how many. Three months later, 290 employees were laid off, including 42 of the remote customer-experience team’s 57 employees. Everlane said the company didn’t know which employees were part of the unionizing effort and attributed the layoffs to the economic pressures of the pandemic. The workers described it as ';
const workerControversy24 = 'union busting';
const workerControversy25 = ' and were publicly supported by Senator Bernie Sanders.';

const makerWellBeing1 = 'To break this down, they have their own code of conduct that is comparable to FLA standards. Ok, well that’s good and they also invest in maker well-being programs. However, ';
const makerWellBeing2 = 'where they are lacking is any certification or other evidence that they pay living wages.';
const makerWellBeing3 = ' They have no Fair Trade certification, no GOTS, no SA8000, etc.';

const sustainability1 = 'Most of their products offer ';
const sustainability2 = 'no explanation for how or why they’re more sustainable ';
const sustainability3 = 'than any other clothing product on the market.';

// all of the sources
const everlane = 'Everlane';
const eco = "Eco-Stylist";
const nyt = "The New York Times";
const remake = "Remake";
const nicole = "Nicole Ho, fashion blogger";

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

const elemOne = scrollItemCenterTitle(title, subtitle, colors.bold_green, colors.soft_green);
const elemTwo = scrollItemCenter(intro, [introText1, introText2, introText3, introText4, introText5], [mappings.reg, mappings.bold, mappings.reg, mappings.bold, mappings.reg], everlane);
const elemThree = scrollItemLTR(promise, [customerPraise1, customerPraise2, customerPraise3, customerPraise4, customerPraise5], [mappings.reg, mappings.bold, mappings.reg, mappings.bold, mappings.reg], everlane, nicole);
const elemFour = scrollItemRTL(about, [factoryText1, factoryText2], [mappings.reg, mappings.bold], everlane, everlane);
const elemFive = scrollItemCenterTextOnly([workerControversy11, workerControversy12],[mappings.reg, mappings.bold], nyt);
const elemSix = scrollItemCenterTextOnly([workerControversy21, workerControversy22, workerControversy23, workerControversy24, workerControversy25], [mappings.reg, mappings.bold, mappings.reg, mappings.bold, mappings.reg ], nyt);
const elemSeven = scrollItemCenterTextOnly([makerWellBeing1, makerWellBeing2, makerWellBeing3], [mappings.reg, mappings.bold, mappings.reg], eco);
const elemEight = scrollItemCenterImageOnly(plastic, everlane);
const elemNine = scrollItemRTLTextOnly([cotton1, cotton2, cotton3, cotton4, cotton5], [cottonControversy1, cottonControversy2, cottonControversy3, cottonControversy4, cottonControversy5], [mappings.reg, mappings.bold,mappings.reg, mappings.bold,mappings.reg], [mappings.reg, mappings.bold,mappings.reg, mappings.bold,mappings.reg], everlane, eco);
const elemTen = scrollItemCenterTextOnly([sustainability1, sustainability2, sustainability3], [mappings.reg, mappings.bold, mappings.reg], eco);
const elemEleven = scrollItemCenterTextOnly([wagesControversy1, wagesControversy2], [mappings.reg, mappings.bold], remake);

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

class Everlane extends Component {

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
        if (elemIndex < elemIndices.eleven){
            var newIndex = elemIndex + 1;
            this.setState({
                elemIndex: newIndex,
                elem: elemMappings[newIndex],
            });
        } 
        // else {
        //     // let's go into the visualization?
        //     this.props.updateState(states.visualization)
        // } 
    }

    updateElemBackwards = (elemIndex) => {
        if (elemIndex > elemIndices.one){
            var newIndex = elemIndex - 1;
            this.setState({
                elemIndex: newIndex,
                elem: elemMappings[newIndex],
            });
        } 
        // else {
        //     // let's go back to the intro?
        //     this.props.updateState(states.introduction)
        // }
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
                                style={{fontSize:"20px", color:colors.soft_green, backgroundColor: "transparent"}} 
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
                                style={{fontSize:"20px", color:colors.soft_green, backgroundColor: "transparent"}} 
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


export default Everlane;