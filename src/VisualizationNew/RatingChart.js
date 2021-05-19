import {Hint, RadarChart} from 'react-vis';

import React, {Component} from 'react';
import {format} from 'd3-format';

import {Paper, Typography} from "@material-ui/core";

const DATA = [
  {
    name: 'Mercedes',
    mileage: 7,
    price: 10,
    safety: 8,
    performance: 9,
    interior: 7,
    warranty: 7
  },
  {
    name: 'Honda',
    mileage: 8,
    price: 6,
    safety: 9,
    performance: 6,
    interior: 3,
    warranty: 9
  },
  {
    name: 'Chevrolet',
    mileage: 5,
    price: 4,
    safety: 6,
    performance: 4,
    interior: 5,
    warranty: 6
  }
];

const basicFormat = format('.2r');
const wideFormat = format('.3r');

const tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};

export default class RatingChart extends Component {
  state = {
    hoveredCell: false
  };

  render() {
    const {hoveredCell} = this.state;

    return (
      <Paper elevation={2} style={{margin: "2vw 2vw 2vw 1vw", width: "37vw", height:"50vh", display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'flex-start'}}>
        <Typography variant="h4" style={{padding: "1vw"}}>Compare Sub-Ratings</Typography>
        <div style={{margin: "0vw 1vw 1vw"}}>
          Select at most 5 brands on the left to compare their ratings across categories.
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <RadarChart
            data={DATA}
            tickFormat={t => wideFormat(t)}
            startingAngle={0}
            domains={[
              {name: 'mileage', domain: [0, 10]},
              {
                name: 'price',
                domain: [2, 16],
                tickFormat: t => `$${basicFormat(t)}`,
                getValue: d => d.price
              },
              {name: 'safety', domain: [5, 10], getValue: d => d.safety},
              {name: 'performance', domain: [0, 10], getValue: d => d.performance},
              {name: 'interior', domain: [0, 7], getValue: d => d.interior},
              {name: 'warranty', domain: [10, 2], getValue: d => d.warranty}
            ]}
            width={400}
            height={300}
            onSeriesMouseOver={(data) => {
              this.setState({hoveredCell: data.event[0]});
            }}
            onSeriesMouseOut={() => this.setState({hoveredCell: false})}
          >
            {hoveredCell && (
              <Hint value={{x: 0, y: 0}}>
                <div style={tipStyle}>{hoveredCell.name}</div>
              </Hint>
            )}
          </RadarChart>
        </div>
      </Paper>
    );
  }
}