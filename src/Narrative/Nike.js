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
import sourcing from './Images/Nike/nike_sourcing.jpeg'

// labels
const title = "Nike";
const subtitle = "Considering the Planet and People. [TBD]"

// text
const sweatshop1 = "In 1991, American labour activist Jeffrey Ballinger published a report on Nike’s factory practices in Indonesia, exposing a scandal: below-minimum wages, child labour and appalling conditions likened to a sweatshop – a factory or workshop where employees work long hours for low money in conditions that are hazardous to health."
const sweatshop2 = "Sweatshops are common in developing countries, including in Indonesia, India, Thailand, Bangladesh and Cambodia, where labour laws are rarely enforced. The factories, which are often housed in deteriorating buildings, are cramped with workers and pose fire dangers. Workers are also restricted access to the toilet and drinking water during the day. Companies such as Nike and Adidas will spruik the line that their factories have strict codes of conduct, but it is difficult to know if those codes are enforced in developing countries."
const sweatshop3 = "In 2001, Leila Salazar, corporate accountability director for Global Exchange, told The Guardian: \"During the last three years, Nike has continued to treat the sweatshop issue as a public relations inconvenience rather than as a serious human rights matter.\"";

const expose1 = "1992: Ballinger publishes an exposé of Nike. His Harper's article highlights an Indonesian worker who worked for a Nike subcontractor for 14 cents an hour, less than Indonesia's minimum wage, and documented other abuses."
const expose2 = "1996: Nike establishes a department tasked with working to improve the lives of factory laborers."
const expose3 = "1997: Efforts at promotion become occasions for public outrage. The company expands its \"Niketown\" retail stores, only to see increasing protests. Sports media begin challenging spokespeople like Michael Jordan."
const expose4 = "Nike tasks diplomat and activist Andrew Young with examining its labor practices abroad. His report is criticized for being soft on Nike. Critics object to the fact that he didn't address low wages, used Nike interpreters to translate, and was accompanied by Nike officials on factory visits. Since Young's report was largely favorable, Nike is quick to publicize it, which increases backlash."
const expose5 = "The real shift begins with a May 1998 speech by then-CEO Phil Knight. “The Nike product has become synonymous with slave wages, forced overtime, and arbitrary abuse,” Knight said. “I truly believe the American consumer doesn’t want to buy products made under abusive conditions.”"
const expose6 = "1999: Nike begins creating the Fair Labor Association, a non-profit group that combines companies, and human rights and labor representatives to establish independent monitoring and a code of conduct, including a minimum age and a 60-hour work week, and pushes other brands to join."
const expose7 = "2002-2004: The company performs some 600 factory audits between 2002 and 2004, including repeat visits to problematic factories."
const expose8 = "2005: Nike becomes the first in its industry to publish a complete list of the factories it contracts with."

const nikeSafety1 = "We believe all people enjoy a fundamental right to the protection of life and health in the workplace. As our global business evolves, NIKE aims to provide safe, hygienic, and healthy workplaces across our value chain, which includes workplaces operated by suppliers. We do this by adopting and refining safety systems and rules; through education and training; and by fostering a culture of health and safety."
const nikeSafety2 = "Throughout the past five years, we have defined a roadmap for achieving world-class safety performance, tested and piloted programs to create advanced health and safety management systems, and developed new tools to measure individual competencies and leadership capabilities that enable a mature culture of health and safety in the workplace. During our pilot, we found that our control lines where the health and safety systems were piloted had 85% lower injury and illness rates compared to traditional manufacturing lines. Control lines were tested at eight different manufacturing facilities through 4 million working hours."

const timeline1 = "Nike committed to transparency. With its fiscal year 2004 CSR report, Nike went public with its list of suppliers — data that many companies view as among their “highest competitive advantages,” says Jones, who wrote the report. “Now NGOs on the ground know which factories we’re in, if they see any issues they know how to alert us.” "
const timeline2 = "Currently, 86 percent of Nike contract factories are rated bronze or above in Nike’s Sustainable Manufacturing and Sourcing Index (SMSI), an internal tool that rates factories on health, safety and the environment and indicates that legal wages are being paid. Nike is targeting 100 percent bronze-or-above-rated factories by 2020. A factory’s SMSI result “can lead to greater volume and growth, it can also lead to less volume and ultimately exit,” says Jones."


// sources
const newidea = "New Idea"
const business = "Business Insider"
const nike = "Nike"
const goodonyou = "Good On You"
const businessOfFashion = "Business of Fashion"

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
    'twelve': 12,
}

const elemOne = scrollItemCenterTitle(title, subtitle);
const elemTwo = scrollItemCenterTextOnly([sweatshop1], [mappings.reg], newidea);
const elemThree = scrollItemLTR(sweatshopIm, [sweatshop2], [mappings.reg], newidea, newidea);
const elemFour = scrollItemCenterTextOnly([expose2], [mappings.reg], business);
const elemFive = scrollItemCenterTextOnly([expose3], [mappings.reg], business);
const elemSix = scrollItemCenterTextOnly([expose4], [mappings.reg], business);
const elemSeven = scrollItemCenterTextOnly([expose5], [mappings.reg], business);
const elemEight = scrollItemCenterTextOnly([sweatshop3], [mappings.reg], newidea);
const elemNine = scrollItemCenterTextOnly([expose7], [mappings.reg], business);
const elemTen = scrollItemCenterTextOnly([expose8], [mappings.reg], business);
const elemEleven = scrollItemLTR(sourcing, [nikeSafety1], [mappings.reg], nike, nike);
const elemTwelve = scrollItemCenterTextOnly([timeline1, timeline2], [mappings.reg, mappings.reg], businessOfFashion);


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
    12: elemTwelve,
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

        if (elemIndex < elemIndices.twelve){
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