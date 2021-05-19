import {Hint, RadarChart, DiscreteColorLegend} from 'react-vis';

import React, {Component} from 'react';
import {format} from 'd3-format';

import colors from './../constants/colors';

import {Paper, Typography} from "@material-ui/core";

const RATINGS = ['We avoid', 'Not good enough', 'It\'s a start', 'Good', 'Great'];
const PRICINGS = ["", "$", "$$", "$$$"];

const basicFormat = format('.1r');
const wideFormat = format('.3r');

const legendColors = [colors.soft_pink, colors.soft_purple, colors.soft_blue, colors.soft_green, colors.soft_yellow]
const legendTextColors = [colors.bold_pink, colors.bold_purple, colors.bold_blue, colors.bold_green, colors.bold_yellow]

const WIDTH= document.documentElement.clientWidth * 0.30;
const HEIGHT= document.documentElement.clientHeight * 0.45;

const tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};

export default class RatingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredCell: false,
      selected: [],
    }
  }

  componentDidMount() {
    if (this.props.selectedCompanies == []){
      this.setState({
        selected: [],
      })
    } else {
      this.runMountTasks();
    }    
  }

  componentDidUpdate() {
    if (this.props.selectedCompanies == []) {
      this.setState({
        selected: []
      })
    } else if (this.props.selectedCompanies.length != this.state.selected.length) {
      this.runMountTasks();
    } else if (this.props.selectedCompanies) {
      var shouldRun = false;

      for (var company of this.state.selected.map((brandObj) => (brandObj.name))) {
        if (!this.props.selectedCompanies.map((brandObj) => (brandObj.name)).includes(company)) {
          shouldRun = true;
        }

      }

      if (shouldRun) {
        this.runMountTasks();
      }
    }
    
  }

  runMountTasks() {
    const fixedSelected = this.props.selectedCompanies.map((brandObj) => {
      brandObj.ratingNum = RATINGS.indexOf(brandObj.rating) + 1;
      return brandObj;
    })
    
    this.setState({
      selected: fixedSelected,
    })
  }

  // legendFunction = (value, index, array) => {
  //   const titleText =
  //   ( {this.state.name === value ? 
  //     <div style={{color: legendTextColors[index]}}>
  //       {value.name}
  //     </div> : <div style={{color: legendTextColors[index]}}>
  //       {value.name}
  //     </div> }
  //   );

  //   return {
  //     title: titleText,
  //     strokeWidth: 0,
  //     strokeHeight: 0,
  //   };
  // }

  render() {
    const {hoveredCell} = this.state;

    return (
      <Paper elevation={2} style={{margin: "2vw 2vw 2vw 1vw", width: "37vw", height:"80vh", display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'flex-start'}}>
        <Typography variant="h4" style={{padding: "1vw", color: colors.bold_blue}}>Sub-Ratings</Typography>
        <div style={{margin: "0vw 1vw 1vw"}}>
          Select at most 5 brands on the left to compare their ratings across categories.
        </div>
        <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
          {this.state.selected.length > 0 && this.state.selected.length <= 5 && (
            <div>
              <div style={{padding: "1vh"}}>
                <RadarChart
                  colorRange={legendColors}
                  data={this.state.selected}
                  tickFormat={t => basicFormat(t)}
                  startingAngle={0.8}
                  domains={[
                    {name: 'Overall', domain: [0, 5], getValue: d => d.ratingNum},
                    {name: 'People', domain: [0, 5], getValue: d => d.people},
                    {name: 'Planet', domain: [0, 5], getValue: d => d.planet},
                    {name: 'Animals', domain: [0, 5], getValue: d => d.animals}
                  ]}
                  width={WIDTH}
                  height={HEIGHT}
                  onSeriesMouseOver={(data) => {
                    console.log(data)
                    this.setState({hoveredCell: data.event[0]});
                  }}
                  onSeriesMouseOut={() => this.setState({hoveredCell: false})}
                  renderAxesOverPolygons={true}
                >
                </RadarChart>
              </div>
              <DiscreteColorLegend 
                colors={legendColors} 
                width={WIDTH} 
                height={HEIGHT*0.5} 
                items={this.state.selected.map(
                  (item, key) =>
                  hoveredCell.name === item.name ? (
                    <div style={{color: legendTextColors[key], fontSize:'20px'}}>
                      {item.name}
                    </div>
                  ) : (
                    <div style={{color: legendTextColors[key]}}>
                      {item.name}
                    </div>
                  )
                )}/>
            </div>
          )}
        </div>
      </Paper>
    );
  }
}