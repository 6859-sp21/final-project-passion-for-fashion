import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas,
  DiscreteColorLegend
} from 'react-vis';

import React, {Component} from 'react';
import {format} from 'd3-format';

import colors from './../constants/colors';

import brandData from '../Visualization/brand_page_info.json';

import {Paper, Typography} from "@material-ui/core";

const APPAREL_TYPES = [
  "activewear",
  "tops",
  "denim",
  "dresses",
  "knitwear",
  "suits",
  "sleepwear",
  "swimwear",
  "maternity",
  "plus-size",
  "shoes",
  "bags",
]

const ITEMS = [
  {
    title: '0 (Insufficient Info)',
    color: colors.dark_grey,
  },
  {
    title: '1 (We avoid)',
    color: colors.bold_pink,
  },
  {
    title: '2 (Not good enough)',
    color: colors.bold_yellow,
  },
  {
    title: '3 (It\'s a start)',
    color: colors.bold_green,
  },
  {
    title: '4 (Good)',
    color: colors.bold_blue,
  },
  {
    title: '5 (Great)',
    color: colors.bold_purple,
  },
];

const RATING_NUMS = [0, 1, 2, 3, 4, 5];
const RATINGS = ['We avoid', 'Not good enough', 'It\'s a start', 'Good', 'Great'];
const RATING_TYPES = ['people', 'planet', 'animals'];
const RATING_TO_COLOR = {
  0: colors.dark_grey,
  1: colors.bold_pink,
  2: colors.bold_yellow,
  3: colors.bold_green,
  4: colors.bold_blue,
  5: colors.bold_purple
}
const PRICINGS = ["", "$", "$$", "$$$"];

const basicFormat = format('.1r');
const wideFormat = format('.3r');

const WIDTH= document.documentElement.clientWidth * 0.30;
const HEIGHT= document.documentElement.clientHeight * 0.40;


export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredCell: false,
      selected: [],
      seriesData: null,
    }
  }

  componentWillMount() {
    // // process the brandData
    // var apparelTypes = [];

    // // get apparel types
    // for (let brandObj of brandData) {
    //   let types = brandObj.types.split(", ");
    //   for (let t of types) {
    //     if (!apparelTypes.includes(t)){
    //       apparelTypes.push(t);
    //     }
    //   }
    // }

    var seriesData = {};
    // {people: {we avoid: 10, great: 5, good: 6, etc.}}
    // cluster = rating type
    // x = apparel type
    // y = # of brands
    // color = exact rating

    // initialize it
    for (let t of RATING_TYPES){
      seriesData[t] = {};
      for (let r of RATING_NUMS) {
        seriesData[t][r] = APPAREL_TYPES.map((t) => {return 0});
      }
    }

    // add up
    for (let brandObj of brandData) {
      let types = brandObj.types.split(", ");
      const {people, planet, animals} = brandObj;

      for (let t of types) {
        let tIdx = APPAREL_TYPES.indexOf(t);
        if (people != null) {seriesData.people[people][tIdx] += 1;}
        if (planet != null) {seriesData.planet[planet][tIdx] += 1;}
        if (animals != null) {seriesData.animals[animals][tIdx] += 1;}
      }
    }

    console.log(seriesData);

    this.setState({seriesData: seriesData});
  }

  getBars() {
    let barJSX = [];

    for (let t of RATING_TYPES) {
      for (let r of RATING_NUMS) {
        console.log(t, r);
        barJSX.push(
          <HorizontalBarSeries
            cluster={t}
            color={RATING_TO_COLOR[r]}
            data={ 
              this.state.seriesData[t][r].map((element, index) => {
                return {y: index, x: element};
              })
            }
          />
        )
      }
    }

    return barJSX;
  }

  render() {
    console.log(this.state);
    return (
      <Paper elevation={2} style={{margin: "2vw 2vw 2vw 1vw", width: "37vw", height:"85vh", display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'flex-start'}}>
        <Typography variant="h4" style={{padding: "1vw", color: colors.bold_blue}}>Apparel Types</Typography>
        {this.state.seriesData != null && (
          <div style={{padding: "0vh", display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
            <XYPlot
              margin={{left: 100}}
              width={WIDTH} 
              height={HEIGHT} 
              stackBy="x"
              yType="ordinal"
              items={ITEMS}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis title="Number of Companies"/>
              <YAxis
                tickFormat={function tickFormat(value){
                  return APPAREL_TYPES[value];
                }}
              />
              {this.getBars()}
            </XYPlot>
            <DiscreteColorLegend 
              colors={[0, 1, 2, 3, 4, 5].map((index) => RATING_TO_COLOR[index])}
              width={WIDTH} 
              height={HEIGHT*0.5} 
              items={ITEMS.map((item) => {
                return (
                  <div style={{color: item.color}}>
                    {item.title}
                  </div>
                );
              })} 
            />
          </div>
        )}
      </Paper>
    );
  }
}