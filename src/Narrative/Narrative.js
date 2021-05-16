import React, {Component} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax} from 'react-scroll-parallax';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import Everlane from './Everlane';

import colors from './../constants/colors';
import states from './../constants/states';
import narratives from './../constants/narratives';

import intro from './Images/Everlane/everlane_about_intro.jpeg';
import about from './Images/Everlane/everlane_about_factory.jpeg';
import promise from './Images/Everlane/everlane_promises.jpeg';
// import factory from './Images/Everlane/everlane_ethical_approach_intro.jpeg';
import plastic from './Images/Everlane/everlane_no_new_plastic.jpeg';

// all of the text blurbs
const introText = 'At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.';
const customerPraise = 'Let me just say this. If you’re looking for a “no-frills” approach to clothing, look no further than Everlane ... As a customer, it finally feels like I’ve found my home and can see myself sticking around for a while. Here’s why. Initially I was looking for alternatives to fast fashion retailers (which comes with unethical fashion practices), and designer brands that carried too high of a price tag for what they’re selling. I was on the hunt for brands that believed in doing fashion ethically in addition to what they could offer their customers aesthetically. Everlane was one of those brands that stood out to me.';
const cotton = 'Worldwide, cotton farming uses more toxic pesticides per acre than any other crop. These chemicals are harming our planet—stripping the land of nutrients, contaminating our water, and endangering the people who grow it. That’s why we’re moving all our cotton to certified organic by 2023.';
const factoryText = 'To ensure the continued integrity of our factory partners, we develop strong relationships with the people at the facility and work with third-party auditors to evaluate factors like fair wages, labor conditions, reasonable hours, and a safe work environment.';
const wagesControversy = 'Since early 2020, Everlane has been embroiled in controversy for union busting its American workers while also preventing them from discussing their wages with one another. An important aspect of every sustainable brand is the allowance of workers to unionize. It’s disappointing that Everlane is against unions, unable to provide information about factory conditions, has no energy reduction policy, or essentially anything that confirms its the sustainable company it’s always said it was. As far as we can tell, Everlane is just another brand utilizing greenwashing tactics for sales.';
const cottonControversy = 'While most of the brands that pass our criteria use organic cotton as a bare minimum, many go above and beyond with recycled fabrics, upcycled fabrics, hemp, linen, and Tencel. Everlane on the other hand makes virtually no effort on sustainable fabrics across their large and diverse product range.';
const workerControversy = 'Investigators found that insensitive terms were used while discussing Black models; that leaders violated employees’ personal space by touching them, and used inappropriate terms when referring to people of color; that new hires felt isolated and unwelcome; that there was lack of consistent policies around promotions; that there were no formal processes to effectively escalate harassment or discrimination.';
const workerControversy2 = 'Ms. Kwadzogah was one of a group of remote customer-experience workers who announced in December they were unionizing. Broadly speaking, they’d come to feel like “second-class citizens,” said Jon Foor, who joined Everlane’s customer experience team in 2018, with no opportunities for career growth and none of the start-up perks — annual retreats, kombucha on tap — enjoyed by full-time colleagues at headquarters. Everlane said that multiple members of this team have gone on to become full-time employees in other departments but did not specify how many. Three months later, 290 employees were laid off, including 42 of the remote customer-experience team’s 57 employees. Everlane said the company didn’t know which employees were part of the unionizing effort and attributed the layoffs to the economic pressures of the pandemic. The workers described it as union busting and were publicly supported by Senator Bernie Sanders.';
const makerWellBeing = 'To break this down, they have their own code of conduct that is comparable to FLA standards. Ok, well that’s good and they also invest in maker well-being programs. However, where they are lacking is any certification or other evidence that they pay living wages. They have no Fair Trade certification, no GOTS, no SA8000, etc.';
const sustainability = 'Most of their products offer no explanation for how or why they’re more sustainable than any other clothing product on the market.';

// all of the sources
const everlane = 'Everlane';
const eco = "Eco-Stylist";
const nyt = "the New York Times";
const remake = "Remake";
const nicole = "Nicole Ho, via her blog";


// various containers for showcasing text and images together and separately 
const scrollItemCenter = (image, text, source) => (
    <div style={{margin: 'auto', width:'50%'}}>
       <img alt="" src={image} width="100%" height="100%" /> 
        <div style={{marginTop: '20px'}}>
            <div>
                "{text}" 
            </div>
            <i style={{marginLeft: '20px'}}>
                - {source}
            </i>
        </div>
    </div>
);

const scrollItemCenterImageOnly = (image, source) => (
    <div style={{margin: 'auto', width:'50%'}}>
        <img alt="" src={image} width="100%" height="100%" /> 
        <i style={{marginLeft: '50px'}}>
                - {source}
        </i>
    </div>
);

const scrollItemCenterTextOnly = (text, source) => (
    <div style={{margin: 'auto', width:'50%'}}>
        <div>
            "{text}" 
        </div>
        <i style={{marginLeft: '20px'}}>
            - {source}
        </i>
    </div>
);

// const scrollItemLTRImageOnly = (image1, image2, imageSource1, imageSource2) => (
//     <div style={{display: 'flex', width:'100%'}}>
//         <div style={{ width:'50%', marginRight: '10px'}}>
//             <img src={image1} width="100%" height="100%" /> 
//             <i style={{marginLeft: '50px'}}>
//                 - {imageSource1}
//             </i>
//         </div>
//         <div style={{ width:'50%', marginLeft: '10px'}}>
//             <img src={image2} width="100%" height="100%" /> 
//             <i style={{marginLeft: '50px'}}>
//                 - {imageSource2}
//             </i>
//         </div>
//     </div>
// );

const scrollItemLTR = (image, text, imageSource, textSource) => (
    <div style={{display: 'flex', width:'100%'}}>
        <div style={{ width:'50%', marginRight: '10px'}}>
            <img alt="" src={image} width="100%" height="100%" /> 
            <i style={{marginLeft: '50px'}}>
                - {imageSource}
            </i>
        </div>
        <div style={{ width:'50%', marginTop: '8%', marginLeft: '10px'}}>
            <div>
                "{text}" 
            </div>
            <i style={{marginLeft: '20px'}}>
                - {textSource}
            </i> 
        </div>
        
    </div>
);

const scrollItemRTL = (image, text, imageSource, textSource) => (
    <div style={{display: 'flex', width:'100%'}}>
        <div style={{ width:'50%', marginTop: '8%', marginRight: '10px'}}>
            <div>
                "{text}" 
            </div>
            <i style={{marginLeft: '20px'}}>
                - {textSource}
            </i> 
        </div>
        <div style={{ width:'50%', marginLeft: '10px'}}>
            <img alt="" src={image} width="100%" height="100%" /> 
            <i style={{marginLeft: '50px'}}>
                - {imageSource}
            </i>
        </div>
        
    </div>
);

const scrollItemRTLTextOnly = (text1, text2, textSource1, textSource2) => (
    <div style={{ display: 'flex', width:'100%'}}>
        <div style={{ width:'50%', marginRight: '10px'}}>
            <div>
                "{text1}" 
            </div>
            <i style={{marginLeft: '20px'}}>
                - {textSource1}
            </i> 
        </div>
        <div style={{ width:'50%', marginLeft: '10px'}}>
            <div>
                "{text2}" 
            </div>
            <i style={{marginLeft: '20px'}}>
                - {textSource2}
            </i> 
        </div>
    </div>
);


class Narrative extends Component {

    constructor(props) {
        super(props);
    }

    getNarrative = (narrative) => {
        if (narrative === narratives.everlane) {
            return <Everlane
                    updateState = {this.props.updateState}
                    />;
        }
        else {
            return (
                <div>
                    Not a valid narrative
                </div>
            );
        }
    }

    onVisualizationSubmit = () => {
        this.props.updateState(states.visualization);
    }

    onIntroductionSubmit = () => {
        this.props.updateState(states.introduction);
    }

    render () {
        return this.getNarrative(this.props.narrative);
    }

    // render() {
    //     // based on prop passed in, return a certain visualization
    //     return (
    //         <ParallaxProvider>
    //             <Parallax
    //                  y={['0px', '-200px']}
    //             >
    //                 <div style={{marginTop:'250px'}}>
    //                     <h2 style={{color: colors.black, textAlign: "center"}}>Everlane</h2>
    //                     {scrollItemCenter(intro, introText, everlane)}
    //                 </div>
    //             </Parallax>
    //             {/* Factory Conditions and Worker Conditions */}
    //             <Parallax
    //                 y={['-100px', '0px']}
    //             >
    //                 <div style={{marginTop:'150px', marginLeft:'40px', marginRight:'40px'}}>
    //                     {scrollItemLTR(promise, customerPraise, everlane, nicole)}
    //                 </div>
    //             </Parallax>
    //             <Parallax y={['100px', '-100px']}>
    //                 <div style={{marginTop:'250px', marginLeft:'40px', marginRight:'40px'}}>
    //                     {scrollItemRTL(about, factoryText, everlane, everlane)}
    //                 </div>
    //             </Parallax>
    //             <Parallax y={['-100px', '0px']}>
    //                 <div style={{marginTop:'150px', marginLeft:'40px', marginRight:'40px'}}>
    //                     {scrollItemCenterTextOnly(workerControversy, nyt)}
    //                 </div>
    //             </Parallax>
    //             <Parallax y={['100px', '0px']}>
    //                 <div style={{marginTop:'50px', marginLeft:'40px', marginRight:'40px'}}>
    //                     {scrollItemCenterTextOnly(workerControversy2, nyt)}
    //                 </div>
    //             </Parallax>
    //             <Parallax y={['-100px', '100px']}>
    //                 <div style={{marginTop:'250px', marginLeft:'40px', marginRight:'40px'}}>
    //                     {scrollItemCenterTextOnly(makerWellBeing, eco)}
    //                 </div>
    //             </Parallax>
    //             {/* Environmental Initiatives */}
    //             <Parallax y={['100px', '-250px']}>
    //                 <div style={{marginTop:'550px', marginLeft:'40px', marginRight:'40px'}}>
    //                     {scrollItemCenterImageOnly(plastic, everlane)}
    //                 </div>
    //             </Parallax>
    //             <Parallax y={['-100px', '0px']}>
    //                 <div style={{marginTop:'0px', marginLeft:'40px', marginRight:'40px'}}>
    //                     {scrollItemRTLTextOnly(cotton, cottonControversy, everlane, eco)}
    //                 </div>
    //             </Parallax>
    //             <Parallax y={['200px', '0px']}>
    //                 <div style={{marginTop:'100px', marginLeft:'40px', marginRight:'40px'}}>
    //                     {scrollItemCenterTextOnly(sustainability, eco)}
    //                 </div>
    //             </Parallax>
    //             {/* Concluding Statement */}
    //             <Parallax  y={['-300px', '100px']}>
    //                 <div style={{marginTop:'200px', marginLeft:'40px', marginRight:'40px', marginBottom:'350px'}}>
    //                     {scrollItemCenterTextOnly(wagesControversy, remake)}
    //                 </div>
    //             </Parallax>
    //             <Parallax y={['50px', '-50px']}>
    //                 <div style={{marginTop:'450px', marginLeft:'40px', marginRight:'40px', marginBottom:'100px'}}>
    //                     <div style = {{margin:'auto', width:'50%', display: 'flex'}}>
    //                         <div style = {{fontSize:'20px', marginTop: '10px', color: colors.soft_blue}}>
    //                             Let's Explore
    //                         </div>
    //                         <IconButton
    //                         children={<ArrowForwardIosIcon/>}
    //                         color="primary"
    //                         variant="contained" 
    //                         onClick={this.onVisualizationSubmit} 
    //                         style={{
    //                             color: colors.soft_blue,
    //                             size: "small",
    //                             backgroundColor: "transparent",
    //                         }}
    //                         />
    //                     </div>
    //                     <div style = {{margin:'auto', width:'50%', display: 'flex'}}>
    //                         <IconButton
    //                         children={<ArrowBackIosIcon/>}
    //                         color="primary"
    //                         variant="contained" 
    //                         onClick={this.onIntroductionSubmit} 
    //                         style={{
    //                             color: colors.soft_purple,
    //                             size: "small",
    //                             backgroundColor: "transparent",
    //                         }}
    //                         />
    //                         <div style = {{fontSize:'20px', marginTop: '10px', color: colors.soft_purple}}>
    //                             Back Home
    //                         </div>
    //                     </div>
    //                 </div>
    //             </Parallax>
    //         </ParallaxProvider>
    //     );
    // }

}

export default Narrative;