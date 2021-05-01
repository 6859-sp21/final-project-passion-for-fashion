import React, {Component} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import Button from '@material-ui/core/Button';
import colors from './../constants/colors';
import states from './../constants/states';

import about from './Images/Everlane/everlane_about_factory.jpeg';
import promise from './Images/Everlane/everlane_promises.jpeg';
import intro from './Images/Everlane/everlane_about_intro.jpeg';
import factory from './Images/Everlane/everlane_ethical_approach_intro.jpeg';
import plastic from './Images/Everlane/everlane_no_new_plastic.jpeg';

import Scroll from './Scroll';

// const simpleParallax = require('simple-parallax-js');

// const para = new simpleParallax(intro, {
// 	delay: .6,
// 	transition: 'cubic-bezier(0,0,0,1)'
// });

class Narrative extends Component {

    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        this.props.updateState(states.visualization);
    }

    render() {
        
        return (
            <ParallaxProvider
                scrollAxis = 'vertical'
            >
                <Parallax y={['400px', '100px']}>
                    <div style={{margin: 'auto', width: '50%', textAlign: 'center'}}>
                        <h1>Everlane</h1>
                        <img src={intro} alt="intro" width="100%" height="100%" />
                        <div style={{marginTop: '20px'}}>
                            <p>
                                At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.
                            </p>
                        </div>
                    </div>  
                </Parallax>
                <Parallax y={['800px', '300px']} x={[10, 10]}>
                    <div style={{width: '50%'}}>
                        <img src={promise} alt="promise" width="100%" height="100%" />
                        <p>
                           "Let me just say this. If you’re looking for a “no-frills” approach to clothing, look no further than Everlane ... As a customer, it finally feels like I’ve found my home and can see myself sticking around for a while. Here’s why. Initially I was looking for alternatives to fast fashion retailers (which comes with unethical fashion practices), and designer brands that carried too high of a price tag for what they’re selling. I was on the hunt for brands that believed in doing fashion ethically in addition to what they could offer their customers aesthetically. Everlane was one of those brands that stood out to me."
                        </p>
                    </div>
                </Parallax>
                <Parallax y={['1200px', '500px']} x={[40, 40]} >
                    <div style={{marginLeft: '50px', width: '50%'}}>
                        <img src={factory} alt="factory" width="85%" height="85%" />
                        <p>
                           "To ensure the continued integrity of our factory partners, we develop strong relationships with the people at the facility and work with third-party auditors to evaluate factors like fair wages, labor conditions, reasonable hours, and a safe work environment."
                        </p>
                    </div> 
                </Parallax>
                <Parallax y={['1600px', '700px']}>
                    <div style={{marginLeft: '50px', width: '50%'}}>
                        <img src={plastic} alt="plastic" width="85%" height="85%" />
                        <p>
                        "Worldwide, cotton farming uses more toxic pesticides per acre than any other crop. These chemicals are harming our planet—stripping the land of nutrients, contaminating our water, and endangering the people who grow it. That’s why we’re moving all our cotton to certified organic by 2023."
                        </p>
                    </div> 
                </Parallax>
                {/* <Parallax x={[48, 48]} y={['-200px', '100px']}>
                    <div style={{ width: '50%'}}>
                        <p>
                        "Worldwide, cotton farming uses more toxic pesticides per acre than any other crop. These chemicals are harming our planet—stripping the land of nutrients, contaminating our water, and endangering the people who grow it. That’s why we’re moving all our cotton to certified organic by 2023."
                        </p>
                    </div>
                </Parallax> */}
                <Parallax y={['800px', '500px']}>
                    <div style={{marginLeft: '50px', width: '50%'}}>
                        <p>
                            Head to the visualization to learn more...
                        </p>
                        <Button 
                        variant="contained" 
                        onClick={this.onSubmit} 
                        style={{
                            color: colors.medium_grey,
                            size: "small",
                            backgroundColor: colors.soft_blue,
                        }}>
                            Head to Visualization
                        </Button>
                    </div> 
                </Parallax>
            </ParallaxProvider>
            // <div>
            //     <Scroll/>
            //     <h2 style={{color: colors.black}}>Welcome to the Narrative</h2>
            //     <Button variant="contained" onClick={this.onSubmit} style={{
            //     color: colors.medium_grey,
            //     size: "small",
            //     backgroundColor: colors.soft_blue,
            //     }}>Head to Visualization</Button>
            // </div>
        );
    }

}

export default Narrative;