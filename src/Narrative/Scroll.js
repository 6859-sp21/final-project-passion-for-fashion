import React, {Component, Image} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import colors from './../constants/colors';
import about from './Images/Everlane/everlane_about_factory.jpeg';
import promise from './Images/Everlane/everlane_promises.jpeg';
import intro from './Images/Everlane/everlane_about_intro.jpeg';

import './styles.css'
// const intro = require('./Images/Everlane/everlane_about_intro.jpeg');

// Image intro = open('./Images/Everlane/everlane_about_intro.jpeg');

// const ParallaxImage = (
//     <Parallax y={[-20, 20]} tagOuter="figure">
//         <Image src="./Images/everlane_about_factory.jpeg" />
//     </Parallax>
// );

// const Banner = (
//     <ParallaxBanner
//         // className="your-class"
//         layers={[
//             {
//                 image: "./Images/everlane_about_factory.jpeg",
//                 amount: 0.1,
//             },
//             {
//                 image: "./Images/everlane_promises.jpeg",
//                 amount: 0.2,
//             },
//         ]}
//         style={{
//             height: '500px',
//         }}
//     >
//         <h1>Banner Children</h1>
//     </ParallaxBanner>
// );

class Scroll extends Component {
    render() {
        return (
            <ParallaxProvider
                scrollAxis = 'vertical'
            >
                <Parallax 
                    y={[-20, 20]}
                    styleInner={{style: {
                        alignItems: 'center'}
                    }}
                >
                    <img src={intro} alt="intro" width="50%" height="50%" />
                </Parallax>
                <Parallax y={[0, 20]}>
                    <img src={promise} alt="promise" width="50%" height="50%" />
                </Parallax>
            </ParallaxProvider>
        );
    }
}

export default Scroll;