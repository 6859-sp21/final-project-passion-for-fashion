import {Hint, RadialChart, DiscreteColorLegend} from 'react-vis';

import React, {Component} from 'react';
import {format} from 'd3-format';

import colors from '../constants/colors';
import brandData from '../Visualization/brand_page_info.json';

import {Paper, Typography} from "@material-ui/core";

const RATINGS = ['We avoid', 'Not good enough', 'It\'s a start', 'Good', 'Great'];
const PRICINGS = ["", "$", "$$", "$$$"];
const SUBRATINGS = ["1", "2", "3", "4", "5"];
const RATING_TYPES = ['Overall', 'People', 'Planet', 'Animals'];
const possible_values = [1, 2, 3, 4, 5];

const legendColors = [colors.soft_pink, colors.soft_purple, colors.soft_blue, colors.soft_green, colors.soft_yellow]
const legendTextColors = [colors.bold_pink, colors.bold_purple, colors.bold_blue, colors.bold_green, colors.bold_yellow]

const basicFormat = format('.1r');
const wideFormat = format('.3r');

const WIDTH= document.documentElement.clientWidth * 0.10;
const HEIGHT= document.documentElement.clientHeight * 0.10;

const ITEMS = [
  {
    title: '1 (We avoid)',
    color: colors.bold_pink,
  },
  {
    title: '2 (Not good enough)',
    color: colors.bold_purple,
  },
  {
    title: '3 (It\'s a start)',
    color: colors.bold_blue,
  },
  {
    title: '4 (Good)',
    color: colors.bold_green,
  },
  {
    title: '5 (Great)',
    color: colors.bold_yellow,
  },
];


export default class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredCell: false,
      selected: [],
      value: false,
      hovered: {
        rating: null,
      }
    }
  }

  componentDidMount() {

  }

  componentWillMount() {
    var ratingBreakdown = {
      'Overall': {
        1: 0,
        2: 0,
        3: 0, 
        4: 0,
        5: 0,
      },
      'People': {
        1: 0,
        2: 0,
        3: 0, 
        4: 0,
        5: 0,
      },
      'Planet': {
        1: 0,
        2: 0,
        3: 0, 
        4: 0,
        5: 0,
      },
      'Animals': {
        1: 0,
        2: 0,
        3: 0, 
        4: 0,
        5: 0,
      },
    }

    var totals = {
      'Overall': 0,
      'People': 0,
      'Planet': 0,
      'Animals': 0,
    }

    // aggregate

    for (let brandObj of brandData) {
      let {rating, people, planet, animals} = brandObj;
      if (rating != null && RATINGS.indexOf(rating) != -1) {
        totals.Overall += 1;
        ratingBreakdown.Overall[RATINGS.indexOf(rating) + 1] += 1;
      }

      if (people != null && SUBRATINGS.indexOf(people) != -1) {
        totals.People += 1;
        ratingBreakdown.People[people] += 1;
      }
      if (planet != null && SUBRATINGS.indexOf(planet) != -1) {
        totals.Planet += 1;
        ratingBreakdown.Planet[planet] += 1;
      }
      if (animals != null && SUBRATINGS.indexOf(animals) != -1) {
        totals.Animals += 1;
        ratingBreakdown.Animals[animals] += 1;
      }
    }

    console.log(ratingBreakdown);

    // average
    for (let category in ratingBreakdown) {
      for (let rating in ratingBreakdown[category]) {
        ratingBreakdown[category][rating] *= (1 / totals[category]);
      }
    }

    // turn into usable data

    var ratingData = {
      'Overall': [],
      'People': [],
      'Planet': [],
      'Animals': [],
    }

    for (let type of RATING_TYPES) {
      for (let rating of possible_values) {
        ratingData[type].push({
          rating: rating + " (" + RATINGS[rating-1] + ")",
          angle: ratingBreakdown[type][rating]
        });
      }
    }

    this.setState({
      ratingData: ratingData,
    })
    
  }

  render() {
    console.log(this.state.hovered);
    console.log(this.state.ratingData);

    return (
      <Paper elevation={2} style={{margin: "2vw 2vw 2vw 1vw", width: "37vw", height:"84vh", display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'flex-start'}}>
        <Typography variant="h4" style={{padding: "1vw", color: colors.bold_blue}}>Rating Breakdown</Typography>
        <div style={{margin: "0vw 1vw 1vw"}}>
          See how overall ratings typically break down into subcategories.
        </div>
        <div style={{display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{padding: "1vw"}}>
            <DiscreteColorLegend 
              colors={legendTextColors} 
              width={WIDTH} 
              height={WIDTH} 
              // items={ITEMS.map((item) => {
              //   return (
              //     <div style={{color: item.color}}>
              //       {item.title}
              //     </div>
              //   );
              // })} 
              items={ITEMS.map(
                (item, key) =>
                this.state.hovered.rating && this.state.hovered.rating === item.title ? (
                  <div style={{color: legendTextColors[key], fontSize:'20px'}}>
                    {item.title}
                  </div>
                ) : (
                  <div style={{color: legendTextColors[key]}}>
                    {item.title}
                  </div>
                )
              )}/>
          </div>
          {RATING_TYPES.map((type) => {
            return (
              <div style={{margin: "0.5vw 1vw", display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                <div>{type}</div>
                <br/>
                <RadialChart
                  data={this.state.ratingData[type]}
                  width={WIDTH}
                  height={WIDTH} 
                  innerRadius={WIDTH/2*0.8}
                  radius={WIDTH/2}
                  padAngle={0.04}
                  colorRange={legendColors}
                  onValueMouseOver={v => this.setState({hovered: v})}
                  onSeriesMouseOut={v => this.setState({hovered: false})}
                >
                </RadialChart>
              </div>
            )
          })}
          
        </div>
      </Paper>
    );
  }
}